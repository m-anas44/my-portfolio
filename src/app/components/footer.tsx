import React from 'react'
import logo from '/public/assets/images/logo-p.png'
import Image from 'next/image'
const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <Image
                            src={logo}
                            alt='Logo'
                            width={100}
                            height={100}
                        />
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        © 2020 Muhammad Anas
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="text-gray-500">
                            
                        </a>
                        <a className="ml-3 text-gray-500">
                            
                        </a>
                        <a className="ml-3 text-gray-500">
                            
                        </a>
                        <a className="ml-3 text-gray-500">
                            
                        </a>
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Footer;