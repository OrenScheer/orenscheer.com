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
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaAtlas, FaBook, FaGithub, FaLinkedin } from "react-icons/all";
import { EmailIcon } from "@chakra-ui/icons";
import ColorModeSwitcher from "./ColorModeSwitcher";
import Pine from "./images/Pine.png";
import FindMyRepresentativesIcon from "./images/FindMyRepresentativesIcon.png";
import NextAvailableReadLight from "./images/NextAvailableReadLight.png";
import NextAvailableReadDark from "./images/NextAvailableReadDark.png";
import FindMyRepresentativesLight from "./images/FindMyRepresentativesLight.png";
import FindMyRepresentativesDark from "./images/FindMyRepresentativesDark.png";
import TravelOrange from "./images/TravelOrange.png";
import Project from "./components/Project";
import { BASE_URL } from "./constants";

const App: React.FC = () => {
  const titleColor = useColorModeValue("#512A20", "#C4F1F9");
  const nextAvailableReadColor = useColorModeValue("#458EB2", "#87CDE5");
  const findMyRepresentativesColor = "#3899A0";
  const travelOrangeColor = "orange";
  const mdBreakpoint = useBreakpointValue({ base: false, md: true });

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
      demoUrl: `https://nextavailableread.${BASE_URL}`,
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
            <Text as="u">Open North</Text>
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
      demoUrl: `https://travelorange.${BASE_URL}`,
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
    <Box
      fontSize="xl"
      pb={8}
      d="flex"
      flexDir="column"
      alignItems="center"
      width="100%"
    >
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
        <Flex alignItems="center" justifyContent="center" width="100%">
          {mdBreakpoint && (
            <Image
              borderRadius="full"
              boxSize="200px"
              src={Pine}
              alt="Oren Scheer"
              mr={5}
            />
          )}
          <Flex
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            maxWidth="100%"
          >
            <Heading
              color={titleColor}
              fontSize={{ base: "4xl", md: "6xl" }}
              mt={3}
              mb={4}
              d="flex"
            >
              {!mdBreakpoint && (
                <Image
                  borderRadius="full"
                  boxSize="45px"
                  src={Pine}
                  alt="Oren Scheer"
                  mr={5}
                />
              )}
              Oren Scheer
            </Heading>
            <Flex
              spaceBetween={2}
              ml={2}
              justifyContent="space-between"
              width={{ md: "460px" }}
              direction={{ base: "column", md: "row" }}
            >
              <Link
                href="https://linkedin.com/in/orenscheer"
                isExternal
                d="flex"
                mb={{ base: 1, md: 0 }}
              >
                <Button
                  leftIcon={<FaLinkedin />}
                  variant="link"
                  color={titleColor}
                  fontSize={{ base: "xl", md: "lg" }}
                >
                  LinkedIn
                </Button>
              </Link>
              {mdBreakpoint && <Text>/</Text>}
              <Link href="https://github.com/orenscheer" isExternal d="flex">
                <Button
                  leftIcon={<FaGithub />}
                  variant="link"
                  color={titleColor}
                  mb={{ base: 1, md: 0 }}
                  fontSize={{ base: "xl", md: "lg" }}
                >
                  GitHub
                </Button>
              </Link>
              {mdBreakpoint && <Text>/</Text>}
              <Link href={`mailto:contact@${BASE_URL}`} isExternal d="flex">
                <Button
                  leftIcon={<EmailIcon mt={1} />}
                  variant="link"
                  color={titleColor}
                  fontSize={{ base: "xl", md: "lg" }}
                >
                  {`contact@${BASE_URL}`}
                </Button>
              </Link>
            </Flex>
            <Text mt={3} mb={3} maxWidth="520px" mx={2}>
              I am a graduate of the University of Ottawa, where I studied{" "}
              <Link
                href="https://catalogue.uottawa.ca/en/undergrad/joint-honours-bsc-computer-science-mathematics"
                color={titleColor}
                isExternal
              >
                <Text as="u">computer science and math</Text>
              </Link>
              . I am currently a software engineer in{" "}
              <Link
                href="https://engineering.linkedin.com/teams/data/data-infrastructure"
                color={titleColor}
                isExternal
              >
                <Text as="u">data infra at LinkedIn</Text>
              </Link>
              . Some of my projects can be found below!
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
