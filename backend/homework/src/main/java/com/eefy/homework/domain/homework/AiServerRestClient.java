package com.eefy.homework.domain.homework;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "ai-service", url = "k9b306.p.ssafy.io:8001")
public interface AiServerRestClient {

    @GetMapping(value = "/api/ai/announce/evaluate/{filePath}")
    String getAnnounceScore(@PathVariable("filePath") String filePath);
}
