package com.example.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springboot.model.Favorite;
import com.example.springboot.model.User;
import com.example.springboot.repository.FavoriteRepository;
import com.example.springboot.repository.UserRepo;

@Service
public class FavoriteService {
    @Autowired
    private FavoriteRepository favoriteRepository;

    @Autowired
    private UserRepo userRepository;

    public Favorite addFavorite(Long userId, Long productId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Check if the favorite already exists for the given user and product
        Optional<Favorite> existingFavorite = favoriteRepository.findByUserAndProductId(user, productId);
        if (existingFavorite.isPresent()) {
            throw new RuntimeException("This product is already in your favorites.");
        }

        // If not, create a new favorite
        Favorite favorite = new Favorite();
        favorite.setUser(user);
        favorite.setProductId(productId);
        return favoriteRepository.save(favorite);
    }

    public List<Favorite> getFavoritesByUserId(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        return favoriteRepository.findByUser(user);
    }

    public void removeFavorite(Long userId, Long productId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Favorite favorite = favoriteRepository.findByUserAndProductId(user, productId)
                .orElseThrow(() -> new RuntimeException("Favorite not found"));

        favoriteRepository.delete(favorite);
    }
}
