"use client";

import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<Props> = ({ src, title, description, link }) => {
  const handleButtonClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      onClick={handleButtonClick}
      className="flex flex-col sm:w-full rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer h-[500px] md:h-[600px]"
    >
      <img
        src={src}
        alt={title}
        className="w-full h-[200px] md:h-[300px] object-cover"
      />
      <div className="flex flex-col justify-between flex-grow p-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-4 text-gray-400">{description}</p>
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
  );
};

export default ProjectCard;
