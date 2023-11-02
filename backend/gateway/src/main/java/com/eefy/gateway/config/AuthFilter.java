package com.eefy.gateway.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

@Slf4j
@Component
public class AuthFilter {

    @Bean
    public GlobalFilter customGlobalFilter() {
        return ((exchange, chain) -> {
            ServerHttpRequest request = exchange.getRequest();
            String path = request.getPath().toString();
            String method = request.getMethodValue();

            if (!isWhitePath(path, method)) {
                log.info("인증 작업이 필요한 요청. path: {}, method: {}", path, method);
                return handleUnAuthorized(exchange);
            }

            return chain.filter(exchange);
        });
    }

    private Mono<Void> handleUnAuthorized(ServerWebExchange exchange) {
        ServerHttpResponse response = exchange.getResponse();
        response.setStatusCode(HttpStatus.UNAUTHORIZED);
        return response.setComplete();
    }

    private boolean isWhitePath(String path, String method) {
        if (path.contains("/api/member")) {
            if (path.equals("/api/member") && (method.equals("GET") || method.equals("PUT"))) return false;
            else return !path.contains("auth") || (!method.equals("PUT") && !method.equals("DELETE"));
        }
        return false;
    }
}