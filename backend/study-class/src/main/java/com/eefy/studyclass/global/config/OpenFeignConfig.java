package com.eefy.studyclass.global.config;

import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableFeignClients(basePackages = {"com.eefy.studyclass"})
public class OpenFeignConfig {
}
