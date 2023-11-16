package com.eefy.gateway.config;

import com.eefy.gateway.persistence.MemberRepository;
import com.eefy.gateway.persistence.entity.Member;
import com.eefy.gateway.persistence.entity.enums.MemberRole;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.util.Objects;
import java.util.Optional;

@Slf4j
@Component
@RequiredArgsConstructor
public class AuthFilter {
    private final JwtTokenParser jwtTokenParser;
    private final MemberRepository memberRepository;

    @Bean
    public GlobalFilter customGlobalFilter() {
        return ((exchange, chain) -> {
            ServerHttpRequest request = exchange.getRequest();
            String path = request.getPath().toString();
            String method = request.getMethodValue();
            log.info(path + " " + method);
            if (!isWhitePath(path, method)) {
                log.info("인증 작업이 필요한 요청. path: {}, method: {}", path, method);
                String jwtToken = getJwtToken(request);
                int memberId = jwtTokenParser.getUserId(jwtToken);
                Optional<Member> member = memberRepository.findById(memberId);
                if (!canPass(member, jwtToken, path)) {
                    return handleUnAuthorized(exchange);
                }
                request.mutate()
                        .header("Member-Id", String.valueOf(memberId))
                        .header("Authorization", "Bearer " + jwtToken)
                        .build();
                log.info("인증 완료. path: {}, method: {}", path, method);
            }
            else log.info("인증 미필요 작업.");

            return chain.filter(exchange);
        });
    }

    private String getJwtToken(ServerHttpRequest request) {
        return Objects.requireNonNull(
                request.getHeaders().getFirst("Authorization")).split(" ")[1];
    }

    private boolean canPass(Optional<Member> member, String jwtToken, String path) {
        return member.isPresent()
                && isValidAccessToken(jwtToken)
                && validAccessRole(path, member.get().getRole());
    }

    private boolean validAccessRole(String path, MemberRole role) {
        return (!path.contains("tutor") || role == MemberRole.TEACHER)
                && (!path.contains("student") || role == MemberRole.STUDENT);
    }

    private Mono<Void> handleUnAuthorized(ServerWebExchange exchange) {
        ServerHttpResponse response = exchange.getResponse();
        response.setStatusCode(HttpStatus.UNAUTHORIZED);
        return response.setComplete();
    }

    private boolean isValidAccessToken(String jwtToken) {
        return jwtTokenParser.validateToken(jwtToken);
    }

    private boolean isWhitePath(String path, String method) {
        if (path.contains("/api/auth")) {
            if (path.equals("/api/auth/refresh") && method.equals("PUT")) return false;
            return !path.equals("/api/auth") || (!method.equals("DELETE") && !method.equals("PUT"));
        }
        if (path.contains("/api/member")) {
            if (path.equals("/api/member") && method.equals("POST")) return true;
            if (path.equals("/api/member") && method.equals("GET")) return true;
        }
        if (path.contains("swagger-ui")) return true;
        return false;
    }
}