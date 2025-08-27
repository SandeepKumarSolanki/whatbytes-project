"use client";
import useProduct from "@/context/ProductContext";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";

function Cart() {
  const { currency, getCartContents, removeFromCart, addCart, decrementCart, getTotalCartAmount } = useProduct();
  const cartItems = getCartContents();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-10 bg-sky-100">
      <h1 className="text-3xl font-bold mb-6 text-black">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
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
                  <h2 className="font-semibold text-black">{item.title}</h2>
                  <span className="text-gray-700">
                    {currency}
                    {item.price}
                  </span>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => decrementCart(item.id)} className="bg-gray-500 px-2 py-1 rounded">-</button>
                    <span className="text-white">{item.quantity}</span>
                    <button onClick={() => addCart(item.id)} className="bg-gray-500 px-2 py-1 rounded">+</button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right mt-5 text-2xl font-bold text-black">
            Total: {currency}{getTotalCartAmount()}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
