'use client'

import Image from 'next/image'
import ScrollLink from "@/components/ScrollLink";
import { NextPage } from "next";
import Link from 'next/link';
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div>
      <div id="home" className="grid place-content-center min-h-screen bg-gray-900 text-gray-50">
        <section className="flex flex-col items-center gap-4">
          {/* add href with hash to an elementId */}
          <ScrollLink className="btn" href="#about">
            {/* <Link href="/about">Scroll to Section 1</Link> */}
            <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.0 }}>
              Scroll to Section 1
            </motion.div>
          </ScrollLink>
        </section>
      </div>

      <div id="experience" className="grid place-content-center min-h-screen bg-gray-900 text-gray-50">
        <section className="flex flex-col items-center gap-4">
          {/* add href with hash to an elementId */}

          <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.0 }}>
            <h3 className="text-black">
              Experience
            </h3>
          </motion.div>
        </section>
      </div>

      <div id="project" className="grid place-content-center min-h-screen bg-gray-100">
        <section className="flex flex-col items-center gap-4">
          <h2 className="text-xl my-2 text-black">Back Home</h2>
          <h3 className="text-black">
            Project
          </h3>
        </section>
      </div>

      <div id="hobby" className="grid place-content-center min-h-screen bg-gray-900 text-gray-50">
        <section className="flex flex-col items-center gap-4">
          {/* add href with hash to an elementId */}
          <h3 className="text-black">
            Hobby
          </h3>
        </section>
      </div>

      <div id="contact" className="grid place-content-center min-h-screen bg-gray-100">
        <section className="flex flex-col items-center gap-4">
          <h2 className="text-xl my-2 text-black">Back Home</h2>
          <h3 className="text-black">
            Contact
          </h3>
        </section>
      </div>

      <div id="about" className="grid place-content-center min-h-screen bg-gray-100">
        <section className="flex flex-col items-center gap-4">
          <h2 className="text-xl my-2 text-black">Back Home</h2>
          <ScrollLink className="btn text-black" href="#home">
            Back to Top
          </ScrollLink>
        </section>
      </div>

      {/* <div id="custom" className="grid place-content-center min-h-screen bg-gray-100">
        <section className="flex flex-col items-center gap-4">

        </section>
      </div> */}

      <div id="custom" className="grid grid-cols-2 grid-flow-col gap-4 h-80 m-10">
        <div className="bg-blue-600">01</div>
        <div className="bg-blue-600">02</div>
      </div>

    </div>
  )
}
