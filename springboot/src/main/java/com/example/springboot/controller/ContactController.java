package com.example.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.model.Contact;
import com.example.springboot.model.User;
import com.example.springboot.service.ContactService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin("*")
public class ContactController {
    @Autowired
    public ContactService contactService;

    @PostMapping("/post")
    public Contact postMethodName(@RequestBody Contact entity) {
        contactService.post(entity);
        return entity;
    }

    @GetMapping("/getAll")
    public List<Contact> getALL() {
        return contactService.signInGet();
    }

}
