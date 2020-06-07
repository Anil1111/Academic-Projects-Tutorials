package com.richard.rest.webservices.restfulwebservices.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Todo {
  @Id
  @GeneratedValue
  private long id;
  private String description;
  private boolean done;
  private Date targetDate;
  private String username;

  protected Todo() {
  }

  public Todo(long id, String description, boolean done, Date targetDate, String username) {
    this.id  = id;
    this.description = description;
    this.done = done;
    this.targetDate = targetDate;
    this.username = username;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public boolean isDone() {
    return done;
  }

  public void setDone(boolean done) {
    this.done = done;
  }

  public Date getTargetDate() {
    return targetDate;
  }

  public void setTargetDate(Date targetDate) {
    this.targetDate = targetDate;
  }

  
  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }
  
  @Override
  public String toString() {
    return "Todo [description=" + description + ", done=" + done + ", id=" + id + ", targetDate=" + targetDate + "]";
  }

  @Override
  public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + (int) (id ^ (id >>> 32));
    return result;
  }

  @Override
  public boolean equals(Object obj) {
    if (this == obj)
      return true;
    if (obj == null)
      return false;
    if (getClass() != obj.getClass())
      return false;
    Todo other = (Todo) obj;
    if (id != other.id)
      return false;
    return true;
  }

  


  
}