package com.example.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springboot.model.User;
import com.example.springboot.repository.UserRepo;

@Service
public class UserService {
    @Autowired
    public UserRepo userRepo;

    public List<User> signInGet() {
        return userRepo.findAll();

    }

    public String registerUser(String email, String password) {
        if (userRepo.findByEmail(email) != null) {
            return "User already exists";
        }
        User user = new User();
        user.setEmail(email);
        user.setPassword(password); // In a real application, you should hash the password
        userRepo.save(user);
        return "User created successfully";
    }

    public boolean authenticateUser(String email, String password) {
        User user = userRepo.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return true;
        }
        return false;
    }

    public User findByEmail(String email) {
        return userRepo.findByEmail(email);
    }

    public boolean existsByEmail(String email) {
        return userRepo.findByEmail(email) != null;
    }

    public void save(User register) {
        userRepo.save(register);
    }

    public Optional<User> getUserById(Long id) {
        return userRepo.findById(id);
    }
}
