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
package fr.recia.service.info.api.service.impl;

import fr.recia.service.info.api.config.bean.AppConfProperties;
import fr.recia.service.info.api.dao.IJsonFileDao;
import fr.recia.service.info.api.dto.ServiceInfoDto;
import fr.recia.service.info.api.dto.ServiceSummaryDto;
import fr.recia.service.info.api.repository.PortalRepository;
import fr.recia.service.info.api.service.CategoryMappingLoaderService;
import fr.recia.service.info.api.service.ServiceInfoAPIService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class ServiceInfoAPIServiceImpl implements ServiceInfoAPIService {

    @Autowired
    private IJsonFileDao jsonFileDao;

    @Autowired
    private PortalRepository portalRepository;

    @Autowired
    private AppConfProperties appConfProperties;

    @Autowired
    private CategoryMappingLoaderService categoryMappingLoaderService;

    @Override
    @Cacheable(value="service-info", key = "#fname")
    public ServiceInfoDto getServiceInfo(final String fname) throws FileNotFoundException {
        return jsonFileDao.findServiceInfoFromFname(fname, appConfProperties.getJsonFolder());
    }

    @Override
    public ServiceInfoDto getDraftServiceInfo(final String fname) throws FileNotFoundException {
        return jsonFileDao.findServiceInfoFromFname(fname, appConfProperties.getDraftJsonFolder());
    }

    @Override
    @Cacheable(value = "service-all")
    public List<ServiceSummaryDto> getAllServices() throws IOException {
        List<String> allServices = portalRepository.getPorletsFNames();
        List<String> allJsons = jsonFileDao.findAllFiles();
        List<ServiceSummaryDto> serviceSummaryDtos = new ArrayList<>();
        for(String fname : allServices){
            if(allJsons.contains(fname)){
                serviceSummaryDtos.add(new ServiceSummaryDto(fname, categoryMappingLoaderService.getValue(fname),true));
            } else {
                serviceSummaryDtos.add(new ServiceSummaryDto(fname, categoryMappingLoaderService.getValue(fname), false));
            }
        }
        return serviceSummaryDtos;
    }
}
