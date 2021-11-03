import React from "react";
import { Box, Heading, Text, Stack, Grid } from "@chakra-ui/react";
import { Wrapper } from "../Wrapper";
import { StatsCard } from "./StatsCard";

import { CARDS_INFO } from "./StatsCardsInfo";

export const Stats: React.FC<{}> = ({}) => {
  const renderCards = () => {
    return CARDS_INFO.map((card, idx) => (
      <Box key={card.heading} position="relative" mt={20}>
        <StatsCard {...card} idx={idx} />
      </Box>
    ));
  };

  return (
    <Wrapper>
      <Box fontFamily={"serif"} pb="4rem" textAlign={"center"}>
        <Stack spacing={4} alignItems={"center"}>
          <Heading
            as="h2"
            fontWeight={700}
            fontFamily={"serif"}
            fontSize={{ base: "1.75rem", md: "2.5rem", xl: "3rem" }}
            color="hsl(255, 11%, 22%)"
          >
            Advanced Statistics
          </Heading>
          <Text
            color="hsl(257, 7%, 63%)"
            lineHeight="1.75rem"
            maxW={{ base: "450px", xl: "500px" }}
          >
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </Text>
          <Box position="relative" textAlign={{ base: "center", xl: "left" }}>
            <Box
              w={{ base: "6px", xl: "80%" }}
              position="absolute"
              h={{ base: "80%", xl: "6px" }}
              top={{ base: "10%", xl: "55%" }}
              left={{ base: "calc(50% - 4px)", xl: "0" }}
              bg={"bgCyan"}
            ></Box>
            <Grid
              gridTemplateColumns={{ base: "1fr", xl: "repeat(3, 1fr)" }}
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
