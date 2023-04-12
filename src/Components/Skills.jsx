import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export default function Skills() {
  return (
    <Center m="auto" pt={100} w="90%" id="skills" flexDirection="column">
      <Heading>Tech Stack And Developer Tools</Heading>
      <Flex
        justifyContent={"space-around"}
        direction={{ base: "column", lg: "row" }}
        marginTop={"85px"}
      >
        <Box
          w={{ base: "100%", lg: "48%" }}
          borderRadius={"12px"}
          p="12px"
          boxShadow={"rgba(255, 255, 255, 0.35) 10px 5px 15px;"}
        >
          {/* here */}
          <Text fontSize={"23px"}>Teach Stack</Text>
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(5, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
          >
            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                src={"https://img.icons8.com/color/1x/html-5.png"}
              ></Image>
              <Text className="skills-card-name">HTML</Text>
            </Flex>
            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                src={"https://img.icons8.com/color/1x/css3.png"}
              ></Image>
              <Text className="skills-card-name">CSS</Text>
            </Flex>
            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                src={"https://img.icons8.com/color/1x/javascript.png"}
              ></Image>
              <Text className="skills-card-name">JavaScript</Text>
            </Flex>
            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                src={"https://img.icons8.com/color/1x/react-native.png"}
              ></Image>
              <Text className="skills-card-name">React</Text>
            </Flex>
            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                src={"https://img.icons8.com/color/1x/redux.png"}
              ></Image>
              <Text className="skills-card-name">Redux</Text>
            </Flex>
            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                justifyContent={"center"}
                src={"https://img.icons8.com/color/1x/chakra-ui.png"}
              ></Image>
              <Text className="skills-card-name">Chakra UI</Text>
            </Flex>

            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                w="60%"
                h="60%"
                justifyContent={"center"}
                src={
                  "https://camo.githubusercontent.com/900baefb89e187c8b32cdbb3b440d1502fe8f30a1a335cc5dc5868af0142f8b1/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6e6f64656a732f6e6f64656a732d6f726967696e616c2e737667"
                }
              ></Image>
              <Text className="skills-card-name">Adv Js</Text>
            </Flex>

            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                w="60%"
                h="60%"
                justifyContent={"center"}
                src={
                  "https://camo.githubusercontent.com/9255dba4a9ad5a906afd63a77b2d3498cbd7fa527008a417968683f5e8e545b2/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f342f34632f547970657363726970745f6c6f676f5f323032302e7376672f3132303070782d547970657363726970745f6c6f676f5f323032302e7376672e706e67"
                }
              ></Image>
              <Text className="skills-card-name">TypeScript</Text>
            </Flex>
          </Grid>
        </Box>
        <Box
          w={{ base: "100%", lg: "48%" }}
          mt={{ base: "20px", lg: "0px" }}
          borderRadius={"12px"}
          p="12px"
          boxShadow={"rgba(255, 255, 255, 0.35) 10px 5px 15px;"}
        >
          {/* here */}
          <Text fontSize={"23px"}>Developer Tools</Text>
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(5, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
          >
            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                p={"1"}
                objectFit={"contain"}
                borderRadius={"10px"}
                src={
                  "https://cdn.dribbble.com/users/3139745/screenshots/12521453/media/a6553274140b496ee2c269445cea867b.png"
                }
              ></Image>
              <Text className="skills-card-name">CodePen</Text>
            </Flex>
            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                p={"1"}
                w="60%"
                h="60%"
                objectFit={"contain"}
                src={
                  "https://camo.githubusercontent.com/dc9e7e657b4cd5ba7d819d1a9ce61434bd0ddbb94287d7476b186bd783b62279/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6769742f6769742d6f726967696e616c2e737667"
                }
              ></Image>
              <Text className="skills-card-name">Git</Text>
            </Flex>
            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                p={"1"}
                w="60%"
                h="60%"
                src={
                  "https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667"
                }
              ></Image>
              <Text className="skills-card-name">Figma</Text>
            </Flex>
            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                w="60%"
                h="60%"
                src={
                  "https://camo.githubusercontent.com/1708ce976581ff41a169dc4d3161d41b91900ca2ea48db4950db36f9f45932af/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f392f39612f56697375616c5f53747564696f5f436f64655f312e33355f69636f6e2e737667"
                }
              ></Image>
              <Text className="skills-card-name">VS Code</Text>
            </Flex>
            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                src={"https://img.icons8.com/color/1x/redux.png"}
              ></Image>
              <Text className="skills-card-name">Redux</Text>
            </Flex>
            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                justifyContent={"center"}
                src={"https://img.icons8.com/color/1x/chakra-ui.png"}
              ></Image>
              <Text className="skills-card-name">Chakra UI</Text>
            </Flex>

            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                justifyContent={"center"}
                src={"https://img.icons8.com/color/1x/chakra-ui.png"}
              ></Image>
              <Text className="skills-card-name">Chakra UI</Text>
            </Flex>
          </Grid>
        </Box>
      </Flex>
    </Center>
  );
}
