'use client'
import { Socials } from '@/constants'
import Image from 'next/image'

const Navbar = () => {
  const links = [
    { title: 'About me', href: '#about-me' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
  ]
  return (
    <div className="w-full  fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5">
      <div className="w-full max-w-[1200px] h-full md:flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="h-auto w-auto   flex-row items-center">
          <Image
            src="/profile.jpg"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hidden  object-cover rounded-full hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden hover:scale-110 shadow-white  lg:block text-gray-300">
            Moti Yosef
          </span>
        </a>

        <div className=" h-full flex  flex-row items-center justify-between ">
          <div className="flex md:w-[300px] w-full h-auto py-[10px] items-center justify-between rounded-full text-gray-100">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="cursor-pointer hover:pb-2 hover:scale-95 duration-300 ease-in"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center p-2 justify-between flex-row gap-5">
          {Socials.map((social) => (
            <a key={social.name} className=" cursor-pointer" href={social.link}>
              <Image
                className="hover:scale-95 "
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
