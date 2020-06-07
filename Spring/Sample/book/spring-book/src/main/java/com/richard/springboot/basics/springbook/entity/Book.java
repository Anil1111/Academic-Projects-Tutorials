package com.richard.springboot.basics.springbook.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

// Table - User
@Entity // To define that a class is an Entity for JPA configuration
public class Book {
	@Id // to declare the property as the primary key
	@GeneratedValue // generate the value for the primary key
	private long id;
	private String name;
	private String author;

	// JPA requires a default constructor
	protected Book(){}

	public Book(String name, String author) {
		this.name = name;
		this.author = author;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	@Override
	public String toString() {
		return "Book [author=" + author + ", id=" + id + ", name=" + name + "]";
	}

}