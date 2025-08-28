"use client";
import React, { useEffect, useState } from "react";
import { data } from "@/assets/assets";
import Image from "next/image";
import useProduct from "@/context/ProductContext";
import Loader from "@/components/Loader";
import { useParams } from "next/navigation";

function page({ params }) {
  const {id} = useParams()
  // const { id } = params;
  const [product, setProduct] = useState(null);
  const { currency, addCart } = useProduct();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundProduct = data.find((item) => item.id === parseInt(id));
    setProduct(foundProduct);
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-sky-100">
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden md:flex">
          <div className="md:w-1/2">
            <Image
              style={{width:"auto",height:"auto"}}
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h1 className="text-3xl font-bold mb-2 text-black">{product.title}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold text-black">
                {currency}
                {product.price}
              </span>
              <button
                onClick={() => addCart(product.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;