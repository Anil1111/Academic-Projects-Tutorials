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
       "kind": "source.generate" //or "source.generate.accessors" to narrow it down
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

5. `application.properties`

- contains all the external settings/configuration for the application on different environments
- is the main configuration file in Spring Boot.

---

## Using Spring Security

#### To Login into the default login page:

The default username is: user and the default password will be printed in the console at the time when your Spring Boot project is starting.

## Spring dependencies in POM.xml

### JPA

```xml
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
```

### Web

Used for building Web and RESTful applications

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

In memory database which can be observed by trying `http://localhost:<<portNo>>/h2-console`  
Use either the `JDBC URL` as the explicit one if defined in application.properties(`spring.datasource.url=jdbc:h2:mem:testdb`) or append the one from the console  
Better than traditional databases as prior configuration is required whereas H2 is created during runtime and removed from memory on application end.  
Only drawback is that the data does not persist between restarts.

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

### Spring Security
- Implementing security in web applications and Restful services
- Authentication and Authorization using spring

```xml
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-security</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.security</groupId>
			<artifactId>spring-security-test</artifactId>
			<scope>test</scope>
		</dependency>
```

### JDBC

### HATEOS

### JPA

Spring data JPA with Hibernate

```xml
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
	   </dependency>
```

### Cache

Enable spring frameworks caching support

### Data-Rest

Expose simple REST services using Spring Data REST

### Actuator

Monitoring and tracing to the application

```xml
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-actuator</artifactId>
      </dependency>

      <!-- It is dependent on the hal-browser-->
 		<dependency>
			<groupId>org.springframework.data</groupId>
			<artifactId>spring-data-rest-hal-browser</artifactId>
      </dependency>
```

> To view the actuator logs: `http://localhost:8080/actuator`. Will open it in the HAL Browser

_Additional properties to be set in application.properties_ `management.endpoints.web.exposure.include=*`
This activates various kinds of actuator and will cause a performance degradation

---

## Sample application.properties

### Generic

- `server.port=8085` for setting the port of the application deployed on custom port
- `logging.level.org.springframework = debug` for setting the execution of the application of type debug; checking the output of the spring boot auto configuration

### H2 Database

- `spring.datasource.url=jdbc:h2:mem:testdb` to make the url of the H2 inmemory database as a constant otherwise needs to be copied from debug console everytime
- for setting the default values to the spring security
  ```properties
  spring.security.user.name=<<userName>>
  spring.security.user.password=<<userPassword>>
  spring.security.user.roles=<<userRole>>
  ```
- `spring.h2.console.enabled=true` show the h2 console
- `spring.jpa.show-sql=true` for outputting the generated queries

## Spring Decorators

### Spring Boot Application

- `@SpringBootApplication`
  - Indicates that it is a spring context file
  - It enables auto configuration
  - Enables component scan (checks all the classes in the package for any beans)
- `@Component` this class is found during classpath scanning and registered in the context as a Spring bean
  - `import org.springframework.stereotype.Component;`
- `@Autowired`
  - `import org.springframework.beans.factory.annotation.Autowired;`
- `@Service` defining a service

### Spring REST

- `@RestController`
  - To define a controller that can handle get request
  - `import org.springframework.web.bind.annotation.RestController;`
- `@RequestMapping` To define the request mapping for any HTTP method
  - `import org.springframework.web.bind.annotation.RequestMapping;`
- `@RequestMapping(method = RequestMethod.GET, path = "/hello-world")` another form
  - `import org.springframework.web.bind.annotation.RequestMethod;`
- `@GetMapping / @PostMapping / @PutMapping / @DeleteMapping` To define a HTTP methods request mapping
  - `import org.springframework.web.bind.annotation.GetMapping;`
- `@PathVariable` defining the path variable that we get from the URI
- `@RequestBody` defining the request body that comprises of the object we pass
  - `import org.springframework.web.bind.annotation.RequestBody;`

  
### Spring JPA

-`@Entity` To define that a class is an Entity for JPA configuration - `import javax.persistence.Entity;`
- `@id` to declare the property as the primary key
  - `import javax.persistence.id;`
- `@GeneratedValue` generate the value for the primary key
  - `import javax.persistence.GeneratedValue;`
- `@Repository` indicates something that interacts with the DB
  - `import org.springframework.stereotype.Repository;`
- `@Transactional` declared on method/classes that define that each method consist of a transaction
  - `import javax.transaction.Transactional;`
- `@PersistenceContext` for ensuring EntityManager context persists
  - `import javax.persistence.PersistenceContext;`

### CORS

- `@CrossOrigin(origins="http://url:port/")`
  - `import org.springframework.web.bind.annotation.CrossOrigin;`
