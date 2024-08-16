import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from "sonner";
import { cards } from "./Packages";

import { getUser, isAuthenticated } from "./utils/index";

// Create a Context for the Wishlist
const WishlistContext = createContext();

// Create a provider component
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    updateWishlist();
  }, []);

  const updateWishlist = () => {
    console.log(isAuthenticated());
    if (isAuthenticated()) {
      axios
        .get("http://localhost:8080/favorites/user/" + getUser().id)
        .then((res) => {
          const wistlist = res.data.map((fav) =>
            cards.find((card) => card.id == fav.productId)
          );
          setWishlist(wistlist);
        })
        .catch(() => toast.error("Failed to fetch favourites"));
    }
  };

  const addToWishlist = (card) => {
    if (!wishlist.some((item) => item.id === card.id)) {
      axios //
        .post("http://localhost:8080/favorites/add", {
          userId: getUser().id,
          productId: card.id,
        })
        .then(() => {
          toast.success(`${card.name} has been added to your favourite!`);
          updateWishlist();
        })
        .catch(() => toast.error("Failed to add to favourites"));
    } else {
      toast.warning(`${card.name} Already exists`);
    }
  };

  const removeFromWishlist = (cardId) => {
    setWishlist(wishlist.filter((item) => item.id !== cardId));
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use the WishlistContext
export const useWishlist = () => useContext(WishlistContext);
