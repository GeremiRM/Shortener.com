import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar/NavBar";
import { Branding } from "../components/Branding/Branding";
import { Shrt } from "../components/Shrt/Shrt";
import { ShrtsList } from "../components/ShrtsList/ShrtsList";
import { Stats } from "../components/Stats/Stats";
import { Footer } from "../components/Footer/Footer";
import { Boost } from "../components/Boost/Boost";

import Aos from "aos";
import "aos/dist/aos.css";

import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

// import { useInView } from "react-intersection-observer";

interface Links {
  original: string;
  shortened: string;
}

const Index: React.FC<{}> = ({}) => {
  const [links, setLinks] = useState<Links[]>([]);

  const shortenLink = async (link: string) => {
    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${link}`
    ).catch(() => alert("ERROR"));

    if (response) {
      const data = await response.json();
      const shortenedLink = data.result.full_short_link;
      const newLinks: Links = { original: link, shortened: shortenedLink };
      setLinks([newLinks, ...links]);
    }
  };

  useEffect(() => {
    Aos.init({ duration: 500, once: true });
  }, []);

  return (
    <Box>
      <Box
        data-aos="fade"
        data-aos-delay="250"
        data-aos-duration="1000"
        pt={10}
        fontSize={{ base: "16px", lg: "18px" }}
        fontFamily={"serif"}
      >
        <NavBar />
        <Branding />
      </Box>
      <Box bg="hsl(257, 7%, 93%)" position={"relative"} data-aos="fade-down">
        <Shrt shortenLink={shortenLink} />
        <ShrtsList links={links} />
        <Box data-aos="zoom-in-up">
          <Stats />
        </Box>
        <Box data-aos="fade-up">
          <Boost data-aos="fade-up" />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
