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
package fr.recia.service.info.api.web.rest;

import fr.recia.service.info.api.config.bean.ApiEndpoints;
import fr.recia.service.info.api.config.bean.Fnames;
import fr.recia.service.info.api.config.bean.Responsables;
import fr.recia.service.info.api.config.bean.TargetContext;
import fr.recia.service.info.api.config.bean.TargetPopulation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@Slf4j
public class ServiceInfoCreate {

	@RequestMapping(value = ApiEndpoints.CREATE_SERVICE_INFO, method = RequestMethod.GET)
	public String createServiceInfo(Model model) {
		model.addAttribute("fnameOptions", Fnames.values());
		model.addAttribute("populations", TargetPopulation.getStringValues());
		model.addAttribute("contexts", TargetContext.getStringValues());
		model.addAttribute("responsables", Responsables.getStringValues());
		return "index";
	}

}
