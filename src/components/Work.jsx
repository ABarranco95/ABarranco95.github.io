import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaEye } from "react-icons/fa";
import teamLink from "../assets/teamlink.png"
import taskGame from "../assets/taskGame.png"
import hawsa from "../assets/hawsa.png"
import pingPong from "../assets/pingPong.png"

const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects = [
    {
      title: "Team Link",
      image: teamLink,
      description:
        "Team Link is an app designed for gamers and e-sports enthusiasts to connect and form teams. Similar to Tinder, users can swipe through potential matches and connect with others who are interested in playing the same games. With features like messaging and team creation, Team Link makes it easy for gamers to find and connect with like-minded players. This React Native app is built using Tailwind CSS, Firebase, and React Icons.",
      technologies: ["React Native", "Tailwind CSS", "Firebase", "React Icons"],
      demoLink: "https://example.com",
      codeLink: "https://github.com/anthonyperry3/team-link-app",
    },
    {
      title: "Task Game",
      image: taskGame,
      description:
        "Task Game is a unique todo app that adds a fun twist to completing tasks. With this app, you earn points for each task you complete, which can be used to climb the leaderboard and compete with friends. Featuring a sleek user interface and built with React Native, Tailwind CSS, and Firebase, Task Game is the perfect way to gamify your productivity. ",
      technologies: ["React Native", "Tailwind CSS", "Firebase", "React Icons"],
      demoLink: "https://example.com",
      codeLink: "https://github.com/ABarranco95/game-todo-app",
    },
    {
      title: "Ping Pong",
      image: pingPong,
      description:
        "A classic game of ping pong built with vanilla javascript! Can you beat our AI champion?",
      technologies: ["Javascript", "DOM", "HTML", "CSS"],
      demoLink: "https://example.com",
      codeLink: "https://github.com/ABarranco95/Ping-Pong",
    },
  ];

  return (
    <div className="bg-[#4a3030] text-white py-20" id="projects" name='work'>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center pb-10">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg relative"
              data-aos="fade-up"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#ff5424] text-white rounded-full py-1 px-2 text-sm mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex justify-between">
                  {/* <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#ff5424] text-white rounded-lg py-2 px-4 text-sm font-bold flex items-center hover:bg-[#ff904f] transition duration-300 ease-in-out"
                  >
                    <FaEye className="mr-2" />
                    View Demo
                  </a> */}
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-600 text-white rounded-lg py-2 px-4 text-sm font-bold flex items-center hover:bg-gray-500 transition duration-300 ease-in-out"
                  >
                    <FaGithub className="mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  }  

  export default Work;