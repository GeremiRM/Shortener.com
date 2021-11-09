import { Box, Grid } from "@chakra-ui/react";
import { Wrapper } from "../Wrapper";
import { DesignCard } from "./DesignCard";

interface DesignsProps {
  info: any;
}

export const Designs: React.FC<DesignsProps> = ({ info }) => {
  const renderDesignCards = () => {
    return info.map((cardInfo: any) => <DesignCard cardInfo={cardInfo} />);
  };

  return (
    <Box fontFamily="Jost">
      <Wrapper>
        <Grid mt="6rem" templateColumns="1fr" gap="2rem">
          {renderDesignCards()}
        </Grid>
      </Wrapper>
    </Box>
  );
};
