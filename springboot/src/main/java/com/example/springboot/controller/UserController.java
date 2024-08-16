package com.example.springboot.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.model.User;
import com.example.springboot.service.UserService;

@RestController
@RequestMapping("/api")
// @CrossOrigin(origins = "http://localhost:5173")// connection between react
// and springboot
@CrossOrigin("*")

public class UserController {
    @Autowired
    public UserService userService;

    @GetMapping("/getAll")
    public List<User> getALL() {
        return userService.signInGet();
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User registerRequest) {
        if (userService.existsByEmail(registerRequest.getEmail())) {
            return ResponseEntity.badRequest().body("Email is already in use.");
        }
        userService.save(registerRequest);
        return ResponseEntity.ok("User registered successfully.");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {
        User user = userService.findByEmail(loginRequest.getEmail());

        if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
            // Return the Register object instead of a custom response class
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(401).body("Invalid email/password");
        }
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        Optional<User> user = userService.getUserById(id);
        return user.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
