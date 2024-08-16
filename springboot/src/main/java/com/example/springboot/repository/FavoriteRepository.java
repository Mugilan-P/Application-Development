package com.example.springboot.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springboot.model.Favorite;
import com.example.springboot.model.User;

@Repository
public interface FavoriteRepository extends JpaRepository<Favorite, Long> {
    List<Favorite> findByUser(User user);

    Optional<Favorite> findByUserAndProductId(User user, Long productId);
}
