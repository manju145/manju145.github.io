import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { BsLinkedin } from "react-icons/bs";
// import { AiFillGithub } from "react-icons/ai";
// import { AiOutlineWhatsApp } from "react-icons/ai";
const Contact = () => {
  return (
    <div name="contact"
      id="contact"
      className='nav-link contact pt-10 w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white mt-1 pb-28'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full '>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>

        {/* <div
          id="contact-linkedin"
          className='flex justify-around w-20 mx-auto'>
          <button className='items-center w-30 h-10 px-4 '>
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
        </div> */}

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

            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'
            >Send</button>
                    
            {/* <div className='grid grid-cols-2 gap-48 w-full '>
              <p className='text-white font-bold'>manjuyadav0514001@gmail.com</p>
              <h1 className='text-white font-bold'>8788817572</h1>
            </div> */}

          </form>
          
        </div>
      </div>

    </div>


  //   <section className="nav-link contact  bg-gradient-to-b from-black to-gray-800" id="contact">
  //   <div className="nav-link-contact">
  //     <h2>
  //       Contact <span>Me!</span>
  //     </h2>
  //     <h4>
  //       Talent wins games, but teamwork and intelligence win championships.
  //     </h4>
  //     <p>
  //       Fill the form to connect if any query <i className="fas fa-smile"></i>
  //     </p>
  //     <div className="list">
  //       <li id="contact-phone">
  //         {/* <a
  //           href="https://api.whatsapp.com/send?phone=+916387389485"
  //           target="_blank"
  //         > */}
  //           +91-8788817572
  //         {/* </a> */}
  //       </li>
  //       <li>
  //       {/* https://github.com/manju145 */}
  //         <a
  //           href="mailto:manjuyadav0514001@gmail.com"
  //           id="contact-email"
  //           target="_blank"
  //         >
  //           manjuyadav0514001@gmail.com{" "}
  //         </a>
  //       </li>
  //       <li>
  //         <a
  //           href="https://www.linkedin.com/in/manju-yadav-1"
  //           id="contact-linkedin"
  //         >
  //           {" "}
  //           Linkedin : Manju Yadav
  //         </a>
  //       </li>
  //     </div>
  //     <div className="contact-icons">
  //       <a
  //         id="contact-github"
  //         href="https://github.com/manju145"
  //         target="_blank"
  //       >
  //         <i>
  //           <AiFillGithub />
  //         </i>
  //       </a>
  //       {/* <a
  //         href="https://api.whatsapp.com/send?phone=+916387389485"
  //         target="_blank"
  //       >
  //         <i>
  //           <AiOutlineWhatsApp />
  //         </i>
  //       </a> */}
  //       <a
  //         id="contact-linkedin"
  //         href="https://www.linkedin.com/in/manju-yadav-1"
  //         target="_blank"
  //       >
  //         <i>
  //           <BsLinkedin />
  //         </i>
  //       </a>
  //     </div>
  //   </div>

  //   <div className="contact-form">
  // <form action='https://getform.io/f/93499645-a07a-4eff-b445-558f862088f6'
  //           method='POST'
  //           >

  //           <input type="text" name='name'
  //             placeholder='Enter Your Name'
  //             id="user-detail-name"
  //            />

  //           <input type="text" name='email'
  //             placeholder='Enter Your Email'
  //             id="contact-email"
  //              />

  //           <input type="number" name='mobile'
  //             placeholder='Enter Your Mobile Number'
  //             id="contact-phone"
  //              />

  //           <textarea name='message' rows="10"
  //             placeholder='Enter Your Message'
  //             id="user-detail-intro"
             
  //           ></textarea>

  //           <button className="submit"
  //           >Send</button>
                    
            

  //         </form>

    
  //   </div>
  // </section>
  )
}

export default Contact