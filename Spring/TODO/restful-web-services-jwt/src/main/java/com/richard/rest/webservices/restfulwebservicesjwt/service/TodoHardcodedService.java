package com.richard.rest.webservices.restfulwebservicesjwt.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.richard.rest.webservices.restfulwebservicesjwt.entity.Todo;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService{

  private static List<Todo> todos = new ArrayList<>();
  private static int idCounter = 0;

  static {
    todos.add(new Todo(++idCounter, "learn to dance", true, new Date(), "richard"));
    todos.add(new Todo(++idCounter, "learn to code", true, new Date(), "richard"));
    todos.add(new Todo(++idCounter, "learn to music", true, new Date(), "richard"));
  }

  public List<Todo> findAll(){
    return todos;
  }

  public Todo deleteById(long id){ // Delete implementation
    Todo todo = findById(id);
    if (todo == null) return null;

    if(todos.remove(todo)){ // requires the .equals() method to be implemented in the Todo class
       return todo; 
    }
    return null;
  }

  public Todo findById(long id) {
    for(Todo todo: todos){
        if (todo.getId() == id){
          return todo;
        }
    }
    return null;
  }

  public Todo save(Todo todo){
    // todo.getId() will be equal to 0 if "id" not given
    if(todo.getId() == -1 || todo.getId() == 0) {  // adding a new Todo
      todo.setId(++idCounter);
      todos.add(todo);
    } else {                  // Updating an existing Todo
      deleteById(todo.getId());
      todos.add(todo);
    }
    return todo;
  }




}