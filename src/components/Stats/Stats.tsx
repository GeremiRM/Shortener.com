import React from "react";
import { Box, Heading, Text, Stack, Flex } from "@chakra-ui/react";
import { Wrapper } from "../Wrapper";
import { StatsCard } from "./StatsCard";

import { CARDS_INFO } from "./StatsCardsInfo";

export const Stats: React.FC<{}> = ({}) => {
  const renderCards = () => {
    return CARDS_INFO.map((card, idx, array) => (
      <Box key={card.heading}>
        <StatsCard {...card} />
        {idx < array.length - 1 ? (
          <Box
            w="10px"
            position="absolute"
            h="200px"
            left="calc(50% - 6px)"
            bg={"bgCyan"}
            zIndex={1}
          ></Box>
        ) : null}
      </Box>
    ));
  };

  return (
    <Wrapper>
      <Box textAlign={"center"} fontFamily={"serif"} pb="4rem">
        <Stack spacing={4} alignItems={"center"}>
          <Heading
            as="h2"
            fontWeight={700}
            fontFamily={"serif"}
            fontSize={{ base: "1.75rem", md: "2.5rem" }}
            color="hsl(255, 11%, 22%)"
          >
            Advanced Statistics
          </Heading>
          <Text
            fontSize="16px"
            color="hsl(257, 7%, 63%)"
            lineHeight="1.75rem"
            maxW="450px"
          >
            Track how your links are performing across the web with out advanced
            statistics dashboard
          </Text>
          <Flex direction="column" align={"center"} justify={"center"}>
            {renderCards()}
          </Flex>
        </Stack>
      </Box>
    </Wrapper>
  );
};
