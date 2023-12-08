import React from "react";
import StyledScore from "./style";
import Text from "@/components/Text";

const Score = () => {
  return (
    <StyledScore>
      <Text as="h4" fontSize="4.75rem" weight="800" color="--White">
        76
      </Text>
      <Text as="h4" fontSize="1.25rem" weight="800" color="--Light-lavender">
        of 100
      </Text>
    </StyledScore>
  );
};

export default Score;
