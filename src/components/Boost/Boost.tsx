import React from "react";
import { Box, Stack, Heading } from "@chakra-ui/react";
import { Wrapper } from "../General/Wrapper";
import { ButtonComp } from "../General/ButtonComp";

export const Boost: React.FC<{}> = ({}) => {
  return (
    <Box
      bg={{
        base: "url(/bg/boost-mobile.svg) left/cover no-repeat  hsl(257, 27%, 26%)",
        md: "url(/bg/boost-desktop.svg) left/cover no-repeat  hsl(257, 27%, 26%)",
      }}
    >
      <Wrapper>
        <Stack
          spacing={{ base: 5, md: 8 }}
          textAlign="center"
          color="white"
          height={{ base: "300px", sm: "200px" }}
          display="flex"
          direction="column"
          align="center"
          justify="center"
        >
          <Heading
            as="h3"
            fontWeight={700}
            fontFamily="Poppins"
            fontSize={{ base: "1.5rem", md: "2.25rem" }}
          >
            Boost your links today
          </Heading>
          <ButtonComp
            bgColor="bgCyan"
            color="white"
            text="Get Started"
            borderRadius="50px"
            padding="1.5rem"
            width="200px"
          ></ButtonComp>
        </Stack>
      </Wrapper>
    </Box>
  );
};
