'use client'

import Image from 'next/image'
import { Element } from 'react-scroll' 
import ScrollLink from "@/components/ScrollLink"
import { NextPage } from "next";


export default function Home() {
  return (
    <div>
      {/* <Element name="test1" className="h-96 mb-80" >
        test 1
      </Element>

      <Element name="test2" className="h-96 mb-80">
        test 2
      </Element>

      <Element name="test3" className="h-96 mb-80">
        test 3
      </Element>

      <Element name="test4" className="h-96 mb-80">
        test 4
      </Element> */}
      <div
        className="grid place-content-center min-h-screen bg-gray-900 text-gray-50"
        id="section-0"
      >
        <section className="flex flex-col items-center gap-4">
          {/* add href with hash to an elementId */}
          
        </section>
      </div>
      <section
        className="grid place-content-center min-h-screen bg-gray-100"
        id="section-1"
      >
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl my-2 text-black">Section 1</h2>
          <ScrollLink className="btn text-black" href="#section-0">
            Back to Top
          </ScrollLink>
        </div>
      </section>
    </div>
  )
}
