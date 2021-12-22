import { Box, Flex, Heading, Grid, Stack, Icon } from "@chakra-ui/react";
import { Wrapper } from "../General/Wrapper";
import { FOOTER_LINKS } from "./FooterLinksList";
import { FooterLinks } from "./FooterLinks";

import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

import { FaPinterest } from "react-icons/fa";

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
            fontSize={{ base: "2rem", xxl: "3rem" }}
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
              pb={{ base: "1.5rem", sm: "0" }}
              direction={{ sm: "column", lg: "row" }}
              width="40%"
              maxW={"400px"}
              mx="auto"
              spacing={{ base: "1.75rem", lg: "1.25rem" }}
            >
              <Icon
                height="30px"
                width="30px"
                as={AiFillFacebook}
                color="white"
                _hover={{ color: "bgCyan", cursor: "pointer" }}
              />
              <Icon
                height="30px"
                width="30px"
                as={AiOutlineTwitter}
                color="white"
                _hover={{ color: "bgCyan", cursor: "pointer" }}
              />
              <Icon
                height="30px"
                width="30px"
                as={FaPinterest}
                color="white"
                _hover={{ color: "bgCyan", cursor: "pointer" }}
              />
              <Icon
                height="30px"
                width="30px"
                as={AiOutlineInstagram}
                color="white"
                _hover={{ color: "bgCyan", cursor: "pointer" }}
              />
            </Stack>
          </Grid>
        </Flex>
      </Wrapper>
    </Box>
  );
};
