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
package fr.recia.service.info.api.config;

import fr.recia.service.info.api.config.bean.ApiEndpoints;
import fr.recia.service.info.api.config.bean.AppConfProperties;
import fr.recia.service.info.api.web.rest.HealthCheck;
import lombok.extern.slf4j.Slf4j;
import org.jasig.cas.client.session.SingleSignOutFilter;
import org.jasig.cas.client.validation.Assertion;
import org.jasig.cas.client.validation.Cas30ServiceTicketValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.cas.ServiceProperties;
import org.springframework.security.cas.authentication.CasAssertionAuthenticationToken;
import org.springframework.security.cas.authentication.CasAuthenticationProvider;
import org.springframework.security.cas.web.CasAuthenticationEntryPoint;
import org.springframework.security.cas.web.CasAuthenticationFilter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.AuthenticationUserDetailsService;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.SecurityFilterChain;

import java.util.List;
import java.util.Map;

@Configuration
@EnableWebSecurity
@Slf4j
public class SecurityConfiguration {

	@Autowired
	private AppConfProperties appConfProperties;

	/**
	 * Propriétés du service CAS, avec notamment serviceID associé côté CAS
	 */
	@Bean
	public ServiceProperties serviceProperties() {
		ServiceProperties serviceProperties = new ServiceProperties();
		serviceProperties.setService(appConfProperties.getCasServiceId());
		serviceProperties.setSendRenew(false);
		return serviceProperties;
	}

	/**
	 * Redirection vers le CAS sur une route protégée
	 */
	@Bean
	public CasAuthenticationEntryPoint casAuthenticationEntryPoint(ServiceProperties serviceProperties) {
		CasAuthenticationEntryPoint entryPoint = new CasAuthenticationEntryPoint();
		entryPoint.setLoginUrl(appConfProperties.getCasServerUrl()+"/login");
		entryPoint.setServiceProperties(serviceProperties);
		return entryPoint;
	}

	/**
	 * Filtre qui intercepte la requête vers le service depuis le CAS (en passant par le navigateur) avec le ticket dans l'URL
	 */
	@Bean
	public CasAuthenticationFilter casAuthenticationFilter(AuthenticationManager authenticationManager) {
		CasAuthenticationFilter filter = new CasAuthenticationFilter();
		filter.setAuthenticationManager(authenticationManager);
		filter.setFilterProcessesUrl(appConfProperties.getCasTicketCallback());
		return filter;
	}

	/**
	 * Fournisseur d'authentitication qui va faire la requête au CAS pour valider le ticket reçu
	 */
	@Bean
	public CasAuthenticationProvider casAuthenticationProvider(ServiceProperties serviceProperties) {
		CasAuthenticationProvider provider = new CasAuthenticationProvider();
		provider.setServiceProperties(serviceProperties);
		provider.setTicketValidator(new Cas30ServiceTicketValidator(appConfProperties.getCasServerUrl()));
		provider.setAuthenticationUserDetailsService(customUserDetailsService());
		provider.setKey(appConfProperties.getCasProviderKey());
		return provider;
	}

	/**
	 * Transformer l’utilisateur CAS en utilisateur Spring Security pour remplir les User Details
	 */
	@Bean
	public AuthenticationUserDetailsService<CasAssertionAuthenticationToken> customUserDetailsService() {
		return (CasAssertionAuthenticationToken token) -> {
			Assertion assertion = token.getAssertion();
			Map<String, Object> attributes = assertion.getPrincipal().getAttributes();
			String username = assertion.getPrincipal().getName();
		return new User(username, "", List.of(new SimpleGrantedAuthority("ROLE_USER")));
		};
	}

	/**
	 * Transfert la demande d'auth depuis le filter vers le provider
	 */
	@Bean
	public AuthenticationManager authenticationManager(CasAuthenticationProvider casAuthenticationProvider) {
		return new ProviderManager(casAuthenticationProvider);
	}

	/**
	 * Gérer les requêtes de SLO qui arrivent du CAS pour détruire la session applicative
	 */
	@Bean
	public SingleSignOutFilter singleSignOutFilter() {
		return new SingleSignOutFilter();
	}

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.csrf(csrf -> csrf.disable())
				// Filtre pour le logout à mettre avant tout
				.addFilterBefore(singleSignOutFilter(), CasAuthenticationFilter.class)
				// La partie exceptionHandling permet de rediriger sur le CAS si on a un 403
				.exceptionHandling(e -> e.authenticationEntryPoint(casAuthenticationEntryPoint(serviceProperties())))
				.authorizeHttpRequests(
					authorizeHttpRequests -> authorizeHttpRequests
					.antMatchers(HealthCheck.HEALTH_CHECK).permitAll()
					.antMatchers("/api/"+ApiEndpoints.READ_SERVICE_INFO+"/*").permitAll()
					.antMatchers("/*.js").permitAll()
					.antMatchers("/*.css").permitAll()
					// Les endpoint en authenticated sont protégés par le CAS
					.antMatchers("/"+ApiEndpoints.CREATE_SERVICE_INFO).authenticated()
					.antMatchers("/api/"+ApiEndpoints.GENERATE_JSON_FILE).authenticated()
					.antMatchers("/api/"+ApiEndpoints.SAVE_JSON_FILE).authenticated()
					// Cet endpoint doit être accessible car c'est le callback du CAS vers l'appli spring pour faire valider le ticket
					.antMatchers(appConfProperties.getCasTicketCallback()).permitAll()
					.anyRequest().denyAll());
		return http.build();
	}
}
