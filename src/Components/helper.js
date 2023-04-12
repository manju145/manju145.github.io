import {
  Badge,
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
   Code,
} from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

function HelperProject({ image, title, techStack, desc, github, deploy }) {
  return (
    <Box
      className="project-card"
      maxW="sm"
      m="auto"
      w="100%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      mt="10px"
    >
      <Box borderRadius="lg" overflow="hidden">
        <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
          <Image
            transform="scale(1.0)"
            src={image}
            alt="some text"
            objectFit="contain"
            width="100%"
            transition="0.3s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
            }}
          />
        </Link>
      </Box>

      <Box p="6">
        <Box display="flex" flexWrap={"wrap"} alignItems="baseline">
          {techStack?.map((el, ind) => {
            return (
              <Code
                mr="10px"
                fontSize={"14px"}
                borderRadius="50px"
                px="10px"
                mb="4px"
                colorScheme={"teal"}
              >
                <Badge
                  class="project-tech-stack"
                  key={ind + Date.now()}
                  borderRadius="full"
                  colorScheme="teal"
                >
                  {el}{" "}
                </Badge>
              </Code>
            );
          })}
        </Box>
        <Text
          mt="4"
          fontWeight="bold"
          as="h4"
          lineHeight="tight"
          noOfLines={2}
          textAlign="left"
          className="project-title"
        >
          {title}
        </Text>

        <Text
          mt="4"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={2}
          textAlign="left"
          className="project-description"
        >
          {desc}
        </Text>

        <Flex mt={"4"} justifyContent={"space-between"}>
          <Link class="project-github-link" href={github} isExternal>
            <Button size="sm" colorScheme="teal" variant="solid">
              <Text mr={"4px"}>GitHub</Text>

              <BsGithub />
            </Button>
          </Link>

          <Link class="project-deployed-link" href={deploy} isExternal>
            <Button size="sm" colorScheme="teal" variant="outline">
              <Text mr={"4px"}>Deployed Link</Text>
              <BiLinkExternal />
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}

export default HelperProject;