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
      className="relative rounded-lg shadow-lg border border-[#2A0E61]  h-[500px] md:h-[600px] overflow-hidden"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute bottom-0 p-3 bg-black bg-opacity-70">
        <div className="relative z-10 flex flex-col justify-between flex-grow p-4">
          <div>
            <h1 className="text-2xl font-semibold text-white">{title}</h1>
            <div className="mt-4 text-gray-100">{description}</div>
            <div className="flex flex-wrap space-x-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-blue-600 flex m-1 px-3 py-1  items-center justify-center bg-opacity-80 hover:bg-opacity-40 rounded-xl text-white"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleButtonClick}
              className="px-6 py-3 bg-blue-600 text-white cursor-pointer rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
