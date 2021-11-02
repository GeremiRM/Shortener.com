import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar/NavBar";
import { Branding } from "../components/Branding/Branding";
import { Shrt } from "../components/Shrt/Shrt";
import { ShrtsList } from "../components/ShrtsList/ShrtsList";
import { Stats } from "../components/Stats/Stats";

import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

interface IndexProps {}

interface Links {
  original: string;
  shortened: string;
}

const Index: React.FC<IndexProps> = ({}) => {
  const [links, setLinks] = useState<Links[]>([]);

  const shortenLink = async (link: string) => {
    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${link}/very/long/link.html`
    ).catch(() => alert("ERROR"));

    if (response) {
      const data = await response.json();
      const shortenedLink = data.result.full_short_link;
      const newLinks: Links = { original: link, shortened: shortenedLink };
      setLinks([newLinks, ...links]);
    }
  };

  return (
    <Box pt={10} pb={1000} fontSize={"18px"} fontFamily={"serif"}>
      <NavBar />
      <Branding />
      <Box bg="hsl(257, 7%, 93%)" position={"relative"}>
        <Shrt shortenLink={shortenLink} />
        <ShrtsList links={links} />
        <Stats />
      </Box>
    </Box>
  );
};

export default Index;
