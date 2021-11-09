import { Box, Grid, Heading, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Wrapper } from "../Wrapper";

export const Projects: React.FC<{}> = ({}) => {
  return (
    <Box mt="6rem">
      <Wrapper>
        <Grid
          templateColumns="330px"
          templateRows="repeat(3, 250px)"
          gap="2rem"
          justifyContent="center"
        >
          <Link href="/webdesign">
            <Box
              bg="url(./home/mobile/image-web-design.jpg) no-repeat center"
              borderRadius="20px"
              color="white"
              display="flex"
              textAlign="center"
              justifyContent="center"
              flexDirection="column"
              textTransform="uppercase"
              position="relative"
            >
              <Box
                bg="rgba(0,0,0,0.25)"
                position="absolute"
                h="100%"
                w="100%"
                borderRadius="inherit"
                display="flex"
                justifyContent="center"
                flexDirection="column"
                transition="0.25s"
                cursor="pointer"
                _hover={{ bg: "rgba(231, 129, 107, 0.7)" }}
              >
                <Heading
                  fontFamily="Jost"
                  fontWeight="500"
                  letterSpacing="1px"
                  fontSize="1.75rem"
                >
                  Web Design
                </Heading>
                <Flex align="center" justify="center" mt="1rem">
                  <Text
                    letterSpacing="5px"
                    fontWeight="600"
                    fontSize="0.9rem"
                    mr="1rem"
                  >
                    View Projects
                  </Text>
                  <Image src="/shared/desktop/icon-right-arrow.svg" w="8px" />
                </Flex>
              </Box>
            </Box>
          </Link>
          <Box
            bg="url(./home/mobile/image-app-design.jpg) no-repeat center"
            borderRadius="20px"
            color="white"
            display="flex"
            textAlign="center"
            justifyContent="center"
            flexDirection="column"
            textTransform="uppercase"
            position="relative"
          >
            <Box
              bg="rgba(0,0,0,0.25)"
              position="absolute"
              h="100%"
              w="100%"
              borderRadius="inherit"
              display="flex"
              justifyContent="center"
              flexDirection="column"
              transition="0.25s"
              cursor="pointer"
              _hover={{ bg: "rgba(231, 129, 107, 0.7)" }}
            >
              <Heading
                fontFamily="Jost"
                fontWeight="500"
                letterSpacing="1px"
                fontSize="1.75rem"
              >
                App Design
              </Heading>
              <Flex align="center" justify="center" mt="1rem">
                <Text
                  letterSpacing="5px"
                  fontWeight="600"
                  fontSize="0.9rem"
                  mr="1rem"
                >
                  View Projects
                </Text>
                <Image src="/shared/desktop/icon-right-arrow.svg" w="8px" />
              </Flex>
            </Box>
          </Box>
          <Box
            bg="url(./home/mobile/image-graphic-design.jpg) no-repeat center"
            borderRadius="20px"
            color="white"
            textAlign="center"
            textTransform="uppercase"
            position="relative"
          >
            <Box
              zIndex="4"
              bg="rgba(0,0,0,0.25)"
              position="absolute"
              h="100%"
              w="100%"
              borderRadius="inherit"
              display="flex"
              justifyContent="center"
              flexDirection="column"
              transition="0.25s"
              cursor="pointer"
              _hover={{ bg: "rgba(231, 129, 107, 0.7)" }}
            >
              <Heading
                fontFamily="Jost"
                fontWeight="500"
                letterSpacing="1px"
                fontSize="1.75rem"
              >
                Graphic Design
              </Heading>
              <Flex align="center" justify="center" mt="1rem">
                <Text
                  letterSpacing="5px"
                  fontWeight="600"
                  fontSize="0.9rem"
                  mr="1rem"
                >
                  View Projects
                </Text>
                <Image src="/shared/desktop/icon-right-arrow.svg" w="8px" />
              </Flex>
            </Box>
          </Box>
        </Grid>
      </Wrapper>
    </Box>
  );
};
