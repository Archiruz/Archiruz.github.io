import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
      {
        company: 'Dinas Komunikasi dan Informatika Kota Malang',
        period: 'Jun 2023 - Aug 2023',
        description: `Developed web-based applications for the internal use of the institution.`,
      },
      {
        company: 'Bangkit Academy',
        period: 'Feb 2023 - Jul 2023',
        description: 'Developed a machine learning model for a final capstone project.',
      },
      // {
      //   company: 'Fourth Company',
      //   period: '2020 - Present',
      //   description: 'Description of your experience in this company.',
      // },
]



const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
        <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
        >
            {experiences.map((experience, index) => (
                <Reveal>
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3}}
                    transition={{ duration: 1}}
                    className=' border border-red-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-rose-700/10'
                >
                    <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                    <p className='text-gray-300'>{experience.period}</p>
                    <p className='text-gray-400 mt-4'>{experience.description}</p>


                </motion.div>
                </Reveal>
            ))}

        </motion.div>
        

    </div>
  )
}

export default Experience