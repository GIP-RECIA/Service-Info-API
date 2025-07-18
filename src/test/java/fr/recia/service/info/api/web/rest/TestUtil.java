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

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.MediaType;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

/**
 * Utility class for testing REST controllers.
 */
public class TestUtil {

	/** MediaType for JSON UTF8 */
	public static final MediaType APPLICATION_JSON_UTF8 = new MediaType(
			MediaType.APPLICATION_JSON.getType(),
			MediaType.APPLICATION_JSON.getSubtype(), StandardCharsets.UTF_8);

	/** MediaType for XML UTF8 */
	public static final MediaType APPLICATION_XML_UTF8 = new MediaType(
			MediaType.APPLICATION_XML.getType(),
			MediaType.APPLICATION_XML.getSubtype(), StandardCharsets.UTF_8);

	/**
	 * Convert an object to JSON byte array.
	 *
	 * @param object
	 *            the object to convert
	 * @return the JSON byte array
	 * @throws IOException
	 */
	public static byte[] convertObjectToJsonBytes(Object object)
			throws IOException {
		ObjectMapper mapper = new ObjectMapper();
		mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
		return mapper.writeValueAsBytes(object);
	}

	/**
	 * Convert JSON byte array to an Object.
	 *
	 * @param jsonBytes
     *          the JSON byte array
	 * @return object the object converted
	 * @throws IOException
	 */
	public static Object convertJsonBytesToObject(byte[] jsonBytes,
			Class<Object> objectType) throws IOException {
		ObjectMapper mapper = new ObjectMapper();
		mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
		return mapper.readValue(jsonBytes, objectType);
	}
}
