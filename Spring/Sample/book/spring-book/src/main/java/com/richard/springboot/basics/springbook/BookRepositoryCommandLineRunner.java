package com.richard.springboot.basics.springbook;

import java.util.List;
import java.util.Optional;

import com.richard.springboot.basics.springbook.entity.Book;
import com.richard.springboot.basics.springbook.service.BookRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class BookRepositoryCommandLineRunner implements CommandLineRunner {
  @Autowired
  private BookRepository bookRepository;

  private static final Logger log = LoggerFactory.getLogger(BookRepositoryCommandLineRunner.class);

  @Override
  public void run(String... args) throws Exception {
    Book book = new Book("hakikagu", "Japanese Auth");
    bookRepository.save(book);
    log.info("New user created: " + book);

    Optional<Book> bookWithIdOne = bookRepository.findById(1L);
    log.info("User is retrieved: " + bookWithIdOne);
    // .r.s.b.s.BookRepositoryCommandLineRunner : User is retrieved: Optional[Book [author=MG Gandhi, id=1, name=New beginning]]

    List<Book> books = bookRepository.findAll();
    log.info("All users : {}", books);
    // .r.s.b.s.BookRepositoryCommandLineRunner : All users: [Book [author=MG Gandhi, id=1, name=New beginning], Book [author=Japanese Auth, id=2, name=hakikagu]]  


    // .r.s.b.s.BookRepositoryCommandLineRunner : New user: Book [author=Japanese Auth, id=2, name=hakikagu]
  }
}
