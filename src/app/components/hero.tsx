import React from 'react';
import Image from 'next/image';
import hero_img from '/public/assets/images/mypic6b.png';
import Type from './type';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="text-gray-600 body-font bg-fixed bg-cover bg-center bg-opacity-90 custom-image">
            <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image
                        className="object-cover object-center rounded-full bg-slate-100 bg-opacity-30"
                        alt="hero"
                        src={hero_img}
                    />
                </div>
                <div className="text-white lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                        Hi! I am
                        <br className="hidden lg:inline-block" />
                        <Type />
                    </h1>
                    <p className="mb-8 leading-relaxed font-sans font-semibold">
                        Creating Experience in computer sciences and other development
                        by the course presented by Presidential Initiative of Artificial
                        Intelligence and Computing -PIAIC- in University of
                        Management & Technology. An advance knowledge that helps
                        me a lot in seeking knowledge about Web 2.0 Development. A
                        course of 1 Year have still more advance education which will
                        help me to become creative in Technological sector
                    </p>
                    <div className="flex justify-center">
                        <Link href={'#Contact'}>
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Contact
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;