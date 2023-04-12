import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Flex,
  Button,
} from "@chakra-ui/react";
import aboutimage from "../Image/aboutimage.png";
// console.log(photo)
const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const About = () => {
  return (
    <>
      <Box h="60px"></Box>
      <Container
        maxW={{ base: "97%", lg: "90%" }}
        id="about"
        className="about section"
        p={{ base: "2", sm: "12" }}
        textAlign="center"
      >
        <Heading mb={"10"} as="h1">
          About Me
        </Heading>
        <Flex
          w={"100%"}
          m="auto"
          direction={{ base: "column", lg: "row" }}
          bg={useColorModeValue("white", "gray.800")}
          borderRadius="20px"
          p="20px"
          textAlign={"left"}
          boxShadow={"rgba(230, 250, 255, 0.56) 0px 22px 70px 4px;"}
          marginTop={{ base: "5", sm: "5" }}
          justifyContent={{ base: "center", lg: "space-between" }}
        >
          <Box marginRight="3">
            <Flex
              // border={"5px solid red"}
              width={{ base: "60%", md: "40%", lg: "85%" }}
              justifyContent={"center"}
              textAlign={"center"}
              m="auto"
              zIndex="2"
              border="4px solid whiteAlpha"
              borderRadius="20%"
            >
              <Image
                textAlign={"center"}
                class="home-img"
                borderRadius="20%"
                src={aboutimage}
                // h="350px"
                // w="350px"
                alt="some good alt text"
                objectFit="cover"
              />
            </Flex>
          </Box>
          <Flex
            // border={"5px solid red"}
            w={{ base: "100%", lg: "70%" }}
            mt={{ base: "40px", lg: "0px" }}
            flexDirection="column"
            justifyContent="center"
          >
            {/* <BlogTags tags={['Engineering', 'Product']} /> */}
            <Flex
              direction={{ base: "column", md: "row" }}
              justifyContent={"space-between"}
              textAlign="center"
              marginBottom={"20px"}
            >
              <Box
                // w="30%"
                w={{ base: "100%", md: "30%" }}
                mt={{ base: "30px", md: "0px" }}
                padding={"18px"}
                borderRadius="9px"
                boxShadow={
                  "rgba(255, 255, 255, 0.17) 0px -2px 25px 0px inset, rgba(255, 255, 255, 0.15) 0px -36px 30px 0px inset, rgba(255, 255, 255, 0.1) 0px -79px 40px 0px inset, rgba(255, 255, 255, 0.06) 0px 2px 1px, rgba(255, 255, 255, 0.09) 0px 4px 2px, rgba(255, 255, 255, 0.09) 0px 8px 4px, rgba(255, 255, 255, 0.09) 0px 16px 8px, rgba(255, 255, 255, 0.09) 0px 2px 16px"
                }
              >
                <Text>1200+ Hours</Text>
                <Text>Full Stack Coding</Text>
              </Box>

              <Box
                w={{ base: "100%", md: "30%" }}
                mt={{ base: "30px", md: "0px" }}
                padding={"18px"}
                borderRadius="9px"
                boxShadow={
                  "rgba(255, 255, 255, 0.17) 0px -23px 25px 0px inset, rgba(255, 255, 255, 0.15) 0px -36px 30px 0px inset, rgba(255, 255, 255, 0.1) 0px -79px 40px 0px inset, rgba(255, 255, 255, 0.06) 0px 2px 1px, rgba(255, 255, 255, 0.09) 0px 4px 2px, rgba(255, 255, 255, 0.09) 0px 8px 4px, rgba(255, 255, 255, 0.09) 0px 16px 8px, rgba(255, 255, 255, 0.09) 0px 2px 16px"
                }
              >
                <Text>4+ Major Projects</Text>
                <Text>30+ Mini Projects</Text>
              </Box>

              <Box
                w={{ base: "100%", md: "30%" }}
                mt={{ base: "30px", md: "0px" }}
                padding={"18px"}
                borderRadius="9px"
                boxShadow={
                  "rgba(255, 255, 255, 0.17) 0px -23px 25px 0px inset, rgba(255, 255, 255, 0.15) 0px -36px 30px 0px inset, rgba(255, 255, 255, 0.1) 0px -79px 40px 0px inset, rgba(255, 255, 255, 0.06) 0px 2px 1px, rgba(255, 255, 255, 0.09) 0px 4px 2px, rgba(255, 255, 255, 0.09) 0px 8px 4px, rgba(255, 255, 255, 0.09) 0px 16px 8px, rgba(255, 255, 255, 0.09) 0px 2px 16px"
                }
              >
                <Text>100+ Hours</Text>
                <Text>Soft Skills</Text>
              </Box>
            </Flex>
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                Summary
              </Link>
              {/* <Button
                id="resume-button-2"
                colorScheme="teal"
                size="md"
              ></Button> */}
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
              id="user-detail-intro"
            >
              I am a Full Stack Developer in MERN stack having good knowledge o
              Express, MongoDB, JavaScript, HTML, CSS, etc. I am passionate
              about learning new technologies and aiming to create world-class
              web applications while facilitating organizations in achieving
              ambitious goals.
            </Text>
            {/* <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} /> */}
          </Flex>
        </Flex>
        <Divider marginTop="20" />
      </Container>
    </>
  );
};

export default About;
