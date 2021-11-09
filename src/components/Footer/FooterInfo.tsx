import { Box, Image, Flex, Text, Stack, HStack } from "@chakra-ui/react";

export const FooterInfo: React.FC<{}> = ({}) => {
  return (
    <Box fontSize="0.9rem">
      <Box mb="2rem">
        <Flex justify="center" borderBottom="1px solid #ffffff33" pb="2.5rem">
          <Image src="./shared/desktop/logo-light.png" w="200px" />
        </Flex>
        <Stack
          spacing="1.5rem"
          textTransform="uppercase"
          color="white"
          mt="2rem"
          fontWeight="500"
          letterSpacing="2px"
        >
          <Text>Our Company</Text>
          <Text>Locations</Text>
          <Text>Contact</Text>
        </Stack>
      </Box>
      <Box color="whiteAlpha.700" fontWeight="600">
        <Stack mb="2.5rem">
          <Text>Designo Central Office</Text>
          <Text>3886 Wellington Street</Text>
          <Text>Toronto, Ontario M9C 3J5</Text>
        </Stack>
        <Stack>
          <Text>Contact Us (Central Office)</Text>
          <Text>P : +1 253-863-8967</Text>
          <Text>M : contact@designo.co</Text>
        </Stack>
        <HStack justify="center" mt="2.5rem" spacing="1rem">
          <Image src="./shared/desktop/icon-facebook.svg" />
          <Image src="./shared/desktop/icon-youtube.svg" />
          <Image src="./shared/desktop/icon-twitter.svg" />
          <Image src="./shared/desktop/icon-pinterest.svg" />
          <Image src="./shared/desktop/icon-instagram.svg" />
        </HStack>
      </Box>
    </Box>
  );
};
