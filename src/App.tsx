import * as React from "react";

import {
  Box,
  Heading,
  Flex,
  Image,
  Button,
  Link,
  useColorModeValue,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FaAtlas,
  FaBook,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/all";
import ColorModeSwitcher from "./ColorModeSwitcher";
import Pine from "./images/Pine.png";
import FindMyRepresentativesIcon from "./images/FindMyRepresentativesIcon.png";
import NextAvailableReadLight from "./images/NextAvailableReadLight.png";
import NextAvailableReadDark from "./images/NextAvailableReadDark.png";
import FindMyRepresentativesLight from "./images/FindMyRepresentativesLight.png";
import FindMyRepresentativesDark from "./images/FindMyRepresentativesDark.png";
import TravelOrange from "./images/TravelOrange.png";
import Project from "./components/Project";

const App: React.FC = () => {
  const titleColor = useColorModeValue("#512A20", "#C4F1F9");
  const nextAvailableReadColor = useColorModeValue("#458EB2", "#87CDE5");
  const findMyRepresentativesColor = "#3899A0";
  const travelOrangeColor = "orange";

  const projects = [
    {
      logo: (
        <Heading d="flex" alignItems="center" color={nextAvailableReadColor}>
          <FaBook style={{ marginRight: "10px" }} />
          NextAvailableRead
        </Heading>
      ),
      accentColor: nextAvailableReadColor,
      technologies: ["TypeScript", "Node.js", "React", "Chakra UI"],
      gitHubUrl: "https://github.com/orenscheer/nextavailableread",
      demoUrl: "https://nextavailableread.orenscheer.me",
      demoButtonText: "Application",
      description: (
        <Text>
          NextAvailableRead is a web app that helps users find their next book.
          It bridges the gap between Goodreads and the public library, by
          finding books on a user&apos;s Goodreads shelves that are also
          currently available for checkout from one of over 130 libraries in
          Canada, the U.S., Australia, and New Zealand.
        </Text>
      ),
      image: useColorModeValue(NextAvailableReadDark, NextAvailableReadLight),
    },
    {
      logo: (
        <Heading
          d="flex"
          alignItems="center"
          color={findMyRepresentativesColor}
        >
          <Image
            src={FindMyRepresentativesIcon}
            height="42px"
            marginRight="10px"
          />
          Find My Representatives
        </Heading>
      ),
      accentColor: findMyRepresentativesColor,
      technologies: ["Kotlin, Android Studio"],
      gitHubUrl: "https://github.com/orenscheer/find-my-representatives",
      description: (
        <Text>
          Find My Representatives is an Android app, written in Kotlin, that
          helps Canadians find their elected officials. Users can enter their
          postal code or use their device location to receive a list of their
          federal, provincial, and municipal elected officials, with data
          provided by{" "}
          <Link href="https://represent.opennorth.ca/" isExternal>
            Open North
          </Link>
          .
        </Text>
      ),
      image: useColorModeValue(
        FindMyRepresentativesDark,
        FindMyRepresentativesLight
      ),
    },
    {
      logo: (
        <Heading d="flex" alignItems="center" color={travelOrangeColor}>
          <FaAtlas style={{ marginRight: "10px" }} />
          Travel Orange
        </Heading>
      ),
      accentColor: travelOrangeColor,
      technologies: ["React", "Ant Design"],
      gitHubUrl:
        "https://github.com/orenscheer/orenscheer.github.io/tree/main/seg3525/lab8",
      demoUrl: "https://travelorange.orenscheer.me",
      demoButtonText: "Prototype",
      description: (
        <Text>
          Travel Orange is a functional prototype (no backend) of a travel
          agency, made for a UI design class. The site, built entirely with
          React, allows users to accomplish many tasks including searching and
          booking flights, researching destinations, and planning vacations.
        </Text>
      ),
      image: TravelOrange,
    },
  ];

  return (
    <Box fontSize="xl" pb={8} d="flex" flexDir="column" alignItems="center">
      <Flex width="100%">
        <Flex
          width="100%"
          justifyContent="flex-end"
          pt={6}
          pb={6}
          px={8}
          height="100px"
          alignItems="flex-end"
          mb={0}
        >
          <ColorModeSwitcher />
        </Flex>
      </Flex>
      <Flex direction="column" width="80%" alignItems="center">
        <Flex alignItems="center">
          <Image
            borderRadius="full"
            boxSize="180px"
            src={Pine}
            alt="Oren Scheer"
            mr={5}
          />
          <Flex
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Heading color={titleColor} size="3xl" mt={3} mb={4}>
              Oren Scheer
            </Heading>
            <Flex ml={2} justifyContent="space-between" width="450px">
              <Link href="https://linkedin.com/in/orenscheer" isExternal>
                <Button
                  leftIcon={<FaLinkedin />}
                  variant="link"
                  color={titleColor}
                >
                  LinkedIn
                </Button>
              </Link>
              <Text>/</Text>
              <Link href="https://github.com/orenscheer" isExternal>
                <Button
                  leftIcon={<FaGithub />}
                  variant="link"
                  color={titleColor}
                >
                  GitHub
                </Button>
              </Link>
              <Text>/</Text>
              <Link href="mailto:contact@orenscheer.me" isExternal>
                <Button
                  leftIcon={<FaEnvelope />}
                  variant="link"
                  color={titleColor}
                >
                  contact@orenscheer.me
                </Button>
              </Link>
            </Flex>
            <Text mt={3} mb={3} maxWidth="420px" mx={2}>
              I&apos;m in my third year at the University of Ottawa, studying
              computer science and math. Some of my projects can be found below!
            </Text>
          </Flex>
        </Flex>
        <VStack spacing={5} width="100%" mt={5}>
          {projects.map((project) => (
            <Project
              logo={project.logo}
              accentColor={project.accentColor}
              technologies={project.technologies}
              gitHubUrl={project.gitHubUrl}
              demoUrl={project.demoUrl}
              demoButtonText={project.demoButtonText}
              description={project.description}
              image={project.image}
            />
          ))}
        </VStack>
      </Flex>
    </Box>
  );
};

export default App;
