package com.eefy.member.global.config;

import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Configuration;

@EnableFeignClients("com.eefy.member.global.feign")
@Configuration
public class FeignConfig {
}
