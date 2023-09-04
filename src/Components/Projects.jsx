import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import HelperProject from "./helper";
import img1 from "../Image/img1.png"
import Flipkart2 from "../Image/Flipkart2.png"

import Apple from "../Image/Apple.png"
import Amazon from "../Image/Amazon.png"
import Brand from "../Image/Brand.png"


const Projects = () => {
  return (

    <Box id="projects" textAlign={"center"} pt="130px" mt={"10"}>
      <Heading>Projects</Heading>
      <SimpleGrid
        justifyContent="center"
        textAlign={"center"}
        m={"auto"}
        columns={{ base: "1", md: "2", xl: "3" }}
        spacing={{ base: "10px", md: "40px" }}
        w={{ base: "95%", md: "81%" }}
        marginTop="70px"
        marginBottom={"50px"}
      >
        {data.map((el, ind) => {
          return <HelperProject key={Date.now() + ind} {...el} />;
        })}
      </SimpleGrid>
    </Box>
  );
};


let data = [
  {
    image:`${Flipkart2}`,
    desc: "It is a E-commerce website for purchasing electronics products.",
    title: "Flipkart Clone",
    techStack: ["React.js","React-Redux","MUI","Styled-Components","JavaScript","Express.js","MonogoDB",],
    github: "https://github.com/manju145/Flipcard",
    deploy: "https://64f1ce82c38df25ed21b395f--tourmaline-daffodil-5f133f.netlify.app/",
  },
  {
    image:`${Brand}`,
    title: "Mailchimp Clone",
    desc: "It is a restful-based web service for online Subscription booking  system.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/hariomfw21/dandy-nation-9128",
    deploy: "https://chimerical-lollipop-25cd16.netlify.app/",
  },
  {
    image:`${Apple}`,
    desc: "An E-commerce website for purchasing electronics products such as ipad,iphone,Mac and other accessories.",
    title: "Apple Clone",
    techStack: ["HTML", "CSS", "JavaScript","Reactjs","Chakra UI","MonogoDB","Express"],
    github: "https://github.com/harshal-kitukale/hunky-point-1424",
    deploy: "https://frontend-apple.vercel.app/",
  },
 
 
 

  
  ];

export default Projects;


