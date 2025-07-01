package fr.recia.service.info.api.service;

import fr.recia.service.info.api.config.bean.AppConfProperties;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Service
@Slf4j
public class CategoryMappingLoaderService {

    private Map<String, String> data;

    @Autowired
    private AppConfProperties appConfProperties;

    @PostConstruct
    public void init() {

        String cheminFichier = appConfProperties.getCategoriesMappingFile();
        data = new HashMap<>();

        try (BufferedReader br = new BufferedReader(new FileReader(cheminFichier))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] parts = line.split(",", 2);
                if (parts.length == 2) {
                    data.put(parts[0].trim(), parts[1].trim());
                }
            }
            log.info("CSV service<->catégorie chargé avec : " + data.size() + " entrées");
        } catch (IOException e) {
            log.error("Une erreur s'est produite pendant le chargement du mapping service<->catégorie", e);
        }
    }

    public String getValue(String key) {
        return data.get(key);
    }

}
