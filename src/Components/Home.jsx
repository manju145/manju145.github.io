import {
  Container,
  Image,
  Link,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
    useColorModeValue,
  Box,
  Button,
  useColorMode,
} from "@chakra-ui/react";

import manjupic from "../Image/manjupic.png";
import { BiDownload } from "react-icons/bi";
// import Manju_Yadav_Resume from "../Image/Manju_Yadav_Resume.pdf"
const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

// const handleResumeShow=()=>{
//   window.open(`${Manju_Yadav_Resume}`)
// }

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
   return (
    <>
      <Box id="home" h="30px"></Box>
      <Container
        maxW={{ base: "95%", sm: "80%" }}
        m="auto"
        mt={"40px"}
        mb={{ base: "-50px", sm: "0px" }}
      >
        <Flex
          justifyContent="space-between"
          direction={{ base: "column-reverse", lg: "row" }}
          spacing={10}
        >
          <Stack
            w={{ base: "100%", lg: '"50%"' }}
            spacing={4}
            justifyContent="center"
          >
            <Text
              fontWeight={600}
              p={0}
              fontSize={"20px"}
              alignSelf={"flex-start"}
              rounded={"md"}
              mt={{ base: "20px", lg: '"0px"' }}
            >
              Hi, I am
            </Text>
            <Box
              w="100%"
              bgClip="text"
              bgGradient="linear(to-l, #81e6d9, #28628b)"
            >
              <Heading id="user-detail-name">Manju Yadav</Heading>
            </Box>
            <Text fontSize={"21px"}>Full Stack Web Developer</Text>
            <Text fontSize={"lg"}>
              Analytical and detail-oriented Full Stack Developer in MERN stack.
              Adaptable to learning new technologies, accountable team player,
              and highly productive. Aims to create world-class web applications
              while facilitating organizations in achieving ambitious goals.
            </Text>
            <Stack>
              <Stack
                h="14"
                spacing={4}
                direction={"row"}
                alignItems={"center"}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.100", "gray.700")}
                  />
                }
              >
               
                 {/* <span id="resume-button-2" onClick={handleResumeShow}>
                 <a  
            style={{padding:'10px',background:'rgb(71,97,190)',borderRadius:'8px' , color:'white',textDecoration:'none'}}
            id="resume-link-2"
            href={Manju_Yadav_Resume}
             download={true}
             target="_blank"
             rel="noreferrer"
            >
                  Resume                                                          
            </a>
            </span> */}
            
                <Flex justifyContent={"space-around"} w="25%">
                  <Link
                    m="5px"
                    id="contact-github"
                    href="https://github.com/manju145"
                    target="_blank"
                  >
                    <svg
                      fill={colorMode === "light" ? "black" : "white"}
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </Link>

                  <Link
                    m="5px"
                    id="contact-linkedin"
                    href="https://www.linkedin.com/in/manju-yadav-16812723b/"
                    target="_blank"
                  >
                    <svg
                      fill={colorMode === "light" ? "black" : "white"}
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </Link>

                
                </Flex>
              </Stack>
              <Stack>
                <Flex>
                  <svg
                    fill="white"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376" />
                  </svg>
                  <Text id="contact-phone" ml={"5px"}>
                    +91 8788817572
                  </Text>
                </Flex>

                <Flex mt={{ base: "20px", sm: "0px" }}>
                  <svg
                    fill="white"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                  </svg>
                  <Text id="contact-email" ml={"10px"}>
                  manjuyadav0514001@gmail.com
                  </Text>
                </Flex>
              </Stack>
            </Stack>
          </Stack>
          <Flex
            w={{ base: "100%", lg: '"50%"' }}
            justifyContent={{ base: "center", lg: "end" }}
            alignItems={"center"}
            m="10px"
          >
            <Image
              w={{ base: "200px", lg: "300px" }}
              mt="-10px"
              rounded={"md"}
              alt={"feature image"}
              src={manjupic}
              objectFit={"cover"}
            />
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
