package com.richard.springboot.basics.springbook;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookController {

  @GetMapping(path = "/books")
  public List<Book> getAllBooks() {
    return Arrays.asList(new Book(2l, "Mastering Spring", "Richard"));
  }
}
