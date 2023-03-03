import React from 'react';
import where_is_brand from "../pic portfolio/where_is_brand.png";
import Tripoto from "../pic portfolio/Tripoto.png"
import gitcalender from "../pic portfolio/gitcalender.png"
import gitnum from "../pic portfolio/gitnum.png"
import gitrate from "../pic portfolio/gitrate.png"
import GitHubCalendar from "react-github-calendar";
const Project = () => {

  const project = [
    {
      id: 1,
      src: where_is_brand,
      tytle: "It is a restful-based web service for online Subscription booking  system.",
      herfpro: "https://chimerical-lollipop-25cd16.netlify.app/",
      stack: "Tech Stack :",
      stackname: "HTML | CSS  |  JavaScript"
    },
    {
      id: 2,
      src: Tripoto,
      tytle: "Tripoto is a travel website that offers guides, itineraries, booking options and a platform to share personal travel stories.",
      herfpro: "https://brilliant-rugelach-54b37f.netlify.app/",
      stack: "Tech Stack :",
      stackname: "HTML | CSS  |  JavaScript"
    },
  ];


  return (
    <div
      name="project"
      id="projects"

      className='bg-gradient-to-b from-black to-gray-800 w-full text-white pt-12'>

      <div
        //  class="nav-link projects"
        className='nav-link projects  p-12 mx-auto flex-col justify-center w-full h-full grid  gap-11 mt-12'>
        <div className='mb-12 '>
          <p className='text-5xl font-bold   text-center text-blue underline'>PROJECT</p>
        </div>

        {
          project.map(({ id, src, tytle, stack, stackname, herfpro }) => (

            <div key={id} className='project-card grid px-12 mb-12 mt-10'
            // class="project-card"
            >
              <div className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="project"
                  className='rounded-md duration-200 hover:scale-105' />
                <div className='flex items-center justify-around'>
                  <button
                    //  class="project-deployed-link"
                    className='project-deployed-link w1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gray-600'><a href={herfpro} className='project-deployed-link hover:font-bold hover:text-black hover:bg-yellow-100 py-2 px-4'>Deploy</a></button>
                  <button
                    //  class="project-github-link"
                    className=' project-github-link w1/2 px-6 py-3 m-4 duration-200 hover:scale-105  bg-gray-600'><a href='https://github.com/hariomfw21/dandy-nation-9128' className='project-github-link hover:font-bold hover:text-black hover:bg-yellow-100 py-2 px-4'>Code</a></button>
                </div>
                <p
                  // class="project-description"
                  className='project-description  text-1xl text-center flex m-auto'>{tytle}</p>

                <h1
                  //  class="project-tech-stack"
                  className='project-tech-stack text-red-500 flex justify-end mr-4' >{stack}</h1>
                <h6
                  // class="project-title"
                  className='project-title flex justify-end mr-4'>{stackname}</h6>
              </div>
            </div>

          ))
        }
        <h1
          // class="react-activity-calendar"
          className='text-3xl font-bold   text-center text-blue underline '>Github Calendar</h1>
        <img src={gitcalender} alt=""
          className='rounded-md duration-200 hover:scale-105 m-auto'
        />
        <div className='w-85 m-auto'>
<GitHubCalendar 
 username="manju145"
>
  
</GitHubCalendar>
          {/* <GitHubCalendar
            className="react-activity-calendar"
            username="manju145"
            blockSize={12}
            blockMargin={8}
            // color="green"
            fontSize={15}

          /> */}
        </div>
        <div className='p-8'>
          <h1
            id="github-top-langs"
            className='text-3xl font-bold   text-center text-blue underline'>Github Stats</h1>
          <div className='grid grid-cols-2 gap-8 p-8'>

            <img src={gitnum} alt=""
              id="github-streak-stats"
              className='rounded-md duration-200 hover:scale-105 m-auto'
            />
            <img src={gitrate} alt=""
              id="github-stats-card"
              className='rounded-md duration-200 hover:scale-105 m-auto'
            />
          </div>

        </div>


      </div>

    </div>
  )
}

export default Project;