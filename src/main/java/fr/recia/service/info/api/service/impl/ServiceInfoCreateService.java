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

import com.fasterxml.jackson.core.JsonProcessingException;

import java.util.List;

public interface ServiceInfoCreateService {
    String createJsonString(final String fname, final String video_link, final String category, final List<String> population,
                            final List<String> contexte, final List<String> name, final List<String> href, String resource_link,
                            final String responsable, final String description) throws JsonProcessingException;
    boolean saveJsonFile(final String fname, final String json);
}
