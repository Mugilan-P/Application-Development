package com.example.springboot.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FavoriteRequest {
    private Long userId;
    private Long productId;
}
