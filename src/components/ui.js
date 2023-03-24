import React from "react";
import { FaGithub, FaEye } from "react-icons/fa";

export const Grid = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {children}
    </div>
  );
};

export const ProjectCard = ({
    title,
    image,
    description,
    technologies,
    demoLink,
    codeLink,
  }) => {
    return (
      <div
        className="bg-white rounded-lg overflow-hidden shadow-lg relative"
        data-aos="fade-up"
      >
        <img src={image} alt={title} className="w-full h-40 object-cover object-center" />
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <div className="flex flex-wrap">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="bg-[#ff5424] text-white rounded-full py-1 px-2 text-sm mr-2 mb-2"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-4 flex justify-between">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ff5424] text-white rounded-lg py-2 px-4 text-sm font-bold flex items-center hover:bg-[#ff904f] transition duration-300 ease-in-out"
              >
                <FaEye className="mr-2" />
                View Demo
              </a>
            )}
            {codeLink && (
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 text-white rounded-lg py-2 px-4 text-sm font-bold flex items-center hover:bg-gray-500 transition duration-300 ease-in-out"
              >
                <FaGithub className="mr-2" />
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };