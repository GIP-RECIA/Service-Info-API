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

import java.util.ArrayList;
import java.util.List;

public enum TargetContext {

    lycees_educ_nat("Lycées éducation nationale"),
    lycees_educ_agri("Lycées éducation agricole"),
    colleges("Collèges"),
    cfa("CFA"),
    ef2s("Formation sanitaire et sociale"),
    collectivites("Collectivités");

    public final String context;

    TargetContext(String context) {
        this.context = context;
    }

    public static List<String> getStringValues(){
        List<String> contextValues = new ArrayList<>();
        for(TargetContext t : TargetContext.values()){
            contextValues.add(t.context);
        }
        return contextValues;
    }
}
