package fr.recia.service.info.api.repository;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class PortalRepository {

    private final JdbcTemplate jdbc;

    public PortalRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public List<String> getPorletsFNames() {
        return jdbc.queryForList("SELECT PORTLET_FNAME FROM up_portlet_def", String.class);
    }

}
