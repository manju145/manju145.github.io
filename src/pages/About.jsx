import React from 'react'

const About = () => {
  return (
    <div name="about"
    id="about"
    //  class="about section"
      className='about section w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white m-0' >

      <div 
      // class="nav-link about"
       className='nav-link about max-w-screen-lg  p-4 mx-auto flex flex-col justify-center w-full h-full'>
   
        <div >
          <p className=' text-6xl font-bold text-center  sm:text-4xl underline'>
           About Me
          </p>
        </div>
        <p className='text-xl  mt-20'>
          Hello! My name is Manju Yadav.  
          Full-Stack Web Developer with experience in HTML,
          CSS, JavaScript, and React. Passionate about coding
          and Looking of a challenging roles in growth-oriented
          organizations.
         
          I have a Knowledge in front-end technologies 
          such as HTML, CSS, and JavaScript. 
          And Also have a Knowledge in popular frameworks 
          and libraries such as React.
        </p>
        <br />
        <p className='text-xl  mt-10'>
        I am confident that my
         skills and experience make me a 
         strong candidate for any full stack development
          role, and I am eager to put my abilities to work 
          for you. If you are interested in learning more about
           what I have to offer, please don't hesitate to reach
            out. I would be happy to provide additional
             information and answer any questions you may have.
        </p>
      </div>

    </div>
  )
}

export default About;