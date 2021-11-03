import React from "react";
import { Box, Flex, Heading, Grid, Image, Stack } from "@chakra-ui/react";
import { Wrapper } from "../Wrapper";
import { FOOTER_LINKS } from "./FooterLinksList";
import { FooterLinks } from "./FooterLinks";

export const Footer: React.FC<{}> = ({}) => {
  const renderLinks = () => {
    let elements: any = [];
    for (let link in FOOTER_LINKS) {
      elements = [
        <FooterLinks heading={link} list={FOOTER_LINKS[link]} key={link} />,
        ...elements,
      ];
    }
    return elements;
  };

  return (
    <Box bg="hsl(255, 11%, 22%)">
      <Wrapper>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align={{ lg: "center" }}
          justify={{ lg: "space-between" }}
          color="white"
          textAlign={{ base: "center", lg: "left" }}
          py="2rem"
        >
          <Heading
            as="h3"
            fontSize="2rem"
            fontFamily={"Poppins"}
            fontWeight="700"
            py="1rem"
            flex={1}
          >
            Shortly
          </Heading>
          <Grid
            templateColumns={{ sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
            flex={2}
          >
            {renderLinks()}
            <Stack
              align={{ sm: "center", lg: "flex-start" }}
              justify={"space-evenly"}
              pt="4rem"
              pb={{ base: "1.5rem", sm: "0`" }}
              direction={{ sm: "column", lg: "row" }}
              width="40%"
              maxW={"400px"}
              mx="auto"
              spacing={{ base: "1.75rem", lg: "1.25rem" }}
            >
              <Image href="#" src="/images/icon-facebook.svg" />
              <Image href="#" src="/images/icon-twitter.svg" />
              <Image href="#" src="/images/icon-pinterest.svg" />
              <Image href="#" src="/images/icon-instagram.svg" />
            </Stack>
          </Grid>
        </Flex>
      </Wrapper>
    </Box>
  );
};
