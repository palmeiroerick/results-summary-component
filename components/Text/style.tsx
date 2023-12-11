import styled from "styled-components";
import { StyledTextProps } from "./types";

const StyledText = styled.p<StyledTextProps>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ weight }) => weight};
  line-height: "1.25";
  color: ${({ color }) => `var(${color})`};
  text-align: ${({ text_align }) => (text_align ? text_align : "start")};
`;

export default StyledText;
