# Spring

## Settings Required

### Environment Variables
1. JAVA should be installed
    - set `JAVA_HOME` to the version of java installed `C:\Program Files\Java\jdk-14`
    - set `path` to the java installed `C:\Program Files\Java\jdk-14\bin`
2. Maven Installed
    - set `path` to the maven directory `C:\Users\UserName\apache-maven-3.6.3-bin\apache-maven-3.6.3\bin`
    - In case you are behind a proxy, configure settings at `C:\Users\UserName\apache-maven-3.6.3-bin\apache-maven-3.6.3\conf\settings.xml`
3. All Java extensions installed mentioned [here]("./VSCode.md")
5. VSCode User settings in settings.json
    ```json
        "java.configuration.maven.userSettings": "C:\\Users\\UserName\\apache-maven-3.6.3-bin\\apache-maven-3.6.3\\conf",
        "java.home": "C:\\Program Files\\Java\\jdk-14"
    ```
## Using [spring initializr](https://start.spring.io/)

### Options to generate a new spring boot project

#### Project
Maven Project
#### Language
Java
#### Spring Boot
v2.3.0
#### Project Metadata
Group can be thought of as a package and Artifact as the class name

- `Group`  com.richard.rest.webservices 
- `Artifact` restful-web-services

#### Dependencies
- **Sping Boot DevTools** (Developer Tools)
- **Spring Web** (Web)
    - Starter for developing Web application and RESTful Web servies
- **H2 Database** (SQL)
- **Spring Data JPA** (SQL)


## Importing Spring Initializr ZIP into Eclipse

1. Open Eclipse
2. Click `File` --> `Import`
3. Select the `Maven` Tab --> `Existing Maven Project`
4. Select the unzipped root directory of the file
    - ensure that the `pom.xml` is visible
5. Select `finish`
    - maven will configure all the depencies