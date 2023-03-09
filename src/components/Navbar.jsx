import React, {useState} from 'react'
import {FaBars, FaGithub, FaLinkedin, FaTimes} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {  BsFillPersonLinesFill } from "react-icons/bs";
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#4a3030] text-gray-300'>
        <div>
            <h1 style={{width : '50px'}}>AB</h1>
        </div>
        
        <ul className='hidden md:flex'>
                <li>
                    <Link to="home" spy={true} smooth={true}  duration={500} >
                    Home
                    </Link>
                </li>
                <li>
                    <Link to="about" spy={true} smooth={true}  duration={500} >
                    About
                    </Link>
                </li>
                <li>
                    <Link to="skills" spy={true} smooth={true}  duration={500} >
                    Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" spy={true} smooth={true}  duration={500} >
                    Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" spy={true} smooth={true}  duration={500} >
                    Contact
                    </Link>
                </li>
        </ul>
       
        <div className='md:hidden z-10' onClick={handleClick}>
         {!nav ? <FaBars/> : <FaTimes />}
        </div>

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#4a3030] flex flex-col justify-center items-center z-1'}>
                <li className='py-4 text-4xl'>
                    <Link onClick={handleClick} to="home" spy={true} smooth={true}  duration={500} >
                    Home
                    </Link>
                </li>
                <li className='py-4 text-4xl'>
                    <Link onClick={handleClick} to="about" spy={true} smooth={true}  duration={500} >
                    About
                    </Link>
                </li>
                <li className='py-4 text-4xl'>
                    <Link onClick={handleClick} to="skills" spy={true} smooth={true}  duration={500} >
                    Skills
                    </Link>
                </li>
                <li className='py-4 text-4xl'>
                    <Link onClick={handleClick} to="work" spy={true} smooth={true}  duration={500} >
                    Work
                    </Link>
                </li>
                <li className='py-4 text-4xl'>
                    <Link onClick={handleClick} to="contact" spy={true} smooth={true}  duration={500} >
                    Contact
                    </Link>
                </li>
                
            </ul>

        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077B5]'>
                    <a href="https://www.linkedin.com/in/angelbarranco95/" className='flex justify-between items-center w-full text-gray-300'>Linkedin <FaLinkedin size={32}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a href="https://github.com/ABarranco95" className='flex justify-between items-center w-full text-gray-300'>Github<FaGithub size={32}/></a>
                </li>
                {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a href="#" className='flex justify-between items-center w-full text-gray-300'>Linkedin <HiOutlineMail size={32}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a href="#" className='flex justify-between items-center w-full text-gray-300'>Linkedin <BsFillPersonLinesFill size={32}/></a>
                </li> */}
            </ul>
        </div>
    </div>
    
  )
}

export default Navbar