import { Box } from "@chakra-ui/react";
import { Wrapper } from "../Wrapper";
import { FooterCard } from "./FooterCard";
import { FooterInfo } from "./FooterInfo";

export const Footer: React.FC<{}> = ({}) => {
  return (
    <Box bg="#1D1C1E" mt="19rem" pb="3rem" textAlign="center">
      <Wrapper>
        <FooterCard />
        <FooterInfo />
      </Wrapper>
    </Box>
  );
};
