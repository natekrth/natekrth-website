'use client'

import React from 'react'
// import { Link } from 'react-scroll'
import Link from 'next/link'
import ScrollLink from "@/components/ScrollLink"

const Navbar = () => {
    return (
        <nav className="bg-white p-4 w-full flex sticky top-0 drop-shadow-xl">
            <div className='basis-1/4'>
                <ScrollLink className="text-black" href="#home">
                    <h1 className='text-3xl font-bold text-black flex gap-2'>
                        Natekrth
                    </h1>
                </ScrollLink>
            </div>
            <div className='basis-3/4 m-auto'>
                <div className='flex justify-end gap-3 md:gap-10'>
                    <ScrollLink className="text-black" href="#about">
                        About
                    </ScrollLink>
                    <ScrollLink className="text-black" href="#experience">
                        Experience
                    </ScrollLink>
                    <ScrollLink className="text-black" href="#project">
                        Project
                    </ScrollLink>
                    <ScrollLink className="text-black" href="#hobby">
                        Hobby
                    </ScrollLink>
                    <ScrollLink className="text-black" href="#contact">
                        Contact
                    </ScrollLink>
                    <ScrollLink className="text-black" href="#custom">
                        Custom
                    </ScrollLink>
                    <div className='hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                        </svg>
                    </div>
                </div>
            </div>
            {/* <Link activeClass="active" className="test1 text-black" to="test1" spy={true} smooth={true} duration={500} >Test 1</Link>
            <Link activeClass="active" className="test1 text-black" to="test2" spy={true} smooth={true} duration={500} >Test 2</Link>
            <Link activeClass="active" className="test1 text-black" to="test3" spy={true} smooth={true} duration={500} >Test 3</Link>
            <Link activeClass="active" className="test1 text-black" to="test4" spy={true} smooth={true} duration={2000} >Test 4</Link> */}
        </nav>
    )
}

export default Navbar