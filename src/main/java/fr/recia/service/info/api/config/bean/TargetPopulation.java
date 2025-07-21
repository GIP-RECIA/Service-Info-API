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

public enum TargetPopulation {

    eleves("Elèves"),
    parents("Parents"),
    enseignants("Enseignants"),
    doc("Documentalistes"),
    coll("Personnels de collectivité"),
    direction("Personnels de direction"),
    autres("Autres personnels");

    public final String population;

    TargetPopulation(String population) {
        this.population = population;
    }

    public static List<String> getStringValues(){
        List<String> populationValues = new ArrayList<>();
        for(TargetPopulation p : TargetPopulation.values()){
            populationValues.add(p.population);
        }
        return populationValues;
    }

}
