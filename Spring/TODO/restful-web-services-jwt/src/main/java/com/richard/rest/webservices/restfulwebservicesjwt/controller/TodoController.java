package com.richard.rest.webservices.restfulwebservicesjwt.controller;

import java.net.URI;
import java.util.List;

import com.richard.rest.webservices.restfulwebservicesjwt.entity.Todo;
import com.richard.rest.webservices.restfulwebservicesjwt.service.TodoHardcodedService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoController {

  @Autowired
  private TodoHardcodedService todoHardcodedService;

  // Get the list of Todos
  @GetMapping(path = "/users/{username}/todos")
  public List<Todo> getAllTodos(@PathVariable String username) {
    return todoHardcodedService.findAll();
  }

  // Get Todo By Id
  @GetMapping(path = "/users/{username}/todos/{id}")
  public Todo getTodo(@PathVariable String username, @PathVariable long id) {
    Todo todo = todoHardcodedService.findById(id);
    if (todo != null) {
      return todo;
    }
    return null;
  }

  @DeleteMapping(path = "/users/{username}/todos/{id}")
  public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
    // ResponseEntity helps us to return a status code
    Todo todo = todoHardcodedService.deleteById(id);
    if (todo != null) { // if todo is deleted then returning 204 No Content
      return ResponseEntity.noContent().build();
    }
    return ResponseEntity.notFound().build(); // if todo is not deleted then returning 404 Not found
  }

  // the default constructor of Todo() class needs to be present otherwise the request body wont be able to create the todo
  @PutMapping(path = "/users/{username}/todos/{id}")
  public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo) {
    Todo updatedTodo = todoHardcodedService.save(todo);
    return new ResponseEntity<Todo>(updatedTodo, HttpStatus.OK); // returns the updatedTodo with 200 OK
    // return new ResponseEntity<>(updatedTodo, HttpStatus.OK);
  }

  @PostMapping(path = "/users/{username}/todos")
  public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo todo) {
    Todo createdTodo = todoHardcodedService.save(todo);

    // build a new URI pointing to the created todo
    URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();

    return ResponseEntity.created(uri).build(); // returns the URI with 201 status code
  }
}