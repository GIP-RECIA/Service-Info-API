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

@Service
@Data
@AllArgsConstructor
@NoArgsConstructor
@Slf4j
public class IJsonFileDaoImpl implements IJsonFileDao {

    @Autowired
    private AppConfProperties appConfProperties;

    @Autowired
    private CategoryMappingLoaderService categoryMappingLoaderService;

    @Override
    public ServiceInfoDto findServiceInfoFromFname(String fname) throws FileNotFoundException {
        ObjectMapper mapper = new ObjectMapper();
        final String filename = appConfProperties.getJsonFolder() + "/" + fname + ".json";
        File file = new File(filename);
        if (!file.exists()) {
            throw new FileNotFoundException("Fichier JSON non trouvé : " + filename);
        }
        try {
            ServiceInfoDto serviceInfoDto = mapper.readValue(file, ServiceInfoDto.class);
            serviceInfoDto.setCategorie_principale(categoryMappingLoaderService.getValue(fname));
            return serviceInfoDto;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
