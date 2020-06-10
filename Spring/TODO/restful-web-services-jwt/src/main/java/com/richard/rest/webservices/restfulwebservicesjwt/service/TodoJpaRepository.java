package com.richard.rest.webservices.restfulwebservicesjwt.service;

import java.util.List;

import com.richard.rest.webservices.restfulwebservicesjwt.entity.Todo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoJpaRepository extends JpaRepository<Todo, Long> {
  List<Todo> findByUsername(String username);
  
}