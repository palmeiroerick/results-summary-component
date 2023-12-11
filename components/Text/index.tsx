import type { FC } from "react";
import type { TextProps } from "./types";
import StyledText from "./style";

const Text: FC<TextProps> = ({
  as,
  fontSize,
  weight,
  color,
  text_align,
  children,
}) => {
  return (
    <StyledText
      as={as}
      fontSize={fontSize}
      weight={weight}
      color={color}
      text_align={text_align}
    >
      {children}
    </StyledText>
  );
};

export default Text;
