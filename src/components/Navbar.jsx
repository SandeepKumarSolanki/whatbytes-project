'use client'
import useProduct from "@/context/ProductContext";
import { Search, ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";



function Navbar() {

    const { setSearch, search, showSearch, setShowSearch } = useProduct()
    return (
        <div className="bg-blue-600 max-w-screen flex px-10 py-8 justify-around">
            <div>
                <h3 className="md:text-4xl text-xl text-white font-bold ">LOGO</h3>
            </div>
            <div className="flex gap-10">
                <div className=" relative hidden lg:block">
                    <Search className="absolute top-1.5 lg:top-2.5 left-1.5 text-white " />
                    <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search for Products..." className="border-2 border-blue-400 rounded-md w-[300px] xl:w-[400px] pl-10 p-2 outline-none text-white" />
                </div>
                <div className=" relative mr-4 lg:hidden">
                    <Search onClick={() => setShowSearch(!showSearch)} className="absolute top-1.5 lg:top-2.5 left-1.5 text-white " />
                </div>

            </div>
            <div className="flex items-center gap-2 md:gap-4">
                <Link href='/cart'>
                    <button className="flex bg-blue-950 justify-center items-center md:px-10 px-4 py-3 font-bold rounded-md text-white gap-2 cursor-pointer"><ShoppingCart /><span>Cart</span></button>
                </Link>
                <UserIcon className="text-white" size={40} />
            </div>
        </div>
    )
}

export default Navbar