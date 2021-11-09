import { Box, Grid, Image, Heading, Text } from "@chakra-ui/react";
import { Wrapper } from "../Wrapper";

export const Features: React.FC<{}> = ({}) => {
  return (
    <Box mt="6rem">
      <Wrapper>
        <Grid templateColumns="330px" justifyContent="center" gap="5rem">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box position="relative" mb="3rem">
              <Box
                w="100%"
                h="100%"
                position="absolute"
                zIndex="-1"
                borderRadius="100%"
                bg="linear-gradient(90deg, rgba(93, 2, 2, 0.15) 0%, rgba(93, 2, 2, 0.0001) 100%)"
              ></Box>
              <Image src="./home/desktop/illustration-passionate.svg" />
            </Box>
            <Box textAlign="center">
              <Heading
                textTransform="uppercase"
                fontFamily="Jost"
                fontWeight="500"
                fontSize="1.25rem"
                letterSpacing="5px"
                mb="2rem"
              >
                Passionate
              </Heading>
              <Text fontSize="15px" fontWeight="500" lineHeight="1.75rem">
                Each project starts with an in-depth brand research to ensure we
                only create products that serve a purpose. We merge art, design,
                and technology into exciting new solutions.
              </Text>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box position="relative" mb="3rem">
              <Box
                w="100%"
                h="100%"
                position="absolute"
                zIndex="-1"
                borderRadius="100%"
                bg="linear-gradient(90deg, rgba(93, 2, 2, 0.15) 0%, rgba(93, 2, 2, 0.0001) 100%)"
              ></Box>
              <Image src="./home/desktop/illustration-resourceful.svg" />
            </Box>
            <Box textAlign="center">
              <Heading
                textTransform="uppercase"
                fontFamily="Jost"
                fontWeight="500"
                fontSize="1.25rem"
                letterSpacing="5px"
                mb="2rem"
              >
                Resourceful
              </Heading>
              <Text fontSize="15px" fontWeight="500" lineHeight="1.75rem">
                Everything that we do has a strategic purpose. We use an agile
                approach in all of our projects and value customer
                collaboration. It guarantees superior results that fulfill our
                clients’ needs.
              </Text>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box position="relative" mb="3rem">
              <Box
                w="100%"
                h="100%"
                position="absolute"
                zIndex="-1"
                borderRadius="100%"
                bg="linear-gradient(90deg, rgba(93, 2, 2, 0.15) 0%, rgba(93, 2, 2, 0.0001) 100%)"
              ></Box>
              <Image src="./home/desktop/illustration-friendly.svg" />
            </Box>
            <Box textAlign="center">
              <Heading
                textTransform="uppercase"
                fontFamily="Jost"
                fontWeight="500"
                fontSize="1.25rem"
                letterSpacing="5px"
                mb="2rem"
              >
                Friendly
              </Heading>
              <Text fontSize="15px" fontWeight="500" lineHeight="1.75rem">
                We are a group of enthusiastic folks who know how to put people
                first. Our success depends on our customers, and we strive to
                give them the best experience a company can provide.
              </Text>
            </Box>
          </Box>
        </Grid>
      </Wrapper>
    </Box>
  );
};
