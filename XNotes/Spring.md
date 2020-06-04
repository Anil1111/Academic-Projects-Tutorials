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
4. VSCode User settings in settings.json
   ```json
       "java.configuration.maven.userSettings": "C:\\Users\\UserName\\apache-maven-3.6.3-bin\\apache-maven-3.6.3\\conf",
       "java.home": "C:\\Program Files\\Java\\jdk-14",
        "java.configuration.runtimes": [
            {
                "name": "JavaSE-1.8",
                "path": "C:\\Program Files\\Java\\jdk1.8.0_251"
            },
            {
                "name": "JavaSE-13",
                "path": "C:\\Program Files\\Java\\jdk-13.0.1"
            },
            {
                "name": "JavaSE-14",
                "path": "C:\\Program Files\\Java\\jdk-14",
                "sources" : "C:\\Program Files\\Java\\jdk-14\\lib\\src.zip",
                "javadoc" : "https://docs.oracle.com/en/java/javase/14/docs/api",
                "default":  true
                }
        ],
        "java.saveActions.organizeImports": true,
        "java.referencesCodeLens.enabled": true,
        "java.implementationsCodeLens.enabled": true,
        "java.trace.server": "messages",
         "terminal.integrated.scrollback": 2000,
   ```
5. Add keybing to `keybindings.json` to support automatic generation of constructors, getters/setters, toString methods
   ```json
     {
      "key": "shift+alt+g", //g for generate
      "command": "editor.action.codeAction",
      "args": {
         "kind": "source.generate", //or "source.generate.accessors" to narrow it down 
      }
     }
   ```


## Using [spring initializr](https://start.spring.io/)

### Create Spring Initializer project from command pallette
Type >Spring Initializer: Create a maven project

### Options to generate a new spring boot project

#### Project

Maven Project

#### Language

Java

#### Spring Boot

v2.3.0

#### Project Metadata

Group can be thought of as a package and Artifact as the class name

- `Group` com.richard.rest.webservices
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

## Running a Spring Boot application
Navigate to the file that contains the main method and Run / Debug the application from there. The application will open with liveReload server at port 8080

## Maven Project Structure
1. `src/main/java`
- contains all the java source files

2. `src/main/resources`
- contains all the resources including the properties file for spring boot

3. `src/test/java`

4. `pom.xml`
- contains the dependencies mentioned for use in the project


---



## Spring dependencies in POM.xml

### JPA
```xml
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
```

### Web
```xml
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>
```

### DevTools
```xml
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
			<scope>runtime</scope>
			<optional>true</optional>
		</dependency>
```

### Test
```xml
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
			<exclusions>
				<exclusion>
					<groupId>org.junit.vintage</groupId>
					<artifactId>junit-vintage-engine</artifactId>
				</exclusion>
			</exclusions>
		</dependency>
```

### H2
```xml
		<dependency>
			<groupId>com.h2database</groupId>
			<artifactId>h2</artifactId>
			<scope>runtime</scope>
		</dependency>
```

### Lombok Annotations Support for VS Code
```xml
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.2</version>
        <dependency>
```

---


## Sample application.properties

- `server.port=8085` for setting the port of the application deployed on custom port
- `logging.level.org.springframework = debug` for setting the execution of the application of type debug



