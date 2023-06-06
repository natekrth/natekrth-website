'use client'

import Image from 'next/image'
import { Element } from 'react-scroll' 

export default function Home() {
  return (
    <div>
      <Element name="test1" className="h-96 mb-80" >
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
      </Element>
    </div>
  )
}