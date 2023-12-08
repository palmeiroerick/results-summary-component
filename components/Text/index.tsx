import type { FC } from "react";
import type { TextProps } from "./types";
import StyledText from "./style";

const Text: FC<TextProps> = ({ as, fontSize, weight, color, children }) => {
  return (
    <StyledText as={as} fontSize={fontSize} weight={weight} color={color}>
      {children}
    </StyledText>
  );
};

export default Text;
