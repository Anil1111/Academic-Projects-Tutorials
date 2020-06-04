# Spring Boot
- To build production ready applications quicly
- Provides great support to embedded servers(Tomcat, jetty) but it itself is neither an application server nor a web server
- used to build restful API using JAVA as the language. Can be also used to build microservices.

## Features
- Enables building quick starter project with Auto Configuration like Web and JPA
- Has embedded servers in Tomcat or Jetty
- Provides production ready features like 
    - `Metrics and Health Check` can create metrics to find the number of times a service has been called or failed
    - `externalized configuration` configuration for Production and Development can be configured using `application.properties` 



## Dispatcher Servlets
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




## Spring Decorators
1. `@RestController`
    - To define a controller that can handle get request
    - `import org.springframework.web.bind.annotation.RestController;`

2. `@RequestMapping`
    -  To define the request mapping for any HTTP method
    -   `@RequestMapping(method = RequestMethod.GET, path = "/hello-world")`
    - `import org.springframework.web.bind.annotation.RequestMapping;`
- `import org.springframework.web.bind.annotation.RequestMethod;`

3. `@GetMapping`
    - To define a GET method request mapping
    - `import org.springframework.web.bind.annotation.GetMapping;`

