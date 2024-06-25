"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Dialog } from "@headlessui/react";
import Image from "next/image";

const HeroContent: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const viewResumeDiv = document.getElementById("view-resume-div");
      if (viewResumeDiv) {
        const rect = viewResumeDiv.getBoundingClientRect();
        setIsSticky(rect.top >= window.innerHeight || rect.bottom <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex md:flex-row group relative items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="py-[8px] px-[7px] border border-[#7042f88b] rounded-full flex w-fit opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="text-white text-[13px]">
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
            Apps With
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff371d1] to-orange-500">
              {" "}
              Expo{" "}
            </span>
            And
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff371d1] to-orange-500">
              {" "}
              React Native
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromRight(0.8)}
          className="text-2xl text-gray-400 relative max-w-[600px]"
        >
          I&apos;m a React Native Expo Developer with extensive experience in
          building high-quality mobile applications. Check out my projects and
          skills.
          <motion.button
            onClick={() => setShowMore(!showMore)}
            className="text-white rounded-2xl text-lg transition-all duration-500"
          >
            {showMore ? "Show Less" : "Show More"}
          </motion.button>
        </motion.p>
        {showMore && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-gray-400 text-2xl"
          >
            My expertise in React Native and Expo allows me to create seamless,
            performant, and visually appealing mobile applications. I am
            proficient in JavaScript, TypeScript, and have a strong
            understanding of mobile app architecture and design principles. I am
            passionate about delivering high-quality code and continuously
            improving my skills to stay up-to-date with the latest industry
            trends.
          </motion.p>
        )}
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        id="view-resume-div"
        className="w-full h-full flex flex-col justify-center items-center"
      >
        <a
          href="/MOTI_YOSEF_CV.pdf"
          download
          className=" w-48 bg-[#1f1f1f] hover:bg-[#1f1f1f] hover:bg-opacity-80 bg-opacity-20 backdrop-blur-md  text-white rounded-2xl text-lg transition-all duration-500 px-4 py-2 mt-4"
        >
          Download Resume
        </a>
        <button
          onClick={() => setIsOpen(true)}
          className=" w-48 bg-[#1f1f1f] bg-opacity-20 backdrop-blur-md text-white hover:bg-[#1f1f1f] hover:bg-opacity-80 rounded-2xl text-lg transition-all duration-500 px-4 py-2 mt-4"
        >
          View Resume
        </button>
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 backdrop-blur-xl z-50 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <div className="inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl bg-[#1f1f1f] bg-opacity-70 rounded-2xl">
            <Dialog.Title
              as="h3"
              className="text-lg text-white font-medium leading-6"
            >
              Resume
            </Dialog.Title>
            <div className="mt-4">
              <iframe src="/MOTI_YOSEF_CV.pdf" width="100%" height="800px" />
            </div>

            <div className="mt-4">
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </motion.div>
  );
};

export default HeroContent;
