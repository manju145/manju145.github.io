// import { BsFillPersonLinesFill} from "react-icons/bs";
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Manju_Yadav_Resume from "../pic portfolio/Manju_Yadav_Resume.pdf"


const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "home",
            classhere:"nav-link home"
        },
        {
            id: 2,
            link: "about",
            classhere:"nav-link about"
        },
        {
            id: 3,
            link: "skill",
            classhere:"nav-link skills"
        },

        {
            id: 4,
            link: "project",
            classhere:"nav-link projects"
        },
        {
            id: 5,
            link: "contact",
            classhere:"nav-link contact"
        },

    ];


    return (

        <div id="nav-menu"
            className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
            <div>
                <h1 className='text-5xl font-signature ml-2'>Manju</h1>
            </div>
            <ul className='hidden md:flex'>

                {links.map(({ id, link,classhere }) => (

                    <li
                        key={id}
                        className='px-4 
                         cursor-pointer
                          capitalize 
                        font-medium
                        text-white-500 
                             hover:scale-105 
                             duration-200'
                    >
                        <Link className={classhere} to={link} smooth duration={500}>{link}</Link>
                    </li>
                    

                ))}

                  <button
                  id="resume-link-2"
                    className='flex justify-between items-center w-30  h-6 px-4  bg-red-600 rounded-md hover:bg-blue-200'>
                    <a
                    id="resume-link-1"
                        href={Manju_Yadav_Resume}
                        className='nav-link resume flex justify-between items-center w-full font-bold rounded-br-md rounded-tr-md text-black'
                        download={true}
                        target="_blank"
                        rel="noreferrer"
                    >

                        Resume 

                    </a>
                    </button>
            </ul>


            <div
                onClick={() => setNav(!nav)}
                className='cursor-pointer pr-4 z-10 text-white-500 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (

                <ul className='flex flex-col justify-center items-center absolute 
                    top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500' >


                    {links.map(({ id, link }) => (

                        <li

                            key={id}
                            className='px-4 cursor-pointer capitalize py-6 text-4xl'
                        > <Link
                            onClick={() => setNav(!nav)}
                            to={link} smooth duration={500}>{link}</Link>
                        </li>

                    ))}

                </ul>
            )}
        </div>
    );
};


export default Navbar
