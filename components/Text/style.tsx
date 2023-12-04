import styled from "styled-components";
import { StyledTextProps } from "./types";

const StyledText = styled.p<StyledTextProps>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ weight }) => weight};
  line-height: 1.5;
  color: ${({ color }) => `var(${color})`};
`;

export default StyledText;
