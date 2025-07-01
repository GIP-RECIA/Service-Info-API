package fr.recia.service.info.api.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import fr.recia.service.info.api.config.bean.AppConfProperties;
import fr.recia.service.info.api.dto.ServiceInfoDto;
import fr.recia.service.info.api.dto.TutorialDto;
import fr.recia.service.info.api.service.impl.ServiceInfoCreateService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class ServiceInfoCreateServiceImpl implements ServiceInfoCreateService {

    @Autowired
    private AppConfProperties appConfProperties;

    @Override
    public String createJsonString(String fname, String video_link, String category, List<String> population, List<String> contexte, List<String> name,
                                   List<String> href, String resource_link, String responsable, String description) throws JsonProcessingException {
        List<TutorialDto> tutorialDtos = new ArrayList<>();
        if(name != null){
            for(int i=0; i< name.size(); i++){
                tutorialDtos.add(new TutorialDto(name.get(i), href.get(i)));
            }
        }

        ServiceInfoDto dto = new ServiceInfoDto();
        dto.setVideo_link(video_link);
        dto.setCategorie_principale(category);
        dto.setDescription(description);
        dto.setContextes_cible(contexte);
        dto.setPopulations_cible(population);
        dto.setTutorials(tutorialDtos);
        dto.setResource_link(resource_link);
        dto.setResponsable(responsable);

        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(dto);

    }

    @Override
    public boolean saveJsonFile(final String fname, final String json, final boolean isDraft) {
        String folder;
        if(isDraft){
            folder = appConfProperties.getDraftJsonFolder();
        } else {
            folder = appConfProperties.getJsonFolder();
        }
        try (FileWriter file = new FileWriter(folder+"/"+fname+".json")) {
            file.write(json);
            return true;
        } catch (IOException e) {
            log.error(e.getMessage());
            return false;
        }
    }
}
