import { Box, Grid, Image, Heading, Text } from "@chakra-ui/react";
import { Wrapper } from "../Wrapper";

export const Features: React.FC<{}> = ({}) => {
  return (
    <Box mt="4rem">
      <Wrapper>
        <Grid templateColumns="330px" justifyContent="center">
          <Box>
            <Box>
              <Image src="./home/desktop/illustration-passionate.svg" />
            </Box>
            <Box>
              <Heading textTransform="uppercase">Passionate</Heading>
              <Text></Text>
            </Box>
          </Box>
        </Grid>
      </Wrapper>
    </Box>
  );
};
