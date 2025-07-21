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
package fr.recia.service.info.api.repository;

import fr.recia.service.info.api.config.bean.AppConfProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PortalRepository {

    @Autowired
    private AppConfProperties appConfProperties;

    private final JdbcTemplate jdbc;

    public PortalRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public List<String> getPorletsFNames() {
        List<String> fnames = jdbc.queryForList("SELECT PORTLET_FNAME FROM up_portlet_def", String.class);
        fnames.removeAll(appConfProperties.getExcludedServices());
        return fnames;
    }

}
