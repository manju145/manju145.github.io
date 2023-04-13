import { React, useEffect } from "react";
import {
  Box,
  Flex,
  Link,
  Button,
    useColorModeValue,
  useColorMode,
  Text,
} from "@chakra-ui/react";

import { MoonIcon, SunIcon} from "@chakra-ui/icons";
import { BiDownload } from "react-icons/bi";
import DrawerExample from "./SideBar";
import Manju_Yadav_Resume from "../Image/Manju_Yadav_Resume.pdf"

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    toggleColorMode("dark");
  }, []);

  const handleClickScroll = (value) => {
    const element = document.getElementById(value);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  console.log(colorMode);
  function handleResume() {
   window.open(`${Manju_Yadav_Resume}`)
  }
  return (
    <>
      <Box
        as="header"
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        position="fixed"
        w="100%"
        zIndex={"1000"}
        top={"0px"}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          m="auto"
          width={"94%"}
        >
          <Box w={{ base: "50%", sm: "20%" }} fontSize={"25px"} >
         
          <Text as='em'>Manju</Text>
          </Box>
          
          <Flex
            w="70%"
            display={{ base: "none", lg: "block" }}
            alignItems={"center"}
            justifyContent="end"
          >
            <Flex
              id="nav-menu"
              w="100%"
              justifyContent={"space-between"}
              direction={"row"}
              fontSize="18px"
              alignItems={"center"}
            >
              <Button
                onClick={() => {
                  handleClickScroll("home");
                }}
                colorScheme="gray"
                variant="ghost"
              >
                <Link className="nav-link home">Home</Link>
              </Button>

              <Button
                colorScheme="gray"
                onClick={() => {
                  handleClickScroll("about");
                }}
                variant="ghost"
              >
                <Link className="nav-link about">About</Link>
              </Button>

              <Button
                onClick={() => {
                  handleClickScroll("skills");
                }}
                colorScheme="gray"
                variant="ghost"
              >
                <Link className="nav-link skills">Skills</Link>
              </Button>

              <Button
                onClick={() => {
                  handleClickScroll("projects");
                }}
                colorScheme="gray"
                variant="ghost"
              >
                <Link className="nav-link projects">Projects</Link>
              </Button>

              <Button
                onClick={() => {
                  handleClickScroll("contact");
                }}
                colorScheme="gray"
                variant="ghost"
              >
                <Link className="nav-link contact">Contact</Link>
              </Button>

              <Link
               id="resume-link-2"
                href={Manju_Yadav_Resume}
                className="nav-link resume"
                download
                onClick={handleResume}
                target="_blank"
              >
                <Button
                  className="nav-link resume"
                  id="resume-button-1"
                  colorScheme="teal"
                  size="md"
                >
                  <Text mr={"4px"}>
                    Resume
                    <BiDownload />
                  </Text>
                </Button>
              </Link>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Flex>
          </Flex>

          <Box display={{ base: "block", lg: "none" }}>
            <Flex
              w="100%"
              justifyContent={"space-between"}
              direction={"column"}
              fontSize="18px"
              alignItems={"center"}
            >
              <DrawerExample
                handleClickScroll={handleClickScroll}
                handleResume={handleResume}
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
