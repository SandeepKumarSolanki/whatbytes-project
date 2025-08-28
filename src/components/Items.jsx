'use client'
import Image from "next/image";
import useProduct from "@/context/ProductContext";
import { useRouter } from "next/navigation";

function Items({ image, id, title, price }) {
    const { addCart } = useProduct();
    const router = useRouter();

    const handleAdd = (e) => {
        e.stopPropagation(); 
        addCart(id);
        alert("Added to cart");
    };

    return (
        <div 
            onClick={() => router.push(`/product/${id}`)}
            className="bg-white  p-3 cursor-pointer rounded-2xl"
        >
            <Image  
                src={image}
                width={100} 
                height={100} 
                className="w-full h-[200px] object-contain bg-white rounded-2xl"
                alt={title}
            />
            <h2 className="text-lg font-semibold mt-2 text-black">{title}</h2>
            <p className="text-gray-600 font-bold">${price}</p>
            <button
                onClick={() => addCart(id)}
                className="mt-2 border px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
                Add to Cart
            </button>
        </div>
    );
}

export default Items;
