export type StyledTextProps = {
  fontSize: `${number}px` | `${number}rem`;
  weight: "500" | "700" | "800";
  color:
    | "--Light-red"
    | "--Orangey-yellow"
    | "--Green-teal"
    | "--Cobalt-blue"
    | "--White"
    | "--Pale-blue"
    | "--Light-lavender"
    | "--Dark-gray-blue";
  textAlign?: "center";
};

export type TextProps = StyledTextProps & {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  children: string;
};
