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
import { Wrapper } from "../General/Wrapper";

const NavLinks = ["Features", "Pricing", "Resources"];

const hoverStyle = {
  color: { base: "hsl(255, 11%, 60%)", sm: "hsl(255, 11%, 22%)" },
};

export const NavBar: React.FC<{}> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavLink = ({ children }: { children: ReactNode }) => (
    <Link _hover={hoverStyle} href="#">
      {children}
    </Link>
  );

  const renderLinks = (links: Array<string>) => {
    return links.map((link) => <NavLink key={link}>{link}</NavLink>);
  };

  const userLinks = (
    <Flex
      align="center"
      justify="center"
      ml={{ sm: "auto" }}
      direction={{ base: "column", sm: "row" }}
      mt={{ base: 5, sm: 0 }}
    >
      <Box mb={{ base: 5, sm: 0 }} mr={{ sm: 5, md: 8 }}>
        <NavLink>Login</NavLink>
      </Box>

      <Link
        href="#"
        p={{ base: "0.5rem 1rem", sm: "0.5rem 1.5rem" }}
        bg={"bgCyan"}
        borderRadius={50}
        color="white"
        _hover={{ bg: "hsl(180, 66%, 69%)" }}
        width={{ base: "100%", sm: "initial" }}
      >
        Sign Up
      </Link>
    </Flex>
  );

  return (
    <Box>
      <Wrapper>
        <Flex
          align={"center"}
          justifyContent={{ base: "space-between", sm: "flex-start" }}
        >
          <Image
            src="images/logo.svg"
            alt="Shortly Logo"
            width={{ lg: "160px" }}
          />
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
              fontSize={{ base: "18px", sm: "14px", lg: "18px" }}
              color="textGray"
              fontWeight={700}
            >
              <HStack
                spacing={{ sm: 5, md: 8 }}
                display="flex"
                align="center"
                justify="center"
              >
                {renderLinks(NavLinks)}
              </HStack>
              {userLinks}
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
                zIndex={100}
              >
                <Stack spacing={6} mb={8}>
                  {renderLinks(NavLinks)}
                </Stack>
                {userLinks}
              </Stack>
            ) : null}
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  );
};
