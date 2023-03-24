import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub } from "react-icons/fa";
import { ProjectCard, Grid } from "./ui";
import teamLink from "../assets/teamlink.png"
import taskGame from "../assets/taskGame.png"
import pingPong from "../assets/pingPong.png"
import magicMaid from "../assets/magicmaid-project.png"
import reactPortfolio from "../assets/portfolio-desktop.png"



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
      demoLink: "/",
      codeLink: "https://github.com/anthonyperry3/team-link-app",
    },
    {
      title: "Task Game",
      image: taskGame,
      description:
        "Task Game is a unique todo app that adds a fun twist to completing tasks. With this app, you earn points for each task you complete, which can be used to climb the leaderboard and compete with friends. Featuring a sleek user interface and built with React Native, Tailwind CSS, and Firebase, Task Game is the perfect way to gamify your productivity. ",
      technologies: ["React Native", "Tailwind CSS", "Firebase", "React Icons"],
      demoLink: "/",
      codeLink: "https://github.com/ABarranco95/game-todo-app",
    },
    {
      title: "Ping Pong",
      image: pingPong,
      description:
        "A classic game of ping pong built with vanilla javascript! Can you beat our AI champion?",
      technologies: ["Javascript", "DOM", "HTML", "CSS"],
      demoLink: "/",
      codeLink: "https://github.com/ABarranco95/Ping-Pong",
    },
    {
      title: "Magic Maid",
      image: magicMaid,
      description:
        "Magic Maid is a responsive and user-friendly house cleaning website built with React. Customers can easily schedule cleaning services and manage appointments. This project allowed me to improve my React skills and create an effective website for a business.",
      technologies: ["Javascript", "DOM", "HTML", "CSS"],
      demoLink: "/",
      codeLink: "https://github.com/ABarranco95/Ping-Pong",
    },{
      title: "React Portfolio",
      image: reactPortfolio,
      description:
        "The website showcases my skills, experience, and projects in a modern and visually appealing way. The website is fully responsive and optimized for various devices. This project allowed me to improve my skills in React and explore the capabilities of Tailwind CSS.",
      technologies: ["React", "Tailwind"],
      demoLink: "/",
      codeLink: "https://github.com/ABarranco95/Ping-Pong",
    },
  ];

  return (
    <section id="projects" name="work" className="bg-[#4a3030] text-white">
      <div className="container mx-auto py-20">
        <h2 className="text-3xl font-bold text-center pb-10">Projects</h2>
        <Grid>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              image={project.image}
              description={project.description}
              technologies={project.technologies}
              demoLink={project.demoLink}
              codeLink={project.codeLink}
            />
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Work;