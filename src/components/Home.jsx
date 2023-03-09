import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#4a3030]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-white'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'>Angel Barranco</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#ff5424]'>I'm a full-stack developer</h2>
            <p className='text-white py-4 max-w-[700px]'>I'm a full-stack software developer specializing in building responsive fullstack web and mobile applications. </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ff5424] hover:border-[#ff5424]'>View My Work 
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