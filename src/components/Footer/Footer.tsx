import React from "react";
import { Box, Flex, Heading, Grid, Image, HStack } from "@chakra-ui/react";
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
    <Wrapper bg="hsl(255, 11%, 22%)" width="100%">
      <Flex
        direction={{ base: "column", sm: "column" }}
        color="white"
        textAlign="center"
        py="2rem"
      >
        <Heading
          as="h3"
          fontSize="2rem"
          fontFamily={"Poppins"}
          fontWeight="700"
          py="1rem"
        >
          Shortly
        </Heading>
        <Grid>
          {renderLinks()}
          <HStack
            align={"center"}
            justify={"center"}
            pt="3rem"
            pb="1.5rem"
            spacing={"1.5rem"}
          >
            <Image href="#" src="/images/icon-facebook.svg" />
            <Image href="#" src="/images/icon-twitter.svg" />
            <Image href="#" src="/images/icon-pinterest.svg" />
            <Image href="#" src="/images/icon-instagram.svg" />
          </HStack>
        </Grid>
      </Flex>
    </Wrapper>
  );
};
