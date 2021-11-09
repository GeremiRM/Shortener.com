import React, { useEffect } from "react";
import { Box, Heading, Text, Stack, Grid } from "@chakra-ui/react";
import { Wrapper } from "../General/Wrapper";
import { StatsCard } from "./StatsCards";

import { CARDS_INFO } from "./StatsCardInfo";

import Aos from "aos";
import "aos/dist/aos.css";

export const Stats: React.FC<{}> = ({}) => {
  const renderCards = () => {
    return CARDS_INFO.map((card, idx) => (
      <Box
        key={card.heading}
        position="relative"
        mt={20}
        data-aos={`${idx % 2 === 0 ? "flip-left" : "flip-right"}`}
      >
        <StatsCard {...card} idx={idx} />
      </Box>
    ));
  };

  useEffect(() => {
    Aos.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <Wrapper>
      <Box fontFamily={"serif"} pb="4rem" textAlign={"center"}>
        <Stack spacing={4} alignItems={"center"}>
          <Heading
            as="h2"
            fontWeight={700}
            fontFamily={"serif"}
            fontSize={{ base: "1.75rem", md: "2.5rem", lg: "3rem" }}
            color="hsl(255, 11%, 22%)"
          >
            Advanced Statistics
          </Heading>
          <Text
            color="hsl(257, 7%, 63%)"
            lineHeight="1.75rem"
            maxW={{ base: "450px", lg: "500px" }}
            fontSize={{ xxl: "18px" }}
          >
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </Text>
          <Box position="relative" textAlign={{ base: "center", xl: "left" }}>
            <Box
              w={{ base: "6px", lg: "80%" }}
              position="absolute"
              h={{ base: "80%", lg: "6px" }}
              top={{ base: "10%", lg: "55%" }}
              left={{ base: "calc(50% - 4px)", lg: "0" }}
              bg={"bgCyan"}
              data-aos="fade"
              data-aos-delay="1000"
            ></Box>
            <Grid
              gridTemplateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
              gap={"2rem"}
              zIndex={1}
              position="relative"
            >
              {renderCards()}
            </Grid>
          </Box>
        </Stack>
      </Box>
    </Wrapper>
  );
};
