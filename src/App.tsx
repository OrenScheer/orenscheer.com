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
} from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/all";
import ColorModeSwitcher from "./ColorModeSwitcher";
import Pine from "./images/Pine.png";

const App: React.FC = () => {
  const titleColour = useColorModeValue("#458EB2", "#87CDE5");
  return (
    <Box
      textAlign="center"
      fontSize="xl"
      pb={8}
      d="flex"
      flexDir="column"
      alignItems="center"
    >
      <Flex width="100%" zIndex="9" pos="sticky" top="0">
        <Flex
          width="100%"
          justifyContent="flex-end"
          pt={6}
          pb={6}
          px={8}
          height="100px"
          alignItems="flex-end"
        >
          {/* <Heading d="flex" alignItems="center" color="#38B2AC" size="2xl">
          <Image
            borderRadius="full"
            boxSize="40px"
            src={Pine}
            alt="Oren Scheer"
            me={3}
          />
          Oren Scheer
        </Heading> */}
          <ColorModeSwitcher zIndex="9" />
        </Flex>
      </Flex>
      <Flex direction="column" alignItems="center" justifyContent="center">
        <Image
          borderRadius="full"
          boxSize="150px"
          src={Pine}
          alt="Oren Scheer"
        />
        <Heading color={titleColour} size="3xl" mt={3} mb={4}>
          Oren Scheer
        </Heading>
        <Flex justifyContent="space-between" width="450px">
          <Link href="https://linkedin.com/in/orenscheer" isExternal>
            <Button
              leftIcon={<FaLinkedin />}
              variant="link"
              color={titleColour}
            >
              LinkedIn
            </Button>
          </Link>
          <Text>/</Text>
          <Link href="https://github.com/orenscheer" isExternal>
            <Button leftIcon={<FaGithub />} variant="link" color={titleColour}>
              GitHub
            </Button>
          </Link>
          <Text>/</Text>
          <Link href="mailto:contact@orenscheer.me" isExternal>
            <Button
              leftIcon={<FaEnvelope />}
              variant="link"
              color={titleColour}
            >
              contact@orenscheer.me
            </Button>
          </Link>
        </Flex>
        <Text mt={3} mb={3} width="420px">
          I&apos;m in my third year at the University of Ottawa, studying
          computer science and math.
        </Text>
        <Flex direction="column" alignItems="center">
          <Link href="https://nextavailableread.orenscheer.me">
            <Button variant="outline" colorScheme="teal">
              NextAvailableRead
            </Button>
          </Link>
          <Link
            href="https://github.com/orenscheer/find-my-representatives"
            isExternal
            mt={3}
            mb={3}
          >
            <Button variant="outline" colorScheme="blue">
              Find My Representatives
            </Button>
          </Link>
          <Link href="https://travelorange.orenscheer.me" isExternal>
            <Button variant="outline" colorScheme="orange">
              Travel Orange
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default App;
