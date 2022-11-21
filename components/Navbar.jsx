import React, { Component } from 'react';
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Image from 'next/image'

export class Navbar extends Component {
  render() {
    return (
      <div  className='bg-sky-900 w-full border-b-2 ease-in duration-300 '>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
            
            {/*<Link href="/">*/}
            <Image  src="/../public/logo.png" width="140px" height="80px" className='object-contain'   />
                
           { /*<h1 className='font-bold text-4xl text-blue-600'>Bethniel</h1>
            
    </Link>*/}
            <ul  className='hidden sm:flex'>
                <li className='p-4'>
               <Link href="/">About</Link>
                </li>
                <li className='p-4'>
                    <Link href="/contact">Milestone</Link>
                </li>
                <li className='p-4 text-blue-600'>
                    <Link href="/about">Blog</Link>
                </li>
               <li className='p-4 bg-blue-400'>
                <Link href="finance">Connect with us</Link>
               </li>
            </ul>
            <div className='block sm:hidden z-10'>
                <AiOutlineMenu size={20} />
                </div>
                <div className='sm:hidden  absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center
                w-full h-screen bg-black text-center ease-in duration-300' >
                <ul>
                <li className='p-4 text-4xl hover:text-gray-500'>
               <Link href="/">About</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href="/contact">Milestone</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href="/about">Blog</Link>
                </li>
               <li className='p-4 text-4xl hover:text-gray-500'>
                <Link href="/service">Connect with Us</Link>
               </li>
            </ul>
                </div>
                
            
        </div>
      </div>
    )
  }
}

export default Navbar