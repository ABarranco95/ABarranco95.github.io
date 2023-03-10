import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#4a3030] flex justify-center items-center p-4'>
      <form
        method='POST'
        action='https://getform.io/f/bf1439ae-ebad-41dc-94a7-3f8c84afc58e'
        className='flex flex-col max-w-[600px] w-full bg-white rounded-lg p-8'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#ff5424] text-gray-800'>
            Contact
          </p>
          <p className='text-gray-600 py-4'>
            Submit the form below or send me an email -
            abarranco650@gmail.com
          </p>
        </div>
        <input
          type='text'
          placeholder='Name'
          name='name'
          className='bg-gray-100 p-2 rounded-lg'
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          className='my-4 p-2 bg-gray-100 rounded-lg'
        />
        <textarea
          name='message'
          rows='10'
          className='bg-gray-100 p-2 rounded-lg'
          placeholder='Message'
        ></textarea>
        <button className='bg-[#ff5424] text-white border-2 hover:bg-white hover:text-[#ff5424] px-4 py-3 my-8 mx-auto flex items-center rounded-lg'>
          Let's collaborate!
        </button>
      </form>
    </div>
  );
};

export default Contact;
