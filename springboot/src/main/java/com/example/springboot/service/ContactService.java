package com.example.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springboot.model.Contact;
import com.example.springboot.repository.ContactRepo;

@Service
public class ContactService {
    @Autowired
    public ContactRepo contactRepo;

    public Contact post(Contact entity) {
        contactRepo.save(entity);
        return entity;
    }

    public List<Contact> signInGet() {
        return contactRepo.findAll();

    }
}
