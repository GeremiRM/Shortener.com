import React from "react";
import { Box } from "@chakra-ui/react";

interface WrapperProps {
  px?: string;
}

export const Wrapper: React.FC<WrapperProps> = ({ children, ...props }) => {
  return (
    <Box width={{ base: "90%", lg: "80%" }} mx="auto" {...props}>
      {children}
    </Box>
  );
};
