import React from 'react'
import { FaHtml5 } from 'react-icons/fa';
import { BsFiletypeCss } from 'react-icons/bs';
import { CgCPlusPlus } from 'react-icons/cg';
import { TbBrandNextjs, TbBrandTailwind, TbBrandTypescript } from 'react-icons/tb';

const Skills = () => {
    return (
        <div id='Skills'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-14 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-orange-500 tracking-widest font-bold title-font mb-1">
                            TO KNOW
                        </h2>
                        <h1 className="sm:text-3xl text-2xl font-bold  title-font text-gray-900">
                            Check Out my Skills
                        </h1>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4 -mt-[4rem]">
                        {/* Skills */}
                        <div className="p-4 w-full md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                                        <FaHtml5 className="text-xl" />
                                    </div>
                                    <h2 className="text-gray-600 text-lg title-font font-bold font-sans">
                                        HTML 5
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className='w-full h-2 bg-gray-300 rounded-lg'>
                                        <div className='w-[70%] bg-orange-500 h-2 rounded-lg'></div>
                                    </div>
                                    <p className='text-right pt-1 font-bold font-sans'>70%</p>
                                </div>
                            </div>
                        </div>
                        {/* Skills */}
                        <div className="p-4 w-full md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                                        <BsFiletypeCss className="text-xl" />
                                    </div>
                                    <h2 className="text-gray-600 text-lg title-font font-bold font-sans">
                                        CSS
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className='w-full h-2 bg-gray-300 rounded-lg'>
                                        <div className='w-[70%] bg-orange-500 h-2 rounded-lg'></div>
                                    </div>
                                    <p className='text-right pt-1 font-bold font-sans'>70%</p>
                                </div>
                            </div>
                        </div>
                        {/* Skills */}
                        <div className="p-4 w-full md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                                        <TbBrandTypescript className="text-xl font-bold" />
                                    </div>
                                    <h2 className="text-gray-600 text-lg title-font font-bold font-sans">
                                        Typescript/Javascript
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className='w-full h-2 bg-gray-300 rounded-lg'>
                                        <div className='w-[50%] bg-orange-500 h-2 rounded-lg'></div>
                                    </div>
                                    <p className='text-right pt-1 font-bold font-sans'>50%</p>
                                </div>
                            </div>
                        </div>
                        {/* Skills */}
                        <div className="p-4 w-full md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                                        <TbBrandNextjs className="text-xl" />
                                    </div>
                                    <h2 className="text-gray-600 text-lg title-font font-bold font-sans">
                                        Next Js 13
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className='w-full h-2 bg-gray-300 rounded-lg'>
                                        <div className='w-[50%] bg-orange-500 h-2 rounded-lg'></div>
                                    </div>
                                    <p className='text-right pt-1 font-bold font-sans'>50%</p>
                                </div>
                            </div>
                        </div>
                        {/* Skills */}
                        <div className="p-4 w-full md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                                        <TbBrandTailwind className="text-xl" />
                                    </div>
                                    <h2 className="text-gray-600 text-lg title-font font-bold font-sans">
                                        Tailwind CSS
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className='w-full h-2 bg-gray-300 rounded-lg'>
                                        <div className='w-[50%] bg-orange-500 h-2 rounded-lg'></div>
                                    </div>
                                    <p className='text-right pt-1 font-bold font-sans'>50%</p>
                                </div>
                            </div>
                        </div>
                        {/* Skills */}
                        <div className="p-4 w-full md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                                        <CgCPlusPlus className="text-xl font-bold" />
                                    </div>
                                    <h2 className="text-gray-600 text-lg title-font font-bold font-sans">
                                        C++ / OOP
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className='w-full h-2 bg-gray-300 rounded-lg'>
                                        <div className='w-[50%] bg-orange-500 h-2 rounded-lg'></div>
                                    </div>
                                    <p className='text-right pt-1 font-bold font-sans'>50%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Skills