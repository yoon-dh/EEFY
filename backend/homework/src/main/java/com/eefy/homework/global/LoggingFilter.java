package com.eefy.homework.global;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class LoggingFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;

        log.info("Request Info: {} {} {}", req.getMethod(), req.getRequestURI(), req.getParameterMap());

        chain.doFilter(request, response);

        log.info("Response Info: {}", response.getContentType());
    }

}
