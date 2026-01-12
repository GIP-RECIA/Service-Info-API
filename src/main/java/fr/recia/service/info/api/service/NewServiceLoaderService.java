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
package fr.recia.service.info.api.service;

import fr.recia.service.info.api.config.bean.AppConfProperties;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@Slf4j
public class NewServiceLoaderService {

    private Set<String> data;

    @Autowired
    private AppConfProperties appConfProperties;

    @PostConstruct
    public void init() {
        String filePath = appConfProperties.getIsNewFile();
        data = new HashSet<>();
        try {
            data = Files.lines(Paths.get(filePath))
                    .filter(line -> !line.isEmpty())
                    .collect(Collectors.toSet());
            log.info("IsNewFile extrait avec succès !");
        } catch (IOException e) {
            log.error("Une erreur s'est produite pendant le chargement du fichier des nouveaux services", e);
        }

    }

    public boolean isNew(String fname) {
        return data.contains(fname);
    }

}
