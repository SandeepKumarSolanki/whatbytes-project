'use client'
import React , {useState, useEffect} from "react"
import useProduct from "@/context/ProductContext"
import {data} from '@/assets/assets.js'

function Home() {
  const {search, showSearch, fleg, setSearch, cartItem, setCartItem, cartData} = useProduct();


  return (
    <div className="max-w-screen pb-10 lg:px-20">

    </div>
  )
}

export default Home;