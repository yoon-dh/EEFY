package com.eefy.member.domain.member.jwt;

import com.eefy.member.domain.member.exception.JwtCustomException;
import com.eefy.member.domain.member.exception.message.JwtErrorEnum;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Base64;
import java.util.Date;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

@Slf4j
@RequiredArgsConstructor
@Component
public class JwtTokenProvider {

    @Value("${jwt.secret}")
    private String secret;
    @Value("${jwt.token.access-expiration}")
    private long accessExpiration;
    @Value("${jwt.token.refresh-expiration}")
    private long refreshExpiration;

    private final RedisTemplate<String, String> redisTemplate;

    @PostConstruct
    protected void init() {
        secret = Base64.getEncoder().encodeToString(secret.getBytes());
    }

    public String createAccessToken(String email, int userId) {
        Claims claims = Jwts.claims().setSubject(email);
        Date now = new Date();
        return Jwts.builder()
                .setClaims(claims)
                .setId(Integer.toString(userId))
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + accessExpiration))
                .signWith(SignatureAlgorithm.HS256, secret)
                .compact();
    }

    public String createRefreshToken(Integer id) {
        Date now = new Date();
        String refreshToken = Jwts.builder()
                .setId(Integer.toString(id))
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + refreshExpiration))
                .signWith(SignatureAlgorithm.HS256, secret)
                .compact();
        storeRefreshToken(id, refreshToken);
        return refreshToken;
    }

    public int getUserId(String token) {
        return Integer.parseInt(Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getId());
    }

    public Optional<String> extractRefreshToken(int userId) {
        return Optional.ofNullable(redisTemplate.opsForValue().get(Integer.toString(userId)));
    }

    private void storeRefreshToken(int id, String refreshToken) {

        redisTemplate.opsForValue().set(
                Integer.toString(id),
                refreshToken,
                refreshExpiration,
                TimeUnit.MILLISECONDS
        );
    }

    public void deleteRefreshToken(int userId) {
        redisTemplate.delete(Integer.toString(userId));
    }

    public boolean validateToken(String jwtToken) {
        try {
            Jws<Claims> claims = Jwts.parser().setSigningKey(secret).parseClaimsJws(jwtToken);
            return !claims.getBody().getExpiration().before(new Date());
        } catch (SignatureException e) {
            throw new JwtCustomException(JwtErrorEnum.INVALID_SIGNITURE);
        } catch (ExpiredJwtException e) {
            throw new JwtCustomException(JwtErrorEnum.EXPIRED_TOKEN);
        } catch (UnsupportedJwtException e) {
            throw new JwtCustomException(JwtErrorEnum.NOT_SUPPORT_TOKEN);
        } catch (IllegalArgumentException e) {
            throw new JwtCustomException(JwtErrorEnum.EMPTY_CLAIMS_STRING);
        } catch (NullPointerException e) {
            throw new JwtCustomException(JwtErrorEnum.EMPTY_REFRESH_TOKEN);
        } catch (Exception e) {
            throw new JwtCustomException(JwtErrorEnum.INVALID_JWT_TOKEN);
        }
    }
}
