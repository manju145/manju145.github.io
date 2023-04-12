import { Box, Flex, Heading, Image, Link, Stack } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const Stats = () => {
  return (
    <Box marginTop={"130px"} textAlign="center">
      <Heading>GitHub Stats</Heading>
      <Stack>
        <Box
          className="react-activity-calendar"
          m={"auto"}
          mt="50px"
          mb={"40px"}
        >
          <Link href="https://github.com/manju145" target="_blank">
            <GitHubCalendar username="manju145" />
          </Link>
        </Box>
        <Flex
          w={"100%"}
          m="auto"
          justifyContent={{ base: "center", md: "space-around" }}
          marginTop="30px"
          direction={{ base: "column", md: "row" }}
          // border={"3px solid white"}
        >
          <Link
            // border={"3px solid white"}
            w={{ base: "100%", md: "33%" }}
            mt={{ base: "10px", md: "0px" }}
            href="https://github.com/manju145"
            target="_blank"
          >
            <Flex justifyContent={"center"}>
              <Image
                id="github-streak-stats"
                src={
                  "https://github-readme-streak-stats.herokuapp.com/?user=manju145&"
                }
              ></Image>
            </Flex>
          </Link>

          <Link
            // border={"3px solid white"}
            w={{ base: "100%", md: "30%" }}
            mt={{ base: "10px", md: "0px" }}
            href="https://github.com/manju145"
            target="_blank"
          >
            <Flex justifyContent={"center"}>
              <Image
                id="github-top-langs"
                src="https://github-readme-stats.vercel.app/api/top-langs?username=harshitakatara34&show_icons=true&locale=en&layout=compact"
              ></Image>
            </Flex>
          </Link>

          <Link
            // border={"3px solid white"}
            w={{ base: "100%", md: "31%" }}
            mt={{ base: "10px", md: "0px" }}
            href="https://github.com/manju145"
            target="_blank"
          >
            <Flex justifyContent={"center"}>
              <Image
                id="github-stats-card"
                src="https://github-readme-stats.vercel.app/api?username=manju145&show_icons=true&locale=en"
              ></Image>
            </Flex>
          </Link>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Stats;
