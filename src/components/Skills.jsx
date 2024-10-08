import React from "react"
import{
  SiTensorflow,
  SiMicrosoftexcel,
  SiFastapi,
  SiExpress,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiLaravel,
  SiGithub,
  SiJupyter,

} from "react-icons/si"

import Reveal from "./Reveal"
import { Link } from "react-scroll"

const skills = [
    {
      category: 'Backend',
      technologies: [
        { name: 'JavaScript', icon: <SiJavascript className='text-yellow-500' /> },
        { name: 'Node Js', icon: <SiNodedotjs className='text-green-500' /> },
        { name: 'Express Js', icon: <SiExpress className='text-white' /> },
        { name: 'Python', icon: <SiPython className='text-blue-500' /> },
        { name: 'Fast API', icon: <SiFastapi className='text-teal-600' />},
        { name: 'MySQL', icon: <SiMysql className='text-blue-600' />},
      ],
    },
    {
      category: 'Fullstack',
      technologies: [
        { name: 'Laravel', icon: <SiLaravel className='text-red-500' /> },
        { name: 'GitHub', icon: <SiGithub className='text-gray-600' /> },
      ],
    },
    {
      category: 'Data science',
      technologies: [
        { name: 'Tensorflow', icon: <SiTensorflow className='text-orange-600' /> },
        { name: 'Jupyter', icon: <SiJupyter className='text-red-500' /> },
        { name: 'Excel', icon: <SiMicrosoftexcel className='text-green-500' /> },
      ]
    }
  ]

const Skills = () => {
  return (
    <div className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
        <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
            I worked on various personal and collaborative projects. Check them <Link to="portfolio" className="underline cursor-pointer" smooth={true} offset={50} duration={500}>
            here
            </Link>
            .
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                        ">
            {skills.map((skill, index) => (
                <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg 
                                w-full md:w-1/2">
                    <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                    <div className="grid grid-cols-1 gap-4">
                        {skill.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <span className="text-2xl">{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        </Reveal>
    </div>
  )
}

export default Skills
