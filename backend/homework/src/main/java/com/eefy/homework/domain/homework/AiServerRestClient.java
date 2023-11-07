package com.eefy.homework.domain.homework;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "ai-service")
public interface AiServerRestClient {

    @GetMapping(value = "/api/ai/announce/evaluate/{filePath}")
    String getAnnounceScore(@PathVariable("filePath") String filePath);
}
