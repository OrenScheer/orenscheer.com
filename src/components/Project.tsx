import * as React from "react";
import { ReactElement, ReactNode } from "react";

import {
  Button,
  ButtonGroup,
  Image,
  Flex,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/all";

type ProjectProps = {
  accentColor: string;
  logo: ReactNode;
  technologies: string[];
  gitHubUrl: string;
  demoUrl?: string;
  demoButtonText?: string;
  description: ReactNode;
  image: string;
};

const Project = ({
  accentColor,
  logo,
  technologies,
  gitHubUrl,
  demoUrl,
  demoButtonText,
  description,
  image,
}: ProjectProps): ReactElement => (
  <Flex
    borderColor={accentColor}
    borderWidth={4}
    height="100%"
    width="100%"
    direction={{ base: "column", lg: "row" }}
  >
    <Link href={demoUrl || gitHubUrl} isExternal flexShrink={0}>
      <Image
        height={{ base: "100%", lg: "100%" }}
        width={{ base: "100%", lg: "263px" }}
        src={image}
        borderRight={`2px solid ${accentColor}`}
      />
    </Link>
    <VStack spacing={3} ml={4} mr={2} my={3} alignItems="flex-start">
      {logo}
      <Text as="i">{technologies.join(", ")}</Text>
      {description}
      <ButtonGroup spacing={2}>
        {demoUrl && (
          <Link href={demoUrl} isExternal>
            <Button leftIcon={<FaExternalLinkAlt />}>{demoButtonText}</Button>
          </Link>
        )}
        <Link href={gitHubUrl} isExternal>
          <Button leftIcon={<FaGithub />}>GitHub</Button>
        </Link>
      </ButtonGroup>
    </VStack>
  </Flex>
);

Project.defaultProps = { demoUrl: "", demoButtonText: "" };

export default Project;
