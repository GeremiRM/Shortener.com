import { Box } from "@chakra-ui/react";

import Head from "next/head";

import { Header } from "../components/Header/Header";
import { Features } from "../components/Home/Features";
import { Hero } from "../components/Home/Hero";
import { Projects } from "../components/Home/Projects";
import { Footer } from "../components/Footer/Footer";

export const Index: React.FC<{}> = ({}) => {
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
      <Box fontFamily="Jost" fontSize="16px">
        <Header />
        <Hero />
        <Projects />
        <Features />
        <Footer />
      </Box>
    </Box>
  );
};

export default Index;
