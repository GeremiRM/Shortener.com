import React from "react";
import { Stack, Heading } from "@chakra-ui/react";
import { Wrapper } from "../Wrapper";
import { ButtonComp } from "../ButtonComp";

export const Boost: React.FC<{}> = ({}) => {
  return (
    <Wrapper
      width="100%"
      bg="url(/images/bg-boost-mobile.svg) left/cover no-repeat  hsl(257, 27%, 26%)"
    >
      <Stack
        spacing={5}
        textAlign="center"
        color="white"
        height="300px"
        display="flex"
        direction="column"
        align="center"
        justify="center"
      >
        <Heading
          as="h3"
          fontWeight={700}
          fontFamily="Poppins"
          fontSize={"1.5rem"}
        >
          Boost your links today
        </Heading>
        <ButtonComp
          bgColor="bgCyan"
          color="white"
          text="Get Started"
          width="50%"
          borderRadius="50px"
          padding="1.5rem"
        ></ButtonComp>
      </Stack>
    </Wrapper>
  );
};
