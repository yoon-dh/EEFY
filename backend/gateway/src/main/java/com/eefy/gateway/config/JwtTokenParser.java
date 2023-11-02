package com.eefy.gateway.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;

import java.util.Date;

@Slf4j
public class JwtTokenParser {
    @Value("${jwt.secret}")
    private static String secret;

    public static boolean validateToken(String jwtToken) {
        System.out.println(secret);
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
            log.warn(e.getMessage());
            log.warn("JWT claims string is empty.");
        } catch (NullPointerException e) {
            log.warn("JWT RefreshToken is empty");
        } catch (Exception e) {
            log.warn("잘못된 토큰입니다.");
        }
        return false;
    }
}
