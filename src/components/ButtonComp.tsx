import React from "react";
import { Button } from "@chakra-ui/react";

interface ButtonProps {
  bgColor: string;
  text: string;
  color: string;
  borderRadius?: string;
  padding?: string;
  fontWeight?: number;
  type?: "submit" | "button";
  disabled?: boolean;
  width?: any;
  isLoading?: boolean;
  onCopy?: any;
  height?: string;
}

export const ButtonComp: React.FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <Button {...props} fontSize="18px">
      {text}
    </Button>
  );
};
