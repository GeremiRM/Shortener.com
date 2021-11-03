import React from "react";
import { Box, Flex, Stack, Heading, Image, Text } from "@chakra-ui/react";

interface StatsCardProps {
  img: string;
  heading: string;
  desc: string;
  idx: number;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  img,
  heading,
  desc,
  idx,
}) => {
  return (
    <Flex
      direction="column"
      align={"center"}
      position={"relative"}
      zIndex={10}
      maxW={{ base: "500px" }}
      mt={{ xl: `calc(2rem * ${idx})` }}
      borderRadius={12}
    >
      <Box
        bg="bgDarkViolet"
        p="5"
        borderRadius={"50%"}
        width={"fit-content"}
        position={"absolute"}
        top="-2.5rem"
        left={{ xl: "10%" }}
        maxW="80px"
      >
        <Image src={img}></Image>
      </Box>
      <Stack
        bg="white"
        w="100%"
        p="4.5rem 2rem 3rem"
        spacing="2"
        borderRadius={12}
      >
        <Heading as="h3" fontWeight={700} fontSize="1.5rem" fontFamily="serif">
          {heading}
        </Heading>
        <Text
          fontSize={{ base: "16px" }}
          lineHeight={"1.75rem"}
          color="hsl(257, 7%, 63%)"
        >
          {desc}
        </Text>
      </Stack>
    </Flex>
  );
};
