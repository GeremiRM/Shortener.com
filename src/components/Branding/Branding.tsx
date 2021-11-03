import React from "react";
import { Box, Text, Heading, Stack, Flex } from "@chakra-ui/react";
import { ButtonComp } from "../ButtonComp";

export const Branding: React.FC<{}> = ({}) => {
  return (
    <Flex
      overflow={"hidden"}
      mt={{ base: 5, md: 20 }}
      mb={{ base: 10, md: 20 }}
      direction={{ base: "column", md: "row-reverse" }}
    >
      <Box
        bg="url(../images/illustration-working.svg) no-repeat"
        bgSize={{ base: "contain", md: "cover" }}
        bgPosition={{ base: "right", md: "left" }}
        position="relative"
        left={{ base: "5%", md: "0" }}
        w={{ base: "450px", md: "800px", xl: "70vw" }}
        minH={{ base: "300px", md: "none", xl: "500px" }}
        mx="auto"
        // maxH={{ md: "400px", xl: "500px" }}
        // maxW={{ lg: "550px" }}
        zIndex={-1}
      ></Box>
      <Box pl={{ base: "5%", lg: "10%" }}>
        <Stack
          spacing={{ base: 3 }}
          mt="10"
          mb={{ base: "20", xl: "10" }}
          pb={{ xl: 100 }}
          mx="auto"
          textAlign={{ base: "center", md: "left" }}
          display={"flex"}
          align={{ base: "center", md: "flex-start" }}
          justifyContent={{ base: "center" }}
          height="100%"
        >
          <Heading
            as="h1"
            fontSize={{ base: "2.5rem", md: "5xl", lg: "5vw" }}
            fontFamily={"inherit"}
            fontWeight={700}
            color="hsl(255, 11%, 22%)"
          >
            More than just shorter links
          </Heading>
          <Text
            color="hsl(257, 7%, 63%)"
            pb="2"
            lineHeight={"2rem"}
            fontSize={{ base: "18px", lg: "20px" }}
            maxW="500px"
          >
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
      </Box>
    </Flex>
  );
};
