package com.richard.rest.webservices.restfulwebservices.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController // controller that can handle REST Request
public class BasicAuthenticationController {

  // returning a bean which converts automatically into json
  @GetMapping(path = "/basicauth") // path correspods to the URI link
  public AuthenticationBean authenticationBean() {
    return new AuthenticationBean("You are authenticated!");
  }

}