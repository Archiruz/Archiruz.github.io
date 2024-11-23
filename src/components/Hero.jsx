import React from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { 
    SiJavascript, 
    SiJupyter, 
    SiLaravel, 
    SiNodedotjs, 
    SiPhp, 
    SiPython, 
    SiTensorflow,
} from "react-icons/si";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
        <div className="grid md:grid-cols-2 place-items-center gap-8">
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >
                <TypeAnimation
                    sequence={[
                        "TensorFlow Developer",
                        1000,
                        "Backend Developer",
                        1000,
                        "Data Analyst",
                        1000,
                        "Data Scientist",
                        1000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
                />

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
                >
                    HEY, I AM <br/>
                    <span className="text-rose-600">ALVIAN RAHMADANI</span>
                </motion.p>

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                >
                    I am a fresh-graduate with a bachelor degree in Informatics Engineering from Universitas Negeri Malang.
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-row items-center gap-6 my-4 md:mb-0"
                >
                    <motion.a whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                                     border-red-700 rounded-xl"
                        href="https://drive.google.com/file/d/1KjSqs3G6qmEYNuMVMV2Yx0gEtMXDZHR4/view?usp=sharing"
                        target="_blank" rel="noopener noreferrer" 
                    >
                        Download CV
                    </motion.a>

                    <div className="flex gap-6 flex-row text-4xl md:text-6xl text-rose-400 z-20">
                        <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/Archiruz"
                        target="_blank" rel="noopener noreferrer">
                            <AiOutlineGithub/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/alvian-rahmadani-saputra/"
                        target="_blank" rel="noopener noreferrer">
                            <AiOutlineLinkedin/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/alvian_rahmadani_11/"
                        target="_blank" rel="noopener noreferrer">
                            <AiOutlineInstagram/>
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>


            <motion.img 
                src={profilepic}
                className="w-[300px] md:w-[450px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />
        </div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-row text-6xl px-12 md:px-0 w-full justify-center items-center py-24"
        >
            <p className="text-gray-200 mr-6">My Tech Stack</p>
            <SiPython className="text-blue-500 mx-2" />
            <SiJavascript className="text-yellow-500 mx-2" />
            <SiPhp className="text-purple-500 mx-2" />
            <SiTensorflow className="text-orange-600 mx-2" />
            <SiLaravel className="text-red-500 mx-2" />
            <SiJupyter className="text-red-500 mx-2" />
            <SiNodedotjs className="text-green-500 mx-2" />
        </motion.div>

        <div className="absolute inset-0 hidden md:block">
            <ShinyEffect left={0} top={0} size={1400} />
        </div>
        
    </div>
  )
}

export default Hero