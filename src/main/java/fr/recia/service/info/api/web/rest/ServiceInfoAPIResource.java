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
import fr.recia.service.info.api.config.bean.ApiEndpoints;
import fr.recia.service.info.api.dto.JsonFileRequestDto;
import fr.recia.service.info.api.dto.ServiceInfoDto;
import fr.recia.service.info.api.dto.ServiceSummaryDto;
import fr.recia.service.info.api.service.ServiceInfoAPIService;
import fr.recia.service.info.api.service.ServiceInfoCreateService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.FileNotFoundException;
import java.util.List;

@RestController
@RequestMapping(value = "/api")
@Slf4j
public class ServiceInfoAPIResource {

	@Autowired
	private ServiceInfoAPIService serviceInfoAPIService;

	@Autowired
	private ServiceInfoCreateService serviceInfoCreateService;

	@RequestMapping(value = "/" + ApiEndpoints.READ_SERVICE_INFO + "/{fname}", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<ServiceInfoDto> getServiceInfo(@PathVariable String fname, HttpServletResponse response) {
		log.trace("Requesting infos of {}", fname);
		try {
			return new ResponseEntity<>(serviceInfoAPIService.getServiceInfo(fname), HttpStatus.OK);
		} catch (FileNotFoundException ex) {
			log.error("{} - Service {} non trouvé",ApiEndpoints.READ_SERVICE_INFO, fname);
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} catch (Exception e) {
			log.error("An error ocurred on {}", ApiEndpoints.READ_SERVICE_INFO, e);
		}
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@RequestMapping(value = "/" + ApiEndpoints.GET_ALL_SERVICES, method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<List<ServiceSummaryDto>> getAllservices(HttpServletResponse response) {
		log.trace("Requesting infos of all services");
		try {
			return new ResponseEntity<>(serviceInfoAPIService.getAllServices(), HttpStatus.OK);
		} catch (Exception e) {
			log.error("An error ocurred on {}", ApiEndpoints.GET_ALL_SERVICES, e);
		}
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@RequestMapping(value = "/" + ApiEndpoints.READ_SERVICE_INFO_DRAFT + "/{fname}", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<ServiceInfoDto> getServiceInfoDraft(@PathVariable String fname, HttpServletResponse response) {
		try {
			return new ResponseEntity<>(serviceInfoAPIService.getDraftServiceInfo(fname), HttpStatus.OK);
		} catch (FileNotFoundException ex) {
			log.error("{} - Service {} non trouvé",ApiEndpoints.READ_SERVICE_INFO, fname);
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} catch (Exception e) {
			log.error("An error ocurred on {}", ApiEndpoints.READ_SERVICE_INFO, e);
		}
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@RequestMapping(value = ApiEndpoints.GENERATE_JSON_FILE, method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE})
	@ResponseBody
	public ResponseEntity<String> generateJsonFileFromForm(
			@RequestParam String fname,
			@RequestParam String video_link,
			@RequestParam String category,
			@RequestParam(required = false) List<String> population,
			@RequestParam(required = false) List<String> contexte,
			@RequestParam(required = false) List<String> name,
			@RequestParam(required = false) List<String> href,
			@RequestParam(required = false) String resource_link,
			@RequestParam(required = false) String responsable,
			@RequestParam String description) {
		try {
			return ResponseEntity.ok(serviceInfoCreateService.createJsonString(fname, video_link, category, population,
					contexte, name, href, resource_link, responsable, description));
		} catch (JsonProcessingException e) {
			throw new RuntimeException(e);
		}

	}

	@RequestMapping(value = ApiEndpoints.SAVE_JSON_FILE, method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<String> saveJsonFile(@RequestBody JsonFileRequestDto jsonFileRequestDto) {
		boolean success = serviceInfoCreateService.saveJsonFile(jsonFileRequestDto.getFname(), jsonFileRequestDto.getJson(), jsonFileRequestDto.isDraft());
		if(success){
			return ResponseEntity.ok("");
		}
		return ResponseEntity.internalServerError().build();
	}

}
