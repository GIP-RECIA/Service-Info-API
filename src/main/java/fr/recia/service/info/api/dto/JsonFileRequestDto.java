package fr.recia.service.info.api.dto;

import lombok.Data;

@Data
public class JsonFileRequestDto {
    private String fname;
    private String json;
    private boolean draft;
}
