import { useState } from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  Image,
  IconButton,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export const Header: React.FC<{}> = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Flex
      justifyContent="space-between"
      height="100px"
      px="1.5rem"
      align="center"
      w="100%"
    >
      <Box cursor="pointer">
        <Link href="/">
          <Image src="./shared/desktop/logo-dark.png" w="200px" />
        </Link>
      </Box>
      <Box pb="1rem">
        <IconButton
          aria-label="navigation links"
          icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={handleClick}
        ></IconButton>
        <Box
          display={isMenuOpen ? "block" : "none"}
          position="absolute"
          w="100%"
          bg="black"
          h="250px"
          left="0"
          color="white"
          top="100px"
        >
          <UnorderedList
            listStyleType="none"
            fontSize="24px"
            py="1rem"
            pl="1.5rem"
            textTransform="uppercase"
            fontWeight="400"
            height="100%"
            display="flex"
            justifyContent="space-evenly"
            flexDirection="column"
            letterSpacing="1.5px"
          >
            <ListItem>
              <Link href="/company">Our Company</Link>
            </ListItem>
            <ListItem>
              <Link href="/locations">Locations</Link>
            </ListItem>
            <ListItem>
              <Link href="/contact">Contact</Link>
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Flex>
  );
};
