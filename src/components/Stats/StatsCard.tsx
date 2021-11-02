import React from "react";
import { Box, Flex, Stack, Heading, Image, Text } from "@chakra-ui/react";

interface StatsCardProps {
  img: string;
  heading: string;
  desc: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ img, heading, desc }) => {
  return (
    <Box>
      <Flex
        direction="column"
        align={"center"}
        position={"relative"}
        zIndex={10}
      >
        <Box
          bg="bgDarkViolet"
          p="5"
          borderRadius={"50%"}
          width={"fit-content"}
          position={"relative"}
          top="2.5rem"
        >
          <Image src={img}></Image>
        </Box>
        <Stack
          bg="white"
          w="100%"
          p="4.5rem 2rem 3rem"
          textAlign={"center"}
          spacing="5"
        >
          <Heading
            as="h3"
            fontWeight={700}
            fontSize="1.5rem"
            fontFamily="serif"
          >
            {heading}
          </Heading>
          <Text
            fontSize={"16px"}
            lineHeight={"1.75rem"}
            color="hsl(257, 7%, 63%)"
          >
            {desc}
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};
