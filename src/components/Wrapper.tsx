import React from "react";
import { Box } from "@chakra-ui/react";

interface WrapperProps {
  width: string;
  px?: string;
  py?: string;
  bg?: string;
}

export const Wrapper: React.FC<WrapperProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};
