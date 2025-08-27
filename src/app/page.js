'use client'
import useProduct from "@/context/ProductContext";
import React, { useEffect, useState } from "react";
import { data } from '@/assets/assets.js'
import Items from "@/components/Items";


function Home() {
    const { search, showSearch, fleg, setSearch, cartItem, setCartItem, cartData } = useProduct();

    const [category, setCategory] = useState([]);
    const [all, setAll] = useState([]);
    const [priceRenge, setPriceRenge] = useState(0);
    const [notAvailble, setNotAvailble] = useState('');

    const handleChange = (e) => {

        if (category.includes(e.target.value)) {
            setCategory((prev) => prev.filter((item) => item !== e.target.value))
        }
        else {
            setCategory((prev) => [...prev, e.target.value])
        }
    }

    const isFilter = () => {
        let filtered = data;
        if (search) {
            filtered = filtered.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
        }

        if (category.length > 0) {
            filtered = filtered.filter(item => category.includes(item.category));
        }

        setAll(filtered);
    };

    const Renge = () => {
        const filtered = data.filter(item => item.price == priceRenge);
        setAll(filtered.length > 0 ? filtered : data);
    };

    useEffect(() => {
        let appendData = null;
        cartData.forEach(item => {
            appendData = data.find(prod => prod.id == item.id);
        });

        if (fleg && appendData) {
            setCartItem(prev => [...prev, appendData]);
        }
    }, [cartData]);

    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem("Cart"));
        if (localCart) setCartItem(localCart);
    }, []);

    useEffect(() => {
        localStorage.setItem("Cart", JSON.stringify(cartItem));
    }, [cartItem]);

    useEffect(() => {
        Renge();
    }, [priceRenge]);

    useEffect(() => {
        isFilter();
    }, [category, search]);

    return (
        <div className="max-w-screen pb-10 lg:px-20">
            {showSearch && (
                <div className="flex justify-center mt-5 lg:hidden">
                    <input
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        placeholder="Search for Products..."
                        className="border-2 border-blue-400 rounded-md w-[300px] xl:w-[400px] pl-3 p-2 outline-none"
                    />
                </div>
            )}

            <div className="px-10 mt-10 flex flex-col lg:flex-row gap-5 justify-start">

                <div>
                    <div className="max-w-[200px] leading-7 rounded-md px-5 py-3 bg-blue-700 text-white">
                        <h1 className="text-2xl">Filters</h1>

                        <span className="text-1xl">Category</span>
                        <div className="gap-2">
                            <input type="checkbox" readOnly id="all" checked={category.length === 0 ? true : false} onClick={() => setCategory([])} />
                            <label htmlFor="all" className="ml-1 text-[18px]">All</label>
                        </div>
                        <div>
                            <input type="checkbox" id="electronics" onChange={handleChange} value={'electronics'} />
                            <label htmlFor="electronics" className="ml-1 text-[18px]">Electronics</label>
                        </div>
                        <div>
                            <input type="checkbox" id="clothing" onChange={handleChange} value={'clothing'} />
                            <label htmlFor="clothing" className="ml-1 text-[18px]">Clothing</label>
                        </div>
                        <div>
                            <input type="checkbox" id="home" />
                            <label htmlFor="home" className="ml-1 text-[18px]">Home</label>
                        </div>

                        <span>Price</span>
                        <input type="range" min={0} max={1000} value={priceRenge} onChange={(e) => setPriceRenge(e.target.value)} className="" />
                        <div className="flex justify-between">
                            <h3>{0}</h3>
                            <h3>{1000}</h3>
                        </div>
                    </div>

                </div>

                <div>
                    <h1 className="text-4xl font-bold mb-5">Product Listing</h1>
                    {notAvailble ? notAvailble : <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-2">
                        {
                            all.length > 0 ? all.slice(0, 7).map((item) => (
                                <div key={item.id}>
                                    <Items image={item.image} id={item.id} title={item.title} price={item.price} />
                                </div>
                            ))
                                :
                                <div className="flex justify-center items-center">
                                    <h1 className="text-4xl">Product Not Found</h1>
                                </div>
                        }
                    </div>}
                </div>
                
            </div>
        </div>
    );
}

export default Home;
