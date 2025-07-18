/*
 * Copyright (C) 2025 GIP-RECIA https://www.recia.fr/
 * @Author (C) 2025 GIP-RECIA https://www.recia.fr/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *                 http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package fr.recia.service.info.api.config.bean;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.validation.annotation.Validated;

import javax.annotation.PostConstruct;
import javax.validation.constraints.NotNull;

@ConfigurationProperties(prefix = "app.conf")
@Data
@Validated
@Slf4j
public class AppConfProperties {

    @NotNull
    private String jsonFolder;
    @NotNull
    private String draftJsonFolder;
    @NotNull
    private String categoriesMappingFile;
    @NotNull
    private String casServiceId;
    @NotNull
    private String casServerUrl;
    @NotNull
    private String casProviderKey;
    @NotNull
    private String casTicketCallback;

    @PostConstruct
    public void setupAndDebug() {
        log.debug("AppConfProperties {}", this);
    }
}
