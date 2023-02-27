import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div name="contact"
      id="contact"
      className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      {/* 
           <div 
            // class="nav-link contact"
        className='nav-link contact w-full  px-1  h-80 flex mt-60 ml-6'>

          <img src="https://optinmonster.com/wp-content/uploads/2017/04/is-email-marketing-dead-heres-what-the-statistics-show.png" 
           alt=''
             className=' flex w-full mx-auto'
            />
          </div> */}
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full '>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>

        <div
          id="contact-linkedin"
          className='flex justify-center py-6 mb-4'>
          <button className='items-center w-30 h-10 px-4   ml-[-10px]'>
            <a href='https://www.linkedin.com/in/manju-yadav-1 '
              className='flex  items-center w-full text-black hover:text-blue-800 font-bold rounded-tr-md bg-sky-200'>
              LinkedIn <FaLinkedin size={28} /></a></button>

          <button
            id="contact-github"
            className=' items-center w-35  h-10 px-4 font-bold ml-[-10px] rounded-md hover:text-blue-200'>
            <a href='https://github.com/manju145'
              className='flex  items-center w-full text-white rounded-tr-md'>
              GitHub <FaGithub size={30} />
            </a></button>

          <button className=' items-center w-30  h-10 px-4 font-bold ml-[-10px] rounded-md'>
            <a href='mailto:manjuyadav0514001@gmail.com'
              className='flex  items-center w-full rounded-tr-md text-black bg-yellow-200'>
              Email<HiOutlineMail size={30} />
            </a></button>
        </div>

        <div className='flex justify-center items-center'>
          <form action='https://getform.io/f/93499645-a07a-4eff-b445-558f862088f6'
            method='POST'
            className='flex flex-col w-full md:w-1/2'>

            <input type="text" name='name'
              placeholder='Enter Your Name'
              id="user-detail-name"
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

            <input type="text" name='email'
              placeholder='Enter Your Email'
              id="contact-email"
              className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

            <input type="number" name='mobile'
              placeholder='Enter Your Mobile Number'
              id="contact-phone"
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

            <textarea name='message' rows="10"
              placeholder='Enter Your Message'
              id="user-detail-intro"
              className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            ></textarea>

            <button className='text-white font-bold bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'
            >Send</button>
             <p className='text-black'>manjuyadav0514001@gmail.com</p>
              <h1 className='text-black'>8788817572</h1>

            {/* <div className='grid grid-cols-2 gap-48 w-full bg-gradient-to-b from-black to-gray-800'>
              <p className='text-black'>manjuyadav0514001@gmail.com</p>
              <h1 className='text-black'>8788817572</h1>
            </div> */}

          </form>
          
        </div>
        <div className='grid grid-cols-2 gap-48 w-full bg-gradient-to-b from-black to-gray-800'>
              <p className='text-black'>manjuyadav0514001@gmail.com</p>
              <h1 className='text-black'>8788817572</h1>
            </div>
      </div>

    </div>

  )
}

export default Contact