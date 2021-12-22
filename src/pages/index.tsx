import React, { useState, useEffect } from "react";
import Aos from "aos";

// components
import { Box } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar/NarBar";
import { Branding } from "../components/Branding/Branding";
import { Shrt } from "../components/Shrt/Shrt";
import { ShrtsList } from "../components/ShrtsList/ShrtsList";
import { Stats } from "../components/Stats/Stats";
import { Footer } from "../components/Footer/Footer";
import { Boost } from "../components/Boost/Boost";

import "aos/dist/aos.css";

import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

interface Links {
  original: string;
  shortened: string;
}

// Maximum number of links saved in localStorage
const MAX_LINKS = 10;

const Index: React.FC<{}> = ({}) => {
  const [links, setLinks] = useState<Links[]>([]);

  const shortenLink = async (link: string) => {
    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${link}`
    ).catch(() => alert("ERROR"));

    if (response) {
      const data = await response.json();

      if (data.hasOwnProperty("result")) {
        const shortenedLink = data.result.full_short_link;
        const newLinks: Links = {
          original: link,
          shortened: shortenedLink,
        };

        setLinks([newLinks, ...links]);
      } else {
        alert("Site has been blacklisted by Shortener");
      }
    }
  };

  const setStoredLinks = () => {
    localStorage.setItem("shrtLinks", JSON.stringify(links));
  };

  const getStoredLinks = () => {
    const storedLinks = localStorage.getItem("shrtLinks");
    if (!storedLinks) {
      localStorage.setItem("shrtLinks", JSON.stringify([]));
    } else {
      setLinks(JSON.parse(storedLinks).slice(0, MAX_LINKS));
    }
  };

  useEffect(() => {
    getStoredLinks();
    Aos.init({ duration: 500, once: true });
  }, []);

  useEffect(() => {
    setStoredLinks();
  }, [links]);
  return (
    <Box minW="340px">
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
        <Box>
          <Stats />
        </Box>
        <Box data-aos="fade-up">
          <Boost />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
