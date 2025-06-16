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

import fr.recia.service.info.api.dao.IJsonFileDao;
import fr.recia.service.info.api.dto.ServiceInfoDto;
import fr.recia.service.info.api.service.impl.ServiceInfoAPIService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.io.FileNotFoundException;

@Service
@Slf4j
public class ServiceInfoAPIServiceImpl implements ServiceInfoAPIService {

    @Autowired
    private IJsonFileDao jsonFileDao;

    @Override
    @Cacheable("service-info")
    public ServiceInfoDto getServiceInfo(final String fname) throws FileNotFoundException {
        return jsonFileDao.findServiceInfoFromFname(fname);
    }

}


