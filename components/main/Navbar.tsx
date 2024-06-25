"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface LinkItem {
  title: string;
  href: string;
}

const links: LinkItem[] = [
  { title: "About me", href: "#about-me" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
];

import { Socials } from "@/constants";

const CustomNavbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY || currentScrollY <= 10);
      setLastScrollY(currentScrollY);
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full ${
        visible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300 ease-in-out shadow-lg bg-[#03001417]/50 backdrop-blur-md z-50 px-5`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between py-2">
        <Link href="#about-me" passHref>
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image
              src="/profile.jpg"
              alt="Profile logo"
              width={40}
              height={40}
              className="rounded-full hover:rotate-[360deg] transition-transform duration-500 ease-in-out"
            />
            <span className="font-bold text-gray-300 hidden lg:block hover:scale-110 transition-transform">
              Moti Yosef
            </span>
          </div>
        </Link>

        <div className="hidden sm:flex space-x-4">
          {links.map((link, index) => (
            <Link key={index} href={link.href} passHref>
              <span className="text-white hover:text-gray-300 transition-colors cursor-pointer">
                {link.title}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex space-x-3 items-center">
          <a
            href="/MOTI_YOSEF_CV.pdf"
            download
            className="text-white hover:text-gray-300 transition-colors cursor-pointer flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm7 7a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1zm-2.293-.293a1 1 0 011.414 0L10 10.586V5a1 1 0 112 0v5.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Resume
          </a>

          {Socials.map((social, index) => (
            <Link key={index} href={social.link} passHref>
              <div className="block cursor-pointer">
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="hover:scale-110 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
