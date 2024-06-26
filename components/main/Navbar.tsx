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
import { Download, DownloadCloud, LucideDownloadCloud } from "lucide-react";

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
      } transition-opacity duration-300 ease-in-out  shadow-lg bg-[#03001417]/50 backdrop-blur-md z-50 px-5`}
    >
      <div className=" mx-auto flex items-center  sm:justify-between  py-2">
        <Link href="#about-me" className="md:w-1/3 w-1/2 " passHref>
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

        <div className="hidden w-1/3 md:flex items-center  justify-center gap-4">
          {links.map((link, index) => (
            <Link key={index} href={link.href} passHref>
              <span className="text-white hover:text-gray-300  transition-colors cursor-pointer">
                {link.title}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex md:w-1/3 w-1/2   justify-end gap-3   items-center">
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
          <a
            href="/MOTI_YOSEF_CV.pdf"
            download
            className="text-white hover:text-gray-300 transition-colors cursor-pointer flex items-center"
          >
            <Download className="w-5 h-5 mr-1" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
