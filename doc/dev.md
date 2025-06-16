## to add NOTICE
'mvn notice:check' Checks that a NOTICE file exists and that its content match what would be generated.
'mvn notice:generate' Generates a new NOTICE file, replacing any existing NOTICE file.

## to add licence headers
'mvn license:check' verify if some files miss license header
'mvn license:format' add the license header when missing. If a header is existing, it is updated to the new one.
'mvn license:remove' remove existing license header


## in production mainly set in system properties the property for log directory else it will log in $catalina_base
-Dlogback.logfileDirectory=/PATH/

## Compile and Deploy
'./mvnw clean package deploy -Dspring.profiles.active=local -Dspring.config.import="$PATH/application-local.yml"'

## Running with spring-boot locally
'./mvnw clean compile spring-boot:run -Dspring-boot.run.profiles=local -Dspring.config.import="$PATH/application-local.yml"'