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
package fr.recia.service.info.api.dao.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import fr.recia.service.info.api.config.bean.AppConfProperties;
import fr.recia.service.info.api.dao.IJsonFileDao;
import fr.recia.service.info.api.dto.ServiceInfoDto;
import fr.recia.service.info.api.service.CategoryMappingLoaderService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@Service
@Data
@AllArgsConstructor
@NoArgsConstructor
@Slf4j
public class IJsonFileDaoImpl implements IJsonFileDao {

    @Autowired
    private CategoryMappingLoaderService categoryMappingLoaderService;

    @Autowired
    private AppConfProperties appConfProperties;

    @Autowired
    private ObjectMapper objectMapper;

    @Override
    public ServiceInfoDto findServiceInfoFromFname(String fname, String folder) throws FileNotFoundException {
        final String filename = folder + "/" + fname + ".json";
        File file = new File(filename);
        if (!file.exists()) {
            throw new FileNotFoundException("Fichier JSON non trouvé : " + filename);
        }
        try {
            ServiceInfoDto serviceInfoDto = objectMapper.readValue(file, ServiceInfoDto.class);
            serviceInfoDto.setCategorie_principale(categoryMappingLoaderService.getValue(fname));
            return serviceInfoDto;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public List<String> findAllFiles() throws IOException {
        List<String> filenames = new ArrayList<>();
        Path dossier = Paths.get(appConfProperties.getJsonFolder());
        try (DirectoryStream<Path> stream = Files.newDirectoryStream(dossier)) {
            for (Path entry : stream) {
                if (Files.isRegularFile(entry)) {
                    String filename = entry.getFileName().toString();
                    int index = filename.lastIndexOf('.');
                    filenames.add((index > 0) ? filename.substring(0, index) : filename);
                }
            }
        }
        return filenames;
    }
}
