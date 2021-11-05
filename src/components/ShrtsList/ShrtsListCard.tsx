import React from "react";
import { Box, Text, Flex, useClipboard } from "@chakra-ui/react";
import { ButtonComp } from "../General/ButtonComp";

interface ShrtsListCardProps {
  original: string;
  shrt: string;
}

export const ShrtsListCard: React.FC<ShrtsListCardProps> = ({
  original,
  shrt,
}) => {
  const { hasCopied, onCopy } = useClipboard(shrt);
  return (
    <Box
      bg="white"
      borderRadius={6}
      display="flex"
      flexDir={{ base: "column", md: "row" }}
      alignItems={{ md: "center" }}
      justifyContent={{ md: "space-between" }}
    >
      <Text
        p="3.5"
        px={{ sm: "2.5rem", md: "3rem" }}
        overflow={"hidden"}
        isTruncated
      >
        {original}
      </Text>
      <Flex
        direction={{ base: "column", sm: "row" }}
        p="3.5"
        borderTop={{ base: "1px solid hsl(257, 7%, 85%)", md: "0" }}
        justify={{ sm: "space-between" }}
        align={{ sm: "center" }}
        px={{ sm: "2.5rem", md: "3rem" }}
      >
        <Text
          as="a"
          href={shrt}
          target="_blank"
          color="bgCyan"
          mb={{ base: "1rem", sm: "0" }}
          mr={{ md: "2rem" }}
        >
          {shrt}
        </Text>
        <Box onClick={onCopy}>
          <ButtonComp
            bgColor={`${hasCopied ? "bgDarkViolet" : "bgCyan"}`}
            text={`${hasCopied ? "Copied" : "Copy"}`}
            color="white"
            width={{ base: "100%", sm: "125px" }}
          >
            {hasCopied ? "Copied" : "Copy"}
          </ButtonComp>
        </Box>
      </Flex>
    </Box>
  );
};
