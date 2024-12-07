import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
// import project6 from "../assets/project6.png"
import { AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "Confidentz",
      description: "Dental health companion powered by artificial intelligence.",
      links: {
        site: "https://www.figma.com/proto/IaZTRmFHfBTdRleh1XONTE/ConfiDentz?node-id=0-1&t=2sXx7vZ8gKxefV47-1",
        github: "https://github.com/Confidentz-C23-PS334",
      },
    },
    {
      img: project2,
      title: "Sistem Pemerintahan Berbasis Elektronik (SPBE)",
      description: "A web-based application for electronic governance made with Laravel.",
      links: {
        site: "",
        github: "",
      },
    },
    {
      img: project3,
      title: "Banana Ripeness Detection",
      description: "A Python based app to detect banana ripeness utilizing RoboFlow.",
      links: {
        site: "",
        github: "https://github.com/Archiruz/computer-vision-demo",
      },
    },
    {
      img: project4,
      title: "Simple Train Ticketing System",
      description: "Simple Java based GUI app designed for demonstrating the use of OOP concepts.",
      links: {
        site: "",
        github: "https://github.com/Archiruz/java-oop-demo",
      },
    },
    // {
    //   img: project6,
    //   title: "Project #5",
    //   description: "A data visualization project using D3.js and other libraries.",
    //   links: {
    //     site: "#",
    //     github: "#",
    //   },
    // },
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal key={index}>
            <div 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        {project.links.site && (
                          <a href={project.links.site} target="_blank" rel="noopener noreferrer"
                              className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                          transition duration-300'>
                              View Site
                          </a>
                        )}
                        {project.links.github && (
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                              className='flex items-center px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                          transition duration-300'>
                              <AiOutlineGithub/>
                          </a>
                        )}
                    </div>
                </div>
            </div>
            </Reveal>
        ))}
    </div>
  )
}

export default Portfolio