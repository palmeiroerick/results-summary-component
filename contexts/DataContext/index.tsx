"use client";
import { createContext } from "react";
import type { DataProviderProps, data } from "./types";

export const DataContext = createContext<data[]>([]);

const DataProvider = ({ children }: DataProviderProps) => {
  const dataList: data[] = [
    {
      category: "reaction",
      score: 80,
      icon: "/assets/icon-reaction.svg",
      color: "light-red",
    },
    {
      category: "memory",
      score: 92,
      icon: "/assets/icon-memory.svg",
      color: "orange-yellow",
    },
    {
      category: "verbal",
      score: 61,
      icon: "/assets/icon-verbal.svg",
      color: "green-teal",
    },
    {
      category: "visual",
      score: 72,
      icon: "/assets/icon-visual.svg",
      color: "cobalt-blue",
    },
  ];

  return (
    <DataContext.Provider value={dataList}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
