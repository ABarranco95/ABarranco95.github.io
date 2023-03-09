import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#4a3030] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/bf1439ae-ebad-41dc-94a7-3f8c84afc58e" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ff5424] text-white'>Contact</p>
                <p className='text-white py-4'>Submit the form below or send me an email - abarranco650@gmail.com</p>
            </div>
            <input type="text" placeholder='Name' name='name' className='bg-[#efefeflll] p-2'/>
            <input type="email" placeholder='Email' name='email' className='my-4 p-2 bg-[#efefef]'/>
            <textarea name="message" rows="10" className='bg-[#efefef] p-2' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#ff5424] hover:border-[#ff5424] px-4 py-3 my-8 mx-auto flex items-center'>Let's collaborate!</button>
        </form>
    </div>
  )
}

export default Contact