# Service-Info-API

**Description** : API REST restituant des informations sur les différents services ENT (description, tutoriels)

**Versions** :
- Java : 11
- Spring boot : 2.7.18
- Spring security : 5.7.11

**Démarrer en local** : `mvn clean package spring-boot:run`

## Liste des routes disponibles

**Récupération de la fiche info d'un service :**
- Méthode : GET
- Path : `/api/serviceInfo/{fname}`
- Protégée : non


**Récupération de la fiche info d'un service (en version brouillon) :**
- Méthode : GET
- Path : `/api/serviceInfoDraft/{fname}`
- Protégée : non

**Récupération du résumé de tous les services :**
- Méthode : GET
- Path : `/api/allServices`
- Protégée : non

**Création d'un nouveau fichier JSON (sans sauvegarde) :**
- Méthode : POST
- Path : `/api/generateFile`
- Paramètres : tous les attributs d'une fiche info
- Protégée : oui

**Sauvegarde d'un fichier JSON :**
- Méthode : POST
- Path : `/api/saveFile`
- Paramètre : objet de type `JsonFileRequestDto`
- Protégée : oui

**Affichage de l'UI de création :**
- Méthode : GET
- Path : `/api/create`
- Protégée : oui

## Paramètres disponibles

Les paramètres sont tous à déclarer sous le chemin `app.conf` :

| Propriété | Description |
|-----------|-------------|
| jsonFolder | Chemin vers le dossier des fiches info en production |
| draftJsonFolder | Chemin vers le dossier des fiches info en brouillon |
| categoriesMappingFile | Chemin vers le fichier des catégories associées aux services |
| casServiceId | ServiceID du client CAS |
| casServerUrl | URL du serveur CAS |
| casProviderKey | Identifiant unique du provider (interne à spring security) |
| casTicketCallback | Endpoint où recevoir le retour du CAS |
| allowedOrigins | Origines autorisées (CORS) |
| excludedServices | Services à exclure de la liste de tous les services |