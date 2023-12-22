"use client";
import { ReactNode, createContext } from "react";

type data = {
  category: "Reaction" | "Memory" | "Verbal" | "Visual";
  score: number;
};

type DataProviderProps = {
  children: ReactNode;
};

export const DataContext = createContext<data[]>([]);

const DataProvider = ({ children }: DataProviderProps) => {
  const dataList: data[] = [
    {
      category: "Reaction",
      score: 80,
    },
    {
      category: "Memory",
      score: 92,
    },
    {
      category: "Verbal",
      score: 61,
    },
    {
      category: "Visual",
      score: 72,
    },
  ];

  return (
    <DataContext.Provider value={dataList}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
