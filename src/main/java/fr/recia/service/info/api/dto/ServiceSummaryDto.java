package fr.recia.service.info.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ServiceSummaryDto {
    private String fname;
    private String categoriePrincipale;
    private boolean doesInfoExist;
}
