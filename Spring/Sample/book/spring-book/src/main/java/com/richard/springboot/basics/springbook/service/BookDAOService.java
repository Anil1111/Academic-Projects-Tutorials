package com.richard.springboot.basics.springbook.service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import com.richard.springboot.basics.springbook.entity.Book;
import org.springframework.stereotype.Repository;

@Repository // indicates something that interacts with the DB
@Transactional //declared on method/classes that define that each method consist of a transaction
public class BookDAOService {
  // EntityManager is an interface to the persistence context
  @PersistenceContext
  private EntityManager entityManager;

  // Used to store book into the database
  public long insert(Book book){
    entityManager.persist(book); // book gets stored in the inmemory DB H2
    return book.getId();
  }


  
}