import React from 'react'
import { FaGithubSquare, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>Alvian R.S</h3>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href="https://github.com/Archiruz" target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
                <a href="https://www.instagram.com/alvian_rahmadani_11/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
        </div>
        <p className='text-gray-400'>@{currentYear} <a href="https://github.com/c0d1nn">Codin Zero</a> modified by Alvian</p>
    </div>
  )
}

export default Footer