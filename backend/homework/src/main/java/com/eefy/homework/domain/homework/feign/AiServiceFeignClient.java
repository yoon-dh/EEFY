package com.eefy.homework.domain.homework.feign;

import com.eefy.homework.domain.homework.dto.EvaluateAnnounceRequest;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

@FeignClient(name = "ai-service", url = "k9b306.p.ssafy.io:8001")
public interface AiServiceFeignClient {

    @PostMapping(value = "/api/ai/announce/evaluate")
    String getAnnounceScore(@RequestBody EvaluateAnnounceRequest evaluateAnnounceRequest);

    @PostMapping(value = "/api/ai/stt", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    String getSttText(@RequestPart("file") MultipartFile file);
}
