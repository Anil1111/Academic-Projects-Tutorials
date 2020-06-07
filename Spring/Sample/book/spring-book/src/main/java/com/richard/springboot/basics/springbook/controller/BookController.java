package com.richard.springboot.basics.springbook.controller;

import java.util.Arrays;
import java.util.List;

import com.richard.springboot.basics.springbook.entity.Book;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookController {

  @GetMapping(path = "/books")
  public List<Book> getAllBooks() {
    return Arrays.asList(new Book("Mastering Spring", "Richard"));
  }
}
