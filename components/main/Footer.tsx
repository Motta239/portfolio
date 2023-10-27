import React from 'react'
import { FaYoutube } from 'react-icons/fa'
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from 'react-icons/rx'

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full flex flex-row items-center justify-around flex-wrap">
          {[
            {
              title: 'Community',
              links: [
                { icon: <FaYoutube />, text: 'Youtube' },
                { icon: <RxGithubLogo />, text: 'Github' },
                { icon: <RxDiscordLogo />, text: 'Discord' },
              ],
            },
            {
              title: 'Social Media',
              links: [
                { icon: <FaYoutube />, text: 'Instagram' },
                { icon: <RxGithubLogo />, text: 'Twitter' },
                { icon: <RxDiscordLogo />, text: 'Linkedin' },
              ],
            },
            {
              title: 'About',
              links: [
                { text: 'Become Sponsor' },
                { text: 'Learning about me' },
                { text: 'mifwebchain@gmail.com' },
              ],
            },
          ].map((section, index) => (
            <div
              key={index}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            >
              <div className="font-bold text-[16px]">{section.title}</div>
              {section.links.map((link, i) => (
                <p
                  key={i}
                  className="flex flex-row items-center my-[15px] cursor-pointer"
                >
                  {link.icon}
                  <span className="text-[15px] ml-[6px]">{link.text}</span>
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
