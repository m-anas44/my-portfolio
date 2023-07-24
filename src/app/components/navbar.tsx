import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaDownload } from 'react-icons/fa';
import logo from '/public/assets/images/logo-p.png'

const Navbar = () => {
    return (
        <div className='bg-green-300 z-50 sticky top-0'>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image
                            src={logo}
                            alt='Logo'
                            width={100}
                            height={100}
                        />
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 font-bold flex flex-wrap items-center text-base justify-center">
                        <Link href={"#"} className="mr-7 hover:border-b-2 border-black hover:text-gray-900">
                            Home
                        </Link>
                        <Link href={"#About"} className="mr-7 hover:border-b-2 border-black hover:text-gray-900">
                            About
                        </Link>
                        <Link href={"#Projects"} className="mr-7 hover:border-b-2 border-black hover:text-gray-900">
                            Projects
                        </Link>
                        <Link href={"#Skills"} className="mr-7 hover:border-b-2 border-black hover:text-gray-900">
                            Skills
                        </Link>
                        
                        <Link href={"#Contact"} className="mr-7 hover:border-b-2 border-black hover:text-gray-900">
                            Contact
                        </Link>
                    </nav>
                    <a href="/assets/my-cv/CV.pdf" target='_blank'>
                        <button className="text-white inline-flex items-center bg-neutral-800 border-0 py-1 px-3 focus:outline-none hover:bg-black hover:text-white rounded text-base mt-4 md:mt-0 font-sans font-semibold">
                            Download CV
                            <FaDownload className="text-lg ml-2" />
                        </button>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default Navbar;