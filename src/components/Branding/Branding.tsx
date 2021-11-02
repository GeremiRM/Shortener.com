import React from "react";
import { Box, Text, Heading, Stack } from "@chakra-ui/react";
import { ButtonComp } from "../ButtonComp";

export const Branding: React.FC<{}> = ({}) => {
  return (
    <Box overflow={"hidden"} mt="5">
      <Box
        bg="url(../images/illustration-working.svg) left/cover no-repeat"
        position="relative"
        left="7.5%"
        w="100%"
        h="350px"
        zIndex={-1}
        mb={5}
      ></Box>
      <Stack
        spacing={5}
        mb="20"
        width="85%"
        mx="auto"
        textAlign={"center"}
        display={"flex"}
        align={"center"}
        justifyContent={"center"}
      >
        <Heading
          as="h1"
          size="2xl"
          fontFamily={"inherit"}
          fontWeight={700}
          color="- Grayish Violet: hsl(257, 7%, 63%)"
        >
          More than just shorter links
        </Heading>
        <Text color="hsl(257, 7%, 63%)" pb="2">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </Text>
        <ButtonComp
          bgColor="bgCyan"
          color="white"
          width="60%"
          text="Get Started"
          borderRadius="50"
          padding="1.75rem"
          fontWeight={700}
        ></ButtonComp>
      </Stack>
    </Box>
  );
};
