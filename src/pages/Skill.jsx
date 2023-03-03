import React from 'react'
import chakraUi from "../pic portfolio/chakraUi.png";
import css from "../pic portfolio/css.png";
import git from "../pic portfolio/git.png";
import html from "../pic portfolio/html.png";
import javascript from "../pic portfolio/javascript.png";
import node from "../pic portfolio/node.png";
import react from "../pic portfolio/react.png";
import redux from "../pic portfolio/redux.png";
import typescripts from "../pic portfolio/typescripts.png";
import npm from "../pic portfolio/npm.png";
const Skill = () => {

  const Skill = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500"
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-400"
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-400"
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-sky-300"
    },
    {
      id: 5,
      src: npm,
      title: "npm",
      style: "shadow-red-600"
    },
    {
      id: 6,
      src: typescripts,
      title: "TypeScript",
      style: "shadow-blue-600"
    },
    {
      id: 7,
      src: chakraUi,
      title: "ChakraUI",
      style: "shadow-green-500"
    },
    {
      id: 8,
      src: redux,
      title: "Redux",
      style: "shadow-purple-200"
    },
    {
      id: 9,
      src: git,
      title: "Git",
      style: "shadow-orange-500"
    },
    {
      id: 10,
      src: node,
      title: "NodeJS",
      style: "shadow-lime-400"
    },

  ];

  return (
    <div name="skill"
      id="skills"
      className='nav-link skills  bg-gradient-to-b from-black to-gray-800 w-full h-screen '>
      <div
        className='skills-card max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='py-8'>
          <p className=' text-center text-4xl font-bold border-b-4 border-gray-500 p-2  inline'>Technical Skills</p>
        </div>
        <div className='w-full grid grid-cols-4 sm:grid-cols-5 gap-12 text-center py-8 px-12 sm:px-0 '>
          {
            Skill.map(({ id, src, title, style }) => (
              <div key={id}
                className={` shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt=""
                  className='skills-card-img w-20 mx-auto'
                />
                <p className='skills-card-name mt-4'
                >{title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Skill


