'use client'
import Image from "next/image";
import useProduct from "@/context/ProductContext";

function Items({ image, id, title, price }) {
    const { AddToCart, setFleg } = useProduct();

    

    return (
        <div 
           
            className="white  p-3 cursor-pointer"
        >
            <Image  
                src={image}
                width={100} 
                height={100} 
                className="w-full h-[200px] object-contain bg-white"
                alt={title}
            />
            <h2 className="text-lg font-semibold mt-2">{title}</h2>
            <p className="text-gray-600 font-bold">${price}</p>
            <button
            
                className="mt-2 border px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
                Add to Cart
            </button>
        </div>
    );
}

export default Items;
