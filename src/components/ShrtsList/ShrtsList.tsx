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
  return (
    <Wrapper width="100%" px="5%">
      <Box
        maxH="600px"
        overflowY={"scroll"}
        mt="8"
        mb="3.5rem"
        boxShadow={"inner"}
      >
        <Stack spacing="6">
          {links.map(({ original, shortened }) => (
            <ShrtsListCard
              original={original}
              shrt={shortened}
              key={original}
            />
          ))}
        </Stack>
      </Box>
    </Wrapper>
  );
};
