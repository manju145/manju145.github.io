import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import HelperProject from "./helper";
import img1 from "../Image/img1.png"
import img2 from "../Image/img2.png"
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
    image:`${Brand}`,
    title: "Mailchimp Clone",
    desc: "It is a restful-based web service for online Subscription booking  system.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/hariomfw21/dandy-nation-9128",
    deploy: "https://chimerical-lollipop-25cd16.netlify.app/",
  },
  {
    image:`${Amazon}`,
    desc: "E-commerce website with product search, sorting, filtering, cart, checkout, admin portal and auth.",
    title: "Amazon Clone",
    techStack: ["Reactjs","Chakra UI","MonogoDB","Express","HTML", "CSS", "JavaScript"],
    github: "https://github.com/Faheemw09/envious-cactus-6437",
    deploy: "https://amazonn-ten.vercel.app/",
  },
  {
    image:`${Apple}`,
    desc: "An E-commerce website for purchasing electronics products such as ipad,iphone,Mac and other accessories.",
    title: "Apple Clone",
    techStack: ["HTML", "CSS", "JavaScript","Reactjs","Chakra UI","MonogoDB","Express"],
    github: "https://github.com/harshal-kitukale/hunky-point-1424",
    deploy: "https://frontend-apple.vercel.app/",
  },
 
  {
    image:`${img2}`,
    desc: "Tripoto is a travel website that offers guides, itineraries, booking options and a platform to share personal travel stories.",
    title: "Tripoto Clone",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/manju145/needless-point-9035.git",
    deploy: "https://brilliant-rugelach-54b37f.netlify.app/",
  },
 

  
  ];

export default Projects;


