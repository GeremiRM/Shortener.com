import { ReactNode } from "react";

import {
  Box,
  Flex,
  Link,
  Stack,
  useDisclosure,
  IconButton,
  StackDivider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Wrapper } from "../Wrapper";

const NavLinks = ["Features", "Pricing", "Resources"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link href="#">{children}</Link>
);

export const NavBar: React.FC<{}> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const renderLinks = (links: Array<string>) => {
    return links.map((link) => <NavLink key={link}>{link}</NavLink>);
  };

  return (
    <Wrapper width="100%" px="5%">
      <Flex align={"center"} justifyContent={"space-between"}>
        <img src="images/logo.svg" alt="Shortly Logo" />
        <Box>
          <IconButton
            aria-label="nav-button"
            icon={!isOpen ? <HamburgerIcon /> : <CloseIcon />}
            onClick={isOpen ? onClose : onOpen}
            display={{ md: "none" }}
          />
          {isOpen ? (
            <Stack
              as={"nav"}
              divider={<StackDivider borderColor="hsl(257, 7%, 33%)" />}
              display={{ md: "none" }}
              bg={"bgDarkViolet"}
              fontWeight="700"
              color={"white"}
              position={"absolute"}
              left={0}
              w={"90%"}
              mx={"5%"}
              mt={8}
              borderRadius={12}
              textAlign="center"
              p={10}
              fontFamily={"inherit"}
            >
              <Stack spacing={6} mb={8}>
                {renderLinks(NavLinks)}
              </Stack>
              <Stack spacing={6} mt={8}>
                <Link href="#">Login</Link>
                <Link
                  href="#"
                  display="block"
                  p={"2"}
                  bg={"bgCyan"}
                  borderRadius={50}
                >
                  Sign Up
                </Link>
              </Stack>
            </Stack>
          ) : null}
        </Box>
      </Flex>
    </Wrapper>
  );
};
