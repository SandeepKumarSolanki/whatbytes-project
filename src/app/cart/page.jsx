"use client";
import useProduct from "@/context/ProductContext";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Cart() {
  const { currency, setCartItem } = useProduct();
  const [localCartItems, setLocalCartItems] = useState([]);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("Cart")) || [];
    setLocalCartItems(localCart);
    setCartItem(localCart);
  }, []);

  const removeCartData = (cartId) => {
    const updatedCart = localCartItems.filter((item) => item.id !== cartId);
    setLocalCartItems(updatedCart);
    localStorage.setItem("Cart", JSON.stringify(updatedCart));
    setCartItem(updatedCart);
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {localCartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        localCartItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b py-4"
          >
            <div className="flex items-center gap-5">
              <Image
                src={item.image}
                alt={item.title}
                width={120}
                height={120}
                className="rounded"
              />
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <span className="text-gray-700">
                  {currency}
                  {item.price}
                </span>
              </div>
            </div>
            <button
              onClick={() => removeCartData(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
