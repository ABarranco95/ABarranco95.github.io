import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#4a3030] text-white'>
        <div className='flex flex-col justify-center items-center w-full h-full px-4'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl inline font-bold border-b-4 border-[#ff5424]'>About</p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold '>I'm Angel, nice to meet you! Take a look around.</p>
                </div>
                <div>
                    <p>I am very passionate about building software that helps improves the lives of those around me and allows users to connect in many different ways.  </p>
                    <p>I am also a very big fan of competitive e-sports gaming and football (soccer) fan.</p>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default About