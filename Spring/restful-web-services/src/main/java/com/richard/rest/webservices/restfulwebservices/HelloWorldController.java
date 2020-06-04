package com.richard.rest.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController  //controller that can handle REST Request
public class HelloWorldController {

  // @RequestMapping(method = RequestMethod.GET, path = "/hello-world")
  @GetMapping(path = "/hello-world") //path correspods to the URI link
  public String helloWorld(){
    return "Hello World";
  }

  //returning a bean which converts automatically into json
  @GetMapping(path = "/hello-world-bean") //path correspods to the URI link
  public HelloWorldBean helloWorldBean(){
    return new HelloWorldBean("Hello World!"); // output is JSON- { message: "Hello World!" }
  }

}