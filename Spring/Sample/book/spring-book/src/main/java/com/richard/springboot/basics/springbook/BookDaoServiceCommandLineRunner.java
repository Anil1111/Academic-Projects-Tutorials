package com.richard.springboot.basics.springbook;

import com.richard.springboot.basics.springbook.entity.Book;
import com.richard.springboot.basics.springbook.service.BookDAOService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class BookDaoServiceCommandLineRunner implements CommandLineRunner{ 
  // Class to call the BookDAOService.java
  // CommandLineRunner gets activated when the spring context launches / applicatiion gets started

  @Autowired
  private BookDAOService bookDAOService;

  private static final Logger log = LoggerFactory.getLogger(BookDaoServiceCommandLineRunner.class);

  @Override
  public void run(String... args) throws Exception {
    Book book = new Book("New beginning", "MG Gandhi");    
    bookDAOService.insert(book);
    log.info("New user: " + book);
    // r.s.b.s.BookDaoServiceCommandLineRunner : New user: Book [author=MG Gandhi, id=1, name=New beginning]
  }
}
