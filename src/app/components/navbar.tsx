import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaDownload } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src={require("../../../public/assets/images/logo-p.png")} alt='Logo' width={100} height={100}/>
     
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href={"#"} className="mr-5 hover:text-gray-900">Home</Link>
      <Link href={"#"} className="mr-5 hover:text-gray-900">About</Link>
      <Link href={"#"} className="mr-5 hover:text-gray-900">Skills</Link>
      <Link href={"#"} className="mr-5 hover:text-gray-900">Projects</Link>
      <Link href={"#"} className="mr-5 hover:text-gray-900">Contact</Link>
    </nav>
        <a href="/assets/my-cv/CV.pdf">
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 font-bold">
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