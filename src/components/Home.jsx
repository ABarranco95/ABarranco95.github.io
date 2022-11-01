import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-gray-400'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Angel Barranco</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a full-stack developer</h2>
            <p className='text-[#ccd6f6] py-4 max-w-[700px]'>I'm a full-stack software developer specializing in building responsive fullstack web and mobile applications. </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8892b0] hover:border-[#8892b0]'>View My Work 
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home