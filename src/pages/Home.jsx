import React from 'react'
import manjupic from "../pic portfolio/manjupic.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
    return (
        <div name="home" 
        id="home"
        className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>

            <div
            //  class="nav-link home"
             className='nav-link home  max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full mr-11'>
                    <h3 className='text-4xl sm:text-3xl text-white'>Hi There, I'm</h3>
                    <h1 
                     id="user-detail-name"
                    className='text-4xl sm:text-4xl text-white font-bold mt-5px mt-5'>Manju Yadav</h1>
                    <h2 className='text-3xl sm:text-4xl text-white mt-5'>
                        I'm a Full Stack Developer
                    </h2>
                    <p
                    id="user-detail-intro"
                    className='text-gray-500 py-4 max-w-md'>If you are looking for a talented, dedicated, 
                    and experienced full stack developer, I would love the opportunity to speak with you further.
                     Please feel free to view my portfolio and reach out if you have any questions or would like to
                      discuss your project.</p>
                    <div>
                        <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer '>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} 
                                className="ml-1 "/>
                            </span>
                        </button>
                    </div>
                </div>

                <div className='hover:scale-105 '>
                    <img src={manjupic} alt="my profile"
                    className='home-img rounded-2xl  mx-auto w-2/3 md:w-full borderRadius-2px '
                    >
                    </img>
                </div>
            </div>
        </div>
    )
}

export default Home;