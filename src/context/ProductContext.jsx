"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {data} from '@/assets/assets.js'
const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const currency = "$";

  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const updateCart = (itemId, quantity) => {
    setCartItems((prev) => ({ ...prev, [itemId]: quantity }));
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      delete newCart[itemId];
      return newCart;
    });
  };

  const decrementCart = (itemId) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId] -= 1;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getCartContents = () => {
    return Object.keys(cartItems)
      .map((itemId) => {
        const item = data.find((product) => product.id === Number(itemId));
        if (item) {
          return { ...item, quantity: cartItems[itemId] };
        }
        return null;
      })
      .filter(Boolean);
  };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    const getUniqueCartItems = () => {
        return Object.keys(cartItems).length;
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                let itemInfo = data.find((product) => product.id === Number(itemId));
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[itemId];
                }
            }
        }
        return totalAmount;
    }

  const product = {
    showSearch,
    setShowSearch,
    search,
    setSearch,
    currency,
    cartItems,
    addCart,
    updateCart,
    removeFromCart,
    decrementCart,
    getCartContents,
    getTotalCartItems,
    getUniqueCartItems,
    getTotalCartAmount,
  };



  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export default useProduct;
