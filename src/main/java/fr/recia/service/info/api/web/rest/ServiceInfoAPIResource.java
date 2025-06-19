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

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import fr.recia.service.info.api.config.bean.ApiEndpoints;
import fr.recia.service.info.api.dto.ServiceInfoDto;
import fr.recia.service.info.api.dto.TutorialDto;
import fr.recia.service.info.api.service.impl.ServiceInfoAPIService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/api")
@Slf4j
public class ServiceInfoAPIResource {

	@Autowired
	private ServiceInfoAPIService serviceInfoAPIService;

	@RequestMapping(value = "/" + ApiEndpoints.READ_SERVICE_INFO + "/{fname}", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<ServiceInfoDto> getServiceInfo(@PathVariable String fname, HttpServletResponse response) {
		log.info("Requesting infos of {}", fname);
		try {
			return new ResponseEntity<>(serviceInfoAPIService.getServiceInfo(fname), HttpStatus.OK);
		} catch (FileNotFoundException ex) {
			log.error(String.format(ApiEndpoints.READ_SERVICE_INFO + " - Service '%s' non trouvé", fname));
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} catch (Exception e) {
			log.error(ApiEndpoints.READ_SERVICE_INFO + " - ", e);
		}
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@RequestMapping(value = ApiEndpoints.GENERATE_JSON_FILE, method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE})
	@ResponseBody
	public ResponseEntity<String> generateJsonFileFromForm(
			@RequestParam String fname,
			@RequestParam String link,
			@RequestParam String category,
			@RequestParam(required = false) List<String> population,
			@RequestParam(required = false) List<String> contexte,
			@RequestParam(required = false) List<String> name,
			@RequestParam(required = false) List<String> href,
			@RequestParam(required = false) boolean gereParEtablissement,
			@RequestParam String description) {

		// Exemple de log ou traitement
		System.out.println("Fname: " + fname);
		System.out.println("Link: " + link);
		System.out.println("Category: " + category);
		System.out.println("Population: " + population);
		System.out.println("Contexte: " + contexte);
		System.out.println("Description: " + description);
		System.out.println("Titre: " + name);
		System.out.println("Url: " + href);
		System.out.println("gereParEtablissement: " + gereParEtablissement);

		List<TutorialDto> tutorialDtos = new ArrayList<>();
		if(name != null){
			for(int i=0; i< name.size(); i++){
				tutorialDtos.add(new TutorialDto(name.get(i), href.get(i)));
			}
		}

		ServiceInfoDto dto = new ServiceInfoDto();
		dto.setVideo_link(link);
		dto.setCategorie_principale(category);
		dto.setDescription(description);
		dto.setContextes_cible(contexte);
		dto.setPopulations_cible(population);
		dto.setTutorials(tutorialDtos);
		dto.setGere_par_etablissement(gereParEtablissement);

		ObjectMapper objectMapper = new ObjectMapper();
		try {
			String json = objectMapper.writeValueAsString(dto);
			return ResponseEntity.ok(json);
		} catch (JsonProcessingException e) {
			throw new RuntimeException(e);
		}
	}

}
