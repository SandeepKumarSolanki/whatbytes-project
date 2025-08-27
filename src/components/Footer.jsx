import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-blue-900 text-[#ffffff] mt-10  bottom-0  px-10 py-8 justify-around w-full flex gap-20 md:gap-0 flex-col md:flex-row'>
      <div className='flex flex-col md:gap-4'>
        <h3 className='text-2xl font-bold'>Filters</h3>
        <div className='flex items-center gap-5'>
          <p>All</p>
          <p>EleeZronk</p>
        </div>
        <div>
          &copy;2024 American
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <h3 className='text-2xl font-bold'>About Us</h3>
        <Link href='#'>About Us</Link>
        <Link href='#'>Contact</Link>
      </div>
      <div className='broder flex flex-col gap-6'>
        <h3 className='text-2xl font-bold'>Follow Us</h3>
        <div className='flex gap-6'>
         <div className='bg-blue-800 rounded-full p-3 cursor-pointer'>
           <a href='#'><Facebook size={20}/></a>
         </div>
         <div className='bg-blue-800 rounded-full p-3 cursor-pointer'>
           <a><Twitter size={20}/></a>
         </div>
         <div className='bg-blue-800 rounded-full p-3 cursor-pointer'>
           <a><Instagram size={20}/></a>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
