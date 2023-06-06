'use client'

import React from 'react'
import { Link } from 'react-scroll'
import ScrollLink from "@/components/ScrollLink"

const Navbar = () => {
    return (
        <nav className="bg-white p-4 w-full flex sticky top-0 drop-shadow-xl">
            <div className='basis-1/4'>
                <h1 className='text-3xl font-bold text-black flex gap-2'>
                    Natekrth
                </h1>
            </div>
            <div className='basis-3/4 m-auto'>
                <div className='flex justify-end gap-3 md:gap-10'>
                    <ScrollLink className="btn text-black" href="#section-1">
                        About
                    </ScrollLink>
                    <ScrollLink className="btn text-black" href="#section-1">
                        Experience
                    </ScrollLink>
                    <ScrollLink className="btn text-black" href="#section-1">
                        Project
                    </ScrollLink>
                    <ScrollLink className="btn text-black" href="#section-1">
                        Hobby
                    </ScrollLink>
                    <ScrollLink className="btn text-black" href="#section-1">
                        Contact
                    </ScrollLink>
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