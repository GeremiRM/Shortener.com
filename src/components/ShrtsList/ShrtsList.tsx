import React from "react";
import { Stack, Box } from "@chakra-ui/react";
import { Wrapper } from "../Wrapper";
import { ShrtsListCard } from "./ShrtsListCard";

interface ShrtsListProps {
  links: Links[];
}

interface Links {
  original: string;
  shortened: string;
}

export const ShrtsList: React.FC<ShrtsListProps> = ({ links }) => {
  const renderLinks = () => {
    return links.map(({ original, shortened }, idx) => (
      <ShrtsListCard original={original} shrt={shortened} key={idx} />
    ));
  };

  return (
    <Wrapper>
      <Box
        maxH={{ base: "600px", md: "300px" }}
        overflowY={"auto"}
        mt="8"
        mb="3.5rem"
        boxShadow={"inner"}
      >
        <Stack spacing="6">{renderLinks()}</Stack>
      </Box>
    </Wrapper>
  );
};
