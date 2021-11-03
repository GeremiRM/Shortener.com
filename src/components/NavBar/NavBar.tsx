import { ReactNode } from "react";

import {
  Box,
  Flex,
  Link,
  Stack,
  useDisclosure,
  IconButton,
  StackDivider,
  HStack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Wrapper } from "../Wrapper";

const NavLinks = ["Features", "Pricing", "Resources"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link _hover={{ color: "hsl(255, 11%, 22%)" }} href="#">
    {children}
  </Link>
);

export const NavBar: React.FC<{}> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const renderLinks = (links: Array<string>) => {
    return links.map((link) => <NavLink key={link}>{link}</NavLink>);
  };

  return (
    <Box>
      <Wrapper>
        <Flex
          align={"center"}
          justifyContent={{ base: "space-between", sm: "flex-start" }}
        >
          <Image src="images/logo.svg" alt="Shortly Logo" />
          <Box flex={{ sm: "1" }} justify="center">
            <IconButton
              aria-label="Navigation Button"
              icon={!isOpen ? <HamburgerIcon /> : <CloseIcon />}
              onClick={isOpen ? onClose : onOpen}
              display={{ sm: "none" }}
            />

            <Flex
              flex="1"
              ml="2rem"
              display={{ base: "none", sm: "flex" }}
              fontSize={{ base: "18px", sm: "14px" }}
              color="textGray"
              fontWeight={700}
            >
              <HStack
                spacing={{ base: 5, md: 8 }}
                display="flex"
                align="center"
                justify="center"
              >
                {renderLinks(NavLinks)}
              </HStack>
              <HStack
                spacing={{ base: 5, md: 8 }}
                display="flex"
                align="center"
                justify="center"
                ml="auto"
              >
                <Link _hover={{ color: "hsl(255, 11%, 22%)" }} href="#">
                  Login
                </Link>
                <Link
                  href="#"
                  display="block"
                  p={{ base: "0.5rem 1rem", sm: "0.5rem 1.5rem" }}
                  bg={"bgCyan"}
                  borderRadius={50}
                  color="white"
                  _hover={{ bg: "hsl(180, 66%, 69%)" }}
                >
                  Sign Up
                </Link>
              </HStack>
            </Flex>

            {isOpen ? (
              <Stack
                as={"nav"}
                divider={<StackDivider borderColor="hsl(257, 7%, 33%)" />}
                display={{ sm: "none" }}
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
    </Box>
  );
};
