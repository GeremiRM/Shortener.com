import React from "react";
import { Box, Text, Stack } from "@chakra-ui/react";
import { ButtonComp } from "../ButtonComp";

interface ShrtsListCardProps {
  original: string;
  shrt: string;
}

export const ShrtsListCard: React.FC<ShrtsListCardProps> = ({
  original,
  shrt,
}) => {
  return (
    <Box bg="white" borderRadius={6}>
      <Text p="3.5" overflow={"hidden"} isTruncated>
        {original}
      </Text>
      <Stack p="3.5" borderTop={"1px solid black"}>
        <Text color="bgCyan">{shrt}</Text>
        <ButtonComp bgColor="bgCyan" text="Copy" color="white"></ButtonComp>
      </Stack>
    </Box>
  );
};
