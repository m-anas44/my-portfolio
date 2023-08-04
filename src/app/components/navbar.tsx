"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaDownload } from 'react-icons/fa';
import logo from '/public/assets/images/logo-p.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className='flex justify-between items-center flex-wrap text-white bg-green-300 shadow-lg sticky top-0 
    z-50 px-8 lg:px-12 py-3'>

            <Link href={"/"} className="flex flex-row items-center select-none lg:mr-60">
                <Image
                    src={logo}
                    alt='Logo'
                    width={110}
                    height={110}
                />
            </Link>
            <div className='block lg:hidden'>
                <button type="button" onClick={() => { setIsOpen(!isOpen) }}>
                    <AiOutlineMenu className={`fill-current text-[32px] border-2 border-black rounded-md p-1 text-black ${isOpen ? "hidden" : "block"}`} />
                    <AiOutlineClose className={`fill-current text-[32px] border-2 border-black rounded-md p-1 text-black ${isOpen ? "block" : "hidden"}`} />
                </button>
            </div>
            {/* LINKS to show and hide font-bold text-red-500  */}
            <div className={`block flex-grow justify-between lg:flex lg:items-center 
      lg:w-auto w-full text-white
       ${isOpen ? "flex flex-col bg-green-900 opacity-80 rounded-lg mt-5" : "hidden"}`}>

                <ul className="text-sm m-3 lg:m-0 text-center lg:items-center lg:flex gap-x-4 gap-y-3">
                    <li>
                        <Link href={"#"} className='block lg:inline-block text-lg p-3 bg-black lg:bg-green-300 lg:text-black rounded-lg'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={"#About"} className='block lg:inline-block text-lg p-3 bg-black lg:bg-green-300 lg:text-black rounded-lg'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href={"#Projects"} className='block lg:inline-block text-lg p-3 bg-black lg:bg-green-300 lg:text-black rounded-lg'>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href={"#Skills"} className='block lg:inline-block text-lg p-3 bg-black lg:bg-green-300 lg:text-black rounded-lg'>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link href={"#Contact"} className='block lg:inline-block text-lg p-3 bg-black lg:bg-green-300 lg:text-black rounded-lg'>
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Download Button*/}


                <a href="/assets/my-cv/CV.pdf" target='_blank' className={`${isOpen ? "p-[12px] w-full" : "block"}`}>
                    <button className="flex justify-center items-center w-full border-2 border-black py-2 px-3 
                    focus:outline-none text-black rounded-lg font-sans bg-white lg:bg-black lg:text-white font-bold">
                        Download CV &nbsp;
                        <FaDownload className="text-lg inline-block" />
                    </button>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;