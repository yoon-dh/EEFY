package com.eefy.member.domain.member.jwt;

import com.eefy.member.domain.member.persistence.MemberRepository;
import com.eefy.member.domain.member.persistence.entity.Member;
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
import javax.servlet.http.HttpServletRequest;
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

    private final MemberRepository memberRepository;
    private final RedisTemplate<String, String> redisTemplate;

    @PostConstruct
    protected void init() {
        secret = Base64.getEncoder().encodeToString(secret.getBytes());
    }

    public String createAccessToken(String email, int userId) {
        Claims claims = Jwts.claims().setSubject(email);
        claims.put("userId", userId);
        Date now = new Date();
        return Jwts.builder()
                .setClaims(claims)
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

    public String getUserEmail(String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getSubject();
    }

    public String getUserId(String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getId();
    }

    public Optional<String> extractAccessToken(HttpServletRequest request) {
        return Optional.ofNullable(request.getHeader("Authorization"));

    }

    public Optional<String> extractRefreshToken(HttpServletRequest request) {
        return Optional.ofNullable(request.getHeader("Authorization-Refresh"));

    }

    private void storeRefreshToken(int id, String refreshToken) {
        Member member = memberRepository.findById(id)
                .orElseThrow(() -> {
                    log.error("refresh token 발급 오류: 요청 사용자 없음");
                    return new IllegalArgumentException("refresh token 발급 오류: 요청 사용자 없음");
                });

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
            log.warn("JWT 서명이 유효하지 않습니다.");
            throw new SignatureException("잘못된 JWT 시그니쳐");
        } catch (MalformedJwtException e) {
            log.warn("유효하지 않은 JWT 토큰입니다.");
            throw new MalformedJwtException("유효하지 않은 JWT 토큰");
        } catch (ExpiredJwtException e) {
            log.warn("만료된 JWT 토큰입니다.");
            throw new ExpiredJwtException(null, null, "토큰 기간 만료");
        } catch (UnsupportedJwtException e) {
            log.warn("지원되지 않는 JWT 토큰입니다.");
            throw new UnsupportedJwtException("지원되지 않는 JWT 토큰입니다.");
        } catch (IllegalArgumentException e) {
            log.warn("JWT claims string is empty.");
        } catch (NullPointerException e) {
            log.warn("JWT RefreshToken is empty");
        } catch (Exception e) {
            log.warn("잘못된 토큰입니다.");
        }
        return false;
    }
}
