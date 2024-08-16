package com.example.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springboot.model.Contact;

@Repository
public interface ContactRepo extends JpaRepository<Contact, Integer> {

}