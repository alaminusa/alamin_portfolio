import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCode } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      id="projects"
      className="AboutBody grid grid-cols-2 gap-8 py-12 px-20 h-screen w-full
relative bg-cover bg-no-repeat bg-fixed text-black"
    >
      <div className=" bg-black/50 relative rounded text-xl text-white cursor-pointer">
        <div
          className="card"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card-image absolute top-0 left-0 w-full h-full" />
          {isHovered && (
            <div className="card-overlay absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center gap-5 opacity-0">
              <div className="font-bold">
                A Dynamic React E-Commerce website
              </div>
              <div className="links flex items-center justify-center gap-5">
                <a
                  className="card-button p-3 rounded-lg bg-green-600 font-semibold flex gap-2 items-center hover:bg-amber-400 hover:text-black"
                  href="https://orebi-ecommerence.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faEye} />
                  Live Demo
                </a>
                <a
                  className="card-button p-3 rounded-lg bg-green-600 font-semibold flex gap-2 items-center  hover:bg-amber-400 hover:text-black"
                  href="https://github.com/alaminusa/orebi_ecommerence"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faCode} />
                  View Source
                </a>
              </div>
              <div className="text-xs flex flex-col gap-1 items-center">
                <span> Written in : JavaScript XML, Tailwind css</span>
                <span>Tools: React router, RestAPI, Redux</span>
              </div>
            </div>
          )}
        </div>
      </div>
{/* 1st project */}
{/* 2nd project */}
      <div className=" bg-black/50 relative rounded text-xl text-white cursor-pointer">
        <div
          className="card"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card-image_two absolute top-0 left-0 w-full h-full" />
          {isHovered && (
            <div className="card-overlay absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center gap-5 opacity-0">
              <div className="font-bold">
                A dynamic React Travel Website
              </div>
              <div className="links flex items-center justify-center gap-5">
                <a
                  className="card-button p-3 rounded-lg bg-green-600 font-semibold flex gap-2 items-center hover:bg-amber-400 hover:text-black"
                  href="https://emprise-react.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faEye} />
                  Live Demo
                </a>
                <a
                  className="card-button p-3 rounded-lg bg-green-600 font-semibold flex gap-2 items-center  hover:bg-amber-400 hover:text-black"
                  href="https://github.com/alaminusa/emprise_react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faCode} />
                  View Source
                </a>
              </div>
              <div className="text-xs flex flex-col gap-1 items-center">
                <span> Written in : JavaScript XML, Tailwind css</span>
                <span>Tools: React router, RestAPI, Redux</span>
              </div>
            </div>
          )}
        </div>
      </div>
{/* 2nd project */}
{/* 3rd project */}
      <div className=" bg-black/50 relative rounded text-xl text-white cursor-pointer">
        <div
          className="card"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card-image_three absolute top-0 left-0 w-full h-full" />
          {isHovered && (
            <div className="card-overlay absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center gap-5 opacity-0">
              <div className="font-bold">
                A Photographic website with HTML & CSS
              </div>
              <div className="links flex items-center justify-center gap-5">
                <a
                  className="card-button p-3 rounded-lg bg-green-600 font-semibold flex gap-2 items-center hover:bg-amber-400 hover:text-black"
                  href="https://alaminusa.github.io/cssprojectkhubb/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faEye} />
                  Live Demo
                </a>
                <a
                  className="card-button p-3 rounded-lg bg-green-600 font-semibold flex gap-2 items-center  hover:bg-amber-400 hover:text-black"
                  href="https://github.com/alaminusa/cssprojectkhubb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faCode} />
                  View Source
                </a>
              </div>
              <div className="text-xs flex flex-col gap-1 items-center">
                <span> Written in : HTML, CSS</span>
                <span></span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className=" bg-black/50 relative rounded text-xl text-white cursor-pointer">
        <div
          className="card"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card-image_four absolute top-0 left-0 w-full h-full" />
          {isHovered && (
            <div className="card-overlay absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center gap-5 opacity-0">
              <div className="font-bold">
                A dynamic React website with Tailwind css
              </div>
              <div className="links flex items-center justify-center gap-5">
                <a
                  className="card-button p-3 rounded-lg bg-green-600 font-semibold flex gap-2 items-center hover:bg-amber-400 hover:text-black"
                  href="https://orebi-ecommerence.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faEye} />
                  Live Demo
                </a>
                <a
                  className="card-button p-3 rounded-lg bg-green-600 font-semibold flex gap-2 items-center  hover:bg-amber-400 hover:text-black"
                  href="https://github.com/alaminusa/orebi_ecommerence"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faCode} />
                  View Source
                </a>
              </div>
              <div className="text-xs flex flex-col gap-1 items-center">
                <span> Written in : JavaScript XML, Tailwind css</span>
                <span></span>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <div className="bg-black/50 rounded flex items-center justify-center font-semibold text-xl text-white hover:bg-black/80 hover:text-amber-400 cursor-pointer">
        Coming Soon
      </div> */}
      {/* <div className="bg-black/50 rounded flex items-center justify-center font-semibold text-xl text-white hover:bg-black/80 hover:text-amber-400 cursor-pointer">
        Coming Soon
      </div> */}
      {/* <div className="bg-black/50 rounded flex items-center justify-center font-semibold text-xl text-white hover:bg-black/80 hover:text-amber-400 cursor-pointer">
        Coming Soon
      </div> */}
    </div>
  );
};

export default Projects;
