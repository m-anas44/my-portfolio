import React from 'react'
import Image from 'next/image'
import image_1 from '/public/assets/images/project1.png'
import image_2 from '/public/assets/images/project2.png'
import Link from 'next/link'
import { BiLinkExternal } from 'react-icons/bi';
const Project = () => {

  return (
    <div id='Projects'>
      <section className="text-gray-600 body-font bg-slate-100">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-orange-500">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Some initial projects to practicing and building experience in Next Js 13
              with tailwind CSS.
            </p>
            <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex"></div>
                        </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={image_1}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-orange-300 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-bold text-orange-500 mb-1">
                    Project 1
                  </h2>
                  <h1 className="title-font text-lg text-gray-900 mb-2 font-bold">
                    MARKET SHOP
                  </h1>
                  <p className="leading-relaxed line-clamp-2 font-sans">
                    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                  </p>
                  <p className='font-semibold text-sm mt-2 text-black'>
                    <Link href={'https://muhammad-anas-ui.vercel.app'} target='_blank'>
                      View Project<BiLinkExternal className="inline ml-1"/>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={image_2}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-orange-300 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-bold text-orange-500 mb-1">
                    Project 2
                  </h2>
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-2">
                    PORTFOLIO
                  </h1>
                  <p className="leading-relaxed line-clamp-2 font-sans">
                    Personal Experience and Information presented by portfolio.
                  </p>
                  <p className='font-semibold text-sm mt-2 text-black'>
                    <Link href={'https://github.com/m-anas44'} target='_blank'>
                      Code on Github
                    <BiLinkExternal className="inline ml-1"/>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={image_1}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-orange-300 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-bold text-orange-500 mb-1">
                    Project 3
                  </h2>
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-2">
                    FACEBOOK PAGE
                  </h1>
                  <p className="leading-relaxed line-clamp-2 font-sans">
                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                    microdosing tousled waistcoat.
                  </p>
                  <p className='font-semibold text-sm text-black mt-2'>
                    <Link href={'https://github.com/m-anas44'} target='_blank'>
                      Code on Github <BiLinkExternal className="inline ml-1"/>
                      </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Project