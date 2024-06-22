"use client";
import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

interface IconProps {
  icon?: React.ReactNode;
  text: string;
}

const Icon: React.FC<IconProps> = ({ icon, text }) => (
  <p className="flex flex-row items-center my-[15px] cursor-pointer">
    {icon}
    <span className="text-[15px] ml-[6px]">{text}</span>
  </p>
);

const Footer: React.FC = () => {
  const repositoriesLinks = [{ icon: <RxGithubLogo />, text: "Github" }];
  const socialLinks = [{ icon: <RxLinkedinLogo />, text: "Linkedin" }];
  const aboutLinks = [{ text: "manea5505@gmail.com" }];

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            {socialLinks.map((link, index) => (
              <div
                key={index}
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/moti-yosef/",
                    "_blank"
                  );
                }}
              >
                <Icon key={index} icon={link.icon} text={link.text} />
              </div>
            ))}
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Repositories</div>
            {repositoriesLinks.map((link, index) => (
              <div
                key={index}
                onClick={() => {
                  window.open("https://github.com/motta239", "_blank");
                }}
              >
                <Icon key={index} icon={link.icon} text={link.text} />
              </div>
            ))}
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            {aboutLinks.map((link, index) => (
              <div
                key={index}
                onClick={() => {
                  window.open("mailto:manea5505@gmail.com", "_blank");
                }}
              >
                <Icon key={index} text={link.text} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
