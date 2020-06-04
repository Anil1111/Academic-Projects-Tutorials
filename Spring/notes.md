# Spring Boot
Spring Boot is used to build restful API using JAVA as the language. Can be also used to build microservices.


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