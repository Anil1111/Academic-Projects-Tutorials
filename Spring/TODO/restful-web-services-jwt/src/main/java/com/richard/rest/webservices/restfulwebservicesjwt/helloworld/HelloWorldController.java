package com.richard.rest.webservices.restfulwebservicesjwt.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController // controller that can handle REST Request
public class HelloWorldController {

  // @RequestMapping(method = RequestMethod.GET, path = "/hello-world")
  @GetMapping(path = "/hello-world") // path correspods to the URI link
  public String helloWorld() {
    return "Hello World";
  }

  // returning a bean which converts automatically into json
  @GetMapping(path = "/hello-world-bean") // path correspods to the URI link
  public HelloWorldBean helloWorldBean() {
    return new HelloWorldBean("Hello World!"); // output is JSON- message: "Hello World!"
    // throw new RuntimeException("Some error has occured");
  }

  // using a path variable `{ var}`
  @GetMapping(path = "/hello-world-path-variable/{name}")
  public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
    // %s is a placeholder for name path variable
    return new HelloWorldBean(String.format("Hello World, %s", name));
  }

}