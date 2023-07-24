import React from 'react'
import Image from 'next/image';
import about_img from '/public/assets/images/mypic5.png';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';
const About = () => {
  return (
    <div id='About'>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-14 md:flex-row-reverse flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded-full bg-slate-100"
        alt="hero"
        src={about_img}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center pr-7">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold font-sans capitalize text-orange-500">
        About myself and <br className="hidden lg:inline-block" />
        my profession
      </h1>
      <p className="mb-5 leading-relaxed font-bold font-sans">
        Visit my CV to know about my personal profession and check out my interest and experience
        in my corresponding field.
      </p>
      <p className="mb-8 leading-relaxed line-clamp-2 font-bold font-sans">
      An advance knowledge that helps me a lot in seeking knowledge about Web 2.0 Development. 
      A course of 1 Year have still more advance education which will help me to become creative
       in Technological sector
      </p>
      <div className="flex justify-center">
        <Link href="/assets/my-cv/CV.pdf" target='_blank'>
        <button className="inline-flex items-center gap-x-2 text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
          View CV <AiOutlineArrowRight/>
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default About