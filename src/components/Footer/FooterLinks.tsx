import React from "react";
import { GridItem, Heading, UnorderedList, ListItem } from "@chakra-ui/react";

interface FooterLinksProps {
  heading: string;
  list: string[];
}

export const FooterLinks: React.FC<FooterLinksProps> = ({ heading, list }) => {
  const renderList = () => {
    return list.map((item) => (
      <ListItem as="a" href="#" key={item} display="block">
        {item}
      </ListItem>
    ));
  };

  return (
    <GridItem fontSize="16px">
      <Heading
        as="h5"
        fontWeight="700"
        fontSize="inherit"
        fontFamily={"Poppins"}
        mt="4rem"
        mb="1.5rem"
      >
        {heading}
      </Heading>
      <UnorderedList spacing={3} listStyleType={"none"} color="textGray" ml="0">
        {renderList()}
      </UnorderedList>
    </GridItem>
  );
};
