import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import HelperProject from "./helper";
import img1 from "../Image/img1.png"
import img2 from "../Image/img2.png"

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
    image:`${img1}`,
    title: "Mailchimp Clone",
    desc: "It is a restful-based web service for online Subscription booking  system.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/hariomfw21/dandy-nation-9128",
    deploy: "https://chimerical-lollipop-25cd16.netlify.app/",
  },
  {
    image:`${img2}`,
    desc: "Tripoto is a travel website that offers guides, itineraries, booking options and a platform to share personal travel stories.",
    title: "Tripoto Clone",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/manju145/needless-point-9035.git",
    deploy: "https://brilliant-rugelach-54b37f.netlify.app/",
  },
  {
    image:`${img1}`,
    title: "Mailchimp Clone",
    desc: "It is a restful-based web service for online Subscription booking  system.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/hariomfw21/dandy-nation-9128",
    deploy: "https://chimerical-lollipop-25cd16.netlify.app/",
  },
  {
    image:`${img2}`,
    desc: "Tripoto is a travel website that offers guides, itineraries, booking options and a platform to share personal travel stories.",
    title: "Tripoto Clone",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/manju145/needless-point-9035",
    deploy: "https://brilliant-rugelach-54b37f.netlify.app/",
  },
  ];

export default Projects;
