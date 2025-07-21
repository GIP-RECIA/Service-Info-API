package fr.recia.service.info.api.config;

import fr.recia.service.info.api.config.bean.AppConfProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfiguration implements WebMvcConfigurer {

    @Autowired
    private AppConfProperties appConfProperties;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Toutes les routes
                .allowedOrigins(appConfProperties.getAllowedOrigins())
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
