package com.example.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.model.Favorite;
import com.example.springboot.model.FavoriteRequest;
import com.example.springboot.service.FavoriteService;

@RestController
@RequestMapping("/favorites")
@CrossOrigin("*")
public class FavoriteController {
    @Autowired
    private FavoriteService favoriteService;

    @PostMapping("/add")
    public ResponseEntity<Favorite> addFavorite(@RequestBody FavoriteRequest request) {
        Favorite favorite = favoriteService.addFavorite(request.getUserId(), request.getProductId());
        return new ResponseEntity<>(favorite, HttpStatus.CREATED);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Favorite>> getFavoritesByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(favoriteService.getFavoritesByUserId(userId));
    }

    @DeleteMapping("/remove")
    public ResponseEntity<?> removeFavorite(@RequestBody FavoriteRequest request) {
        System.out.println(request.getUserId() + request.getProductId());
        favoriteService.removeFavorite(request.getUserId(), request.getProductId());
        return ResponseEntity.ok().build();
    }
}
