package com.richard.springboot.basics.springbook.service;

import com.richard.springboot.basics.springbook.entity.Book;

import org.springframework.data.jpa.repository.JpaRepository;

// To avoid lots of methods(merge, persist,remove) for each entity, we just need to create an interface and spring will take care by providing imeplementation using spring data JPA
public interface BookRepository  extends JpaRepository<Book, Long>{
  // JpaResository<Entity, PrimaryKeyType>


}

