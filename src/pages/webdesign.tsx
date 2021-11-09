import { Box, Stack, Heading, Text } from "@chakra-ui/react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

import Head from "next/head";
import { Designs } from "../components/Designs/Designs";

import { webDesignInfo as info } from "../data/webdesign";

const WebDesign: React.FC<{}> = ({}) => {
  return (
    <Box>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Box>
        <Stack
          h="320px"
          bg="rgb(237, 128, 105)"
          color="white"
          align="center"
          justify="center"
          textAlign="center"
          px="3rem"
          pb="0.5rem"
        >
          <Heading fontFamily="Jost" mb="1rem">
            Web Design
          </Heading>
          <Text fontSize="0.9rem" px="1rem" lineHeight="1.5rem">
            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences.
          </Text>
        </Stack>
        <Designs info={info} />
      </Box>
      <Footer />
    </Box>
  );
};

export default WebDesign;
