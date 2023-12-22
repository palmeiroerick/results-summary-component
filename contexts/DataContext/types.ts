import type { ReactNode } from "react";

type category = "reaction" | "memory" | "verbal" | "visual";
type color = "light-red" | "orange-yellow" | "green-teal" | "cobalt-blue";
type icon = `/assets/icon-${category}.svg`;

export type data = {
  category: category;
  score: number;
  icon: icon;
  color: color;
};

export type DataProviderProps = {
  children: ReactNode;
};
