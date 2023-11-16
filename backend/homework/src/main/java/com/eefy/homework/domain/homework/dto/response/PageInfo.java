package com.eefy.homework.domain.homework.dto.response;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class PageInfo {

    private Integer totalPageSize;
    private Integer currentPage;
    private Long totalElements;
    private Boolean hasNext;
    private Boolean hasPrev;

    public static PageInfo of(int currentPage, int totalPage, long totalElements){
        return PageInfo.builder()
            .currentPage(currentPage)
            .totalPageSize(totalPage)
            .totalElements(totalElements)
            .hasPrev(currentPage > 0)
            .hasNext(currentPage + 1 < totalPage)
            .build();
    }
}
