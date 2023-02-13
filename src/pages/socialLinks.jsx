import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
 import {HiOutlineMail} from "react-icons/hi";
 import { BsFillPersonLinesFill} from "react-icons/bs";
import Manju_Yadav_Resume from "../pic portfolio/Manju_Yadav_Resume.pdf"

const SocialLink = () => {
  
  // const res=[
  //   {
  //     child:(
  //       <>
  //       Resume <BsFillPersonLinesFill size={30}/>
  //       </>
  //     ),
  //     href: '/Manju_Yadav_Resume.pdf',
  //    style:'rounded-tr-md',
  //    download:true,
  //   }
  // ]
  
  return (
    <div 
    // class="nav-link resume"
     className='nav-link resume hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
      <li className='flex justify-between items-center w-40  h-14 px-4 ml-[-100px]  hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
          <a 
          href='mailto:manjuyadav0514001@gmail.com'
          className='flex justify-between items-center w-full text-white rounded-tr-md'
          >
             <>
             Mail <HiOutlineMail size={30}/>
             </>
          </a>
        </li>

        <li className='flex justify-between items-center w-40  h-14 px-4 ml-[-100px]  hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
          <a 
          href='https://www.linkedin.com/in/manju-yadav-16812723b/'
          className='flex justify-between items-center w-full text-white rounded-tr-md'
          >
             <>
             LinkedIn <FaLinkedin size={30}/>
             </>
          </a>
        </li>

        <li className='flex justify-between items-center w-40  h-14 px-4 ml-[-100px]  hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
          <a 
          href='https://github.com/manju145'
          
          className='flex justify-between items-center w-full text-white rounded-tr-md'
          >
             <>
             GitHub <FaGithub size={30}/>
             </>
          </a>
        </li>

      
        <li id="resume-link-2"
        className='flex justify-between items-center w-40  h-14 px-4 ml-[-100px]  hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
          <a 
           href={Manju_Yadav_Resume}
           id="resume-button-1"
          className='flex justify-between items-center w-full text-white rounded-br-md rounded-tr-md'
          download={true}
          target="_blank"
          rel="noreferrer"
          >
        
             Resume <BsFillPersonLinesFill size={30}/>
           
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLink;
