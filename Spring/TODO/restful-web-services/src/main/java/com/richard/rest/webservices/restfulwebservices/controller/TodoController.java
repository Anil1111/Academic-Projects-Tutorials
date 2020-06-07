package com.richard.rest.webservices.restfulwebservices.controller;

import java.util.List;

import com.richard.rest.webservices.restfulwebservices.entity.Todo;
import com.richard.rest.webservices.restfulwebservices.service.TodoHardcodedService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoController {

  @Autowired
  private TodoHardcodedService todoHardcodedService;

  @GetMapping(path = "/users/{username}/todos")
  public List<Todo> getAllTodos(@PathVariable String username) {
    return todoHardcodedService.findAll();
  }

  @DeleteMapping(path = "/users/{username}/todos/{id}")
  public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
    // ResponseEntity helps us to return a status code
    Todo todo = todoHardcodedService.deleteById(id);
    if (todo != null){ // if todo is deleted then returning 204 No Content
      return ResponseEntity.noContent() .build();
    }
    return ResponseEntity.notFound().build(); // if todo is not deleted then returning 404 Not found
  }
}