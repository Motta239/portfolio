'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const HeroContent = () => {
  const [showMore, setShowMore] = useState(false)
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row  group relative  items-centerjustify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromTop}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff371d1] to-cyan-500">
              {' '}
              the best{' '}
            </span>
            project exprience
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromRight(0.8)}
          className="text-lg text-gray-400  max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.p className=" opacity-0 text-gray-400 group-hover:opacity-100  transition-all duration-1000 ease-in-out ">
          My experience in React has equipped me to tackle complex projects and
          deliver outstanding results. I look forward to the chance to discuss
          how my expertise can benefit your company and contribute to its
          continued success.
        </motion.p>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  )
}

export default HeroContent
