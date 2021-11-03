import React from "react";
import { Box, Text, Heading, Stack, Flex } from "@chakra-ui/react";
import { ButtonComp } from "../ButtonComp";
import { Wrapper } from "../Wrapper";

export const Branding: React.FC<{}> = ({}) => {
  return (
    <Flex
      overflow={"hidden"}
      mt="5"
      direction={{ base: "column", sm: "row-reverse" }}
    >
      <Box
        bg="url(../images/illustration-working.svg) left/cover no-repeat"
        position="relative"
        left="5%"
        w="100%"
        height={{ base: "300px", sm: "50vw", md: "600px" }}
        zIndex={-1}
        mb={10}
      ></Box>
      <Wrapper px="5%">
        <Stack
          spacing={{ base: 3, sm: 6 }}
          mb="20"
          mx="auto"
          textAlign={{ base: "center", md: "left" }}
          display={"flex"}
          align={{ base: "center", md: "flex-start" }}
          justifyContent={{ base: "center" }}
          height="100%"
        >
          <Heading
            as="h1"
            fontSize={{ base: "2.5rem", md: "3.5rem" }}
            fontFamily={"inherit"}
            fontWeight={700}
            color="hsl(255, 11%, 22%)"
          >
            More than just shorter links
          </Heading>
          <Text color="hsl(257, 7%, 63%)" pb="2" lineHeight={"2rem"}>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </Text>
          <ButtonComp
            bgColor="bgCyan"
            color="white"
            width={{ base: "60%", md: "200px" }}
            text="Get Started"
            borderRadius="50"
            padding="1.5rem"
            fontWeight={700}
          ></ButtonComp>
        </Stack>
      </Wrapper>
    </Flex>
  );
};
