'use client'

import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div>
        <nav className="bg-white p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
            <h1 className='text-3xl font-bold text-black grid place-content-center mb-2 md:mb-0'>
                Test
            </h1>
            <Link activeClass="active" className="test1 text-black" to="test1" spy={true} smooth={true} duration={500} >Test 1</Link>
            <Link activeClass="active" className="test1 text-black" to="test2" spy={true} smooth={true} duration={500} >Test 2</Link>
            <Link activeClass="active" className="test1 text-black" to="test3" spy={true} smooth={true} duration={500} >Test 3</Link>
            <Link activeClass="active" className="test1 text-black" to="test4" spy={true} smooth={true} duration={2000} >Test 4</Link>
        </nav>
    </div>
  )
}

export default Navbar