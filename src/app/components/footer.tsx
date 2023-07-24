import React from 'react'
import logo from '/public/assets/images/logo-p.png'
import Link from 'next/link';
import Image from 'next/image'
import { FaFacebook, FaGithub, FaInstagram, FaSnapchat } from 'react-icons/fa';
const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-3 mx-auto border-t flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <Image
                            src={logo}
                            alt='Logo'
                            width={100}
                            height={100}
                        />
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    Copyright © 2023 Muhammad Anas
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-3xl">
                        <Link 
                        target='_blank'
                        href={'https://www.facebook.com/Istyle143'} 
                        className="text-gray-500 hover:text-blue-700">
                            <FaFacebook />
                        </Link>
                        <Link target='_blank'
                        href={'https://www.instagram.com/m._.anas444/'}
                        className="ml-3 text-gray-500 hover:text-pink-600">
                            <FaInstagram />
                        </Link>
                        <Link target='_blank'
                        href={'https://www.snapchat.com/add/anas226013?share_id=LkAuINKvrK4&locale=en-US'}
                        className="ml-3 text-gray-500 hover:text-yellow-400">
                            <FaSnapchat/>
                        </Link>
                        <Link target='_blank'
                        href={'https://github.com/m-anas44'}
                        className="ml-3 text-gray-500 hover:text-gray-700">
                            <FaGithub />
                        </Link>
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;