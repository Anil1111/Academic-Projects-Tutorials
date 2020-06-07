# Spring Boot


## Features
- To build production ready applications quicly
- Provides great support to embedded servers(Tomcat, jetty) but it itself is neither an application server nor a web server
- used to build restful API using JAVA as the language. Can be also used to build microservices.
- Enables building quick starter project with Auto Configuration like Web and JPA
- Has embedded servers in Tomcat or Jetty
- Provides production ready features like 
    - `Metrics and Health Check` can create metrics to find the number of times a service has been called or failed
    - `externalized configuration` configuration for Production and Development can be configured using `application.properties` 
- Feature of Spring Framework
    - **Dependency Injection** or **Inversion of Control(IOC)** Spring takes control of all the beans and its dependencies
    - Reduces the amount of boilerplate code required for Spring JDBC, MVC etc
    - Good integration with frameworks like JUnit, Mockito and Hibernate
- Feature of Spring MVC
    - Used for developing web applications  or Rest services
    - Using Separation of Concern (SOC), it uses DispatcherServlet, ModelAndView, ViewResolver

### Object relational impedence mismatch
The inherent problem that an OOPS programming language data needs to be stored in a incompatible relation database model.

#### Solution using JDBC, Spring JDBC and myBatis
They all used queries and translated results from queries to objects. This involved two steps:
- Setting parameters to the query
- The results of the query is mapped to the beans

`JDBC` used methods like ResultStatement, PreparedStatement to set parameters and execute queries which involved writing long lines of code. `Spring JDBC` utilises a layer on top of JDBC known as the JDBC Template which simplifies mapping parameters and managing resultsets to beans. `myBatis` provides a simple XML or annotation based configuration to map Java POJO's yo java objects. But for complex queries, maintaing such queries became a challenge.

#### Solution using JPA
- JPA povides mappings between the classes and tables using `entities` and `Relationships`. The Entity Manager can manage this mapping.
We can use `Criteria API` or `JPQL` to create queries and coniditions.
- JPA defines the specifications which outline how we define and manage entities, map attributes, relationships
- `Hibernate` is one of the popular implementation of Hibernate

---

## Working of Spring

### Spring Boot Auto Configuration
- `SpringApplicaiton.run` is used to run a spring context which is typically the main java class
```java
@SpringBootApplication
public class SpringBookApplication {

	public static void main(String[] args) {
        // SpringApplication.run returns a context
		ApplicationContext applicationContext = SpringApplication.run(SpringBookApplication.class, args);
		for (String name : applicationContext.getBeanDefinitionNames()) {
			System.out.println("#####---------##########" + name ); // prints the names of all the beans
		}
	}
}
```

- It then finds `Spring web MVC` in its classpath, and goes on to configure the Dispatcher servlet
- `logging.level.org.springframework = debug` can be used to see the logs of it
- All spring starter projects have dependencies mentioned in their respective pom.xml. Eg: `spring-boot-starter-web` which is the main dependency 


### Dispatcher Servlets
It handles all the requests received by the application and knows the different URI mappings present and the HTTP method mappings. It finds the right controller to execute the method and lastly handles the response that is sent.
It is also known as the `front controller` for Spring Web MVC Framework.

>The `@RestController` contains the `@ResponseBody` that helps in generating the response body that is sent as a response. It uses `Jackson` for message converting into JSON.  

Running the application with `logging.level.org.springframework = debug` allows for observing additional debug logging   
> The Auto Configuration Report / Conitions Evaliation Report provides the logging report



### How Spring applications Start working ?
1. Spring Boot uses the `Spring Boot Autoconfiguration` that loads all the JARs in the classpath, it tries to autoconfigure everything (including dispatcher servlet)
1. The main `SpringBootApplication` has a dependency on the `Spring WEB MVC`, which has a dependency on the Dispatcher servlet
2. `DispatcherServletAutoConfiguration matched:` The Dispatcher servlet finds that the class `org.springframework.web.servlet.DispatcherServlet` is configured
3. `ErrorMvcAutoConfiguration matched:` configures the error page. The error when provided incorrect URL is provided by `ErrorMvcAutoConfiguration.WhitelabelErrorViewConfiguration matched:`
4. `HttpMessageConvertersAutoConfiguration` are responsible for converting beens into JSON using Jackson  (`Jackson2ObjectMapper`)


