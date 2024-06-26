"use client";

import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
  features: string[];
}

const ProjectCard: React.FC<Props> = ({
  src,
  title,
  description,
  link,
  features,
}) => {
  const handleButtonClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      className="relative rounded-lg shadow-lg border border-[#2A0E61] h-[500px] lg:h-[600px] overflow-hidden"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute bottom-0 h-72 w-full flex flex-col justify-between backdrop-blur-2xl bg-black bg-opacity-50 p-4">
        <div className="flex-grow">
          <h1 className="text-2xl font-semibold text-gray-200">{title}</h1>
          <div className="mt-4 text-gray-300">{description}</div>
          <div className="flex flex-wrap mt-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-blue-600 text-xs flex m-1 px-3 py-1 items-center justify-center bg-opacity-80 hover:bg-opacity-40 rounded-xl text-white"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center w-full justify-center">
          <button
            onClick={handleButtonClick}
            className="px-6 py-3 backdrop-blur-2xl  hover:bg-white hover:text-black bg-black w-fit  rounded-full font-bold     transition-all duration-300 text-white cursor-pointer  ease-in-out transform hover:scale-105"
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
