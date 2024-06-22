"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const HeroContent = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex md:flex-row  group relative  items-centerjustify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            React Native Expo Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromTop}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Crafting
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff371d1] to-cyan-500">
              {" "}
              Exceptional{" "}
            </span>
            mobile{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff371d1] to-orange-500">
              {" "}
              Exceptional{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromRight(0.8)}
          className="text-2xl text-gray-400  relative max-w-[600px]"
        >
          I&apos;m a React Native Expo Developer with extensive experience in
          building high-quality mobile applications. Check out my projects and
          skills.
          <motion.button
            onClick={() => setShowMore(!showMore)}
            className=" text-white rounded-lg  text-lg transition-all duration-500"
          >
            {showMore ? "Show Less" : "Show More"}
          </motion.button>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={showMore ? { opacity: 1 } : { opacity: 0 }}
          variants={slideInFromRight(0.8)}
          transition={{ duration: 0.5 }}
          className="text-gray-400  text-lg"
        >
          My expertise in React Native and Expo allows me to create seamless,
          performant, and visually appealing mobile applications. I am
          proficient in JavaScript, TypeScript, and have a strong understanding
          of mobile app architecture and design principles. I am passionate
          about delivering high-quality code and continuously improving my
          skills to stay up-to-date with the latest industry trends.
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
  );
};

export default HeroContent;
