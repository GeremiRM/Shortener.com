import { Box, Heading, Stack, Image, Text } from "@chakra-ui/react";
import React from "react";

interface DesignCardProps {
  cardInfo: {
    image: string;
    heading: string;
    desc: string;
  };
}

export const DesignCard: React.FC<DesignCardProps> = ({ cardInfo }) => {
  return (
    <Stack
      textAlign="center"
      boxShadow="0 0 20px rgba(0,0,0,0.25), 0 0 50px rgba(0,0,0,0.25)"
      border="none"
      borderRadius="8px"
    >
      <Box borderRadius="inherit">
        <Image src={cardInfo.image} borderRadius="inherit" />
      </Box>
      <Box p="3rem 2rem" bg="rgb(253, 243, 240)" borderRadius="inherit">
        <Heading
          textTrasform="uppercase"
          color="#E7816B"
          fontFamily="inherit"
          fontWeight="500"
          fontSize="1.25rem"
          letterSpacing="5px"
          textTransform="uppercase"
          mb="1rem"
        >
          {cardInfo.heading}
        </Heading>
        <Text fontSize="0.9rem">{cardInfo.desc}</Text>
      </Box>
    </Stack>
  );
};
