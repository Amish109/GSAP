import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import linkedin_img from '../../../../assets/img/linkedin_img.png'
import ScrollVideo from '../scroll-vdo/ScrollVideo';

const Content = () => {
  return (
    // <div className='relative bg-gray-900 min-h-screen w-full overflow-hidden'>
    <div className='relative bg-primary-bg min-h-screen w-full overflow-hidden'>

      <div className='relative z-10 text-white flex flex-col md:flex-row  items-center w-full min-h-screen  py-12 md:py-0   justify-between'>
        
        {/* Left Text Section */}
        <div className='flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6 max-w-xl '>
          
          <p className='text-base md:text-lg font-mono text-cyan-400'>
            Hi, my name is
          </p>

          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight'>
            Amish Tiwari
          </h1>

          <h2 className='text-2xl sm:text-3xl lg:text-5xl font-semibold text-gray-400'>
            I build things for the web.
          </h2>

          <p className='text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed pt-4 max-w-lg'>
            I'm a <strong>Full-stack Developer</strong> specializing in building robust, high-performance web applications. I handle both front-end systems using <strong>React, React Native, and Next.js</strong>, and scalable back-end services with <strong>Node.js (Express, NestJS)</strong>.
          </p>

          <a 
            href="#projects" 
            className='mt-6 md:mt-8 px-6 md:px-8 py-2 md:py-3 text-base md:text-xl font-semibold border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition duration-300 ease-in-out shadow-lg'
          >
            View My Work
          </a>

          {/* Desktop Social Icons */}
          <div className='hidden md:flex space-x-6 pt-8'>
            <a href="[Your GitHub URL]" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-cyan-400 transition duration-300'>
              <FaGithub size={30} />
            </a>
            <a href="[Your LinkedIn URL]" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-cyan-400 transition duration-300'>
              <FaLinkedin size={30} />
            </a>
            <a href="mailto:[Your Email Address]" className='text-gray-400 hover:text-cyan-400 transition duration-300'>
              <FaEnvelope size={30} />
            </a>
          </div>

        </div>

        {/* Right Image Section */}
        <div className='hidden lg:flex w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 relative mt-8 md:mt-0'>
          <div 
            className='absolute inset-0 border-4 border-cyan-400 transform rotate-6 scale-95 opacity-50 bg-center bg-cover rounded-xl' 
            style={{ backgroundImage: `url('${linkedin_img}')` }}
          />
          <div className='w-full h-full bg-gray-700 flex items-center justify-center text-4xl font-bold text-gray-900 p-4 border-4 border-cyan-400 rounded-xl'>
            {/* Optional overlay content */}
          </div>
        </div>

      </div>

      {/* Mobile Social Icons */}
      <div className='md:hidden fixed bottom-0 left-0 right-0 p-4 bg-gray-900 border-t border-gray-800 flex justify-center space-x-8'>
        <a href="[Your GitHub URL]" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-cyan-400 transition duration-300'>
          <FaGithub size={24} />
        </a>
        <a href="[Your LinkedIn URL]" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-cyan-400 transition duration-300'>
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:[Your Email Address]" className='text-gray-400 hover:text-cyan-400 transition duration-300'>
          <FaEnvelope size={24} />
        </a>
      </div>
      <ScrollVideo/>

    </div>
  )
}

export default Content
