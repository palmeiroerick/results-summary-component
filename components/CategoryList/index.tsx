"use client";
import { DataContext } from "@/contexts/DataContext";
import React, { useContext } from "react";

const CategoryList = () => {
  const data = useContext(DataContext);

  return (
    <ul>
      {data.map(({ category, score }, index) => (
        <li key={index}>
          <h3>{category}</h3>
          <h4>{score}</h4>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
