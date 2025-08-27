"use client";

import React from "react";
import { data } from "@/assets/assets.js";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const { id } = params;

  const product = data.find((item) => item.id === Number(id));

  return (
    <div className="p-6">
      {product ? (
        <div className="flex gap-6">
        
          <div className="w-1/2">
            <img
              src={product.image.src}
              alt={product.title}
              className="w-full rounded-lg shadow-md"
            />
          </div>

       
          <div className="w-1/2 flex flex-col gap-4">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-xl text-gray-600">${product.price}</p>
            <p>{product.description}</p>
            <p className="text-gray-700">Category: {product.category}</p>

            <div className="flex items-center gap-2">
              <label className="text-gray-700">Quantity:</label>
              <input
                type="number"
                defaultValue={1}
                min={1}
                className="w-16 border rounded p-1"
              />
            </div>

            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <h2 className="text-red-500">Product not found!</h2>
      )}
    </div>
  );
};

export default Page;
