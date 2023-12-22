"use client";
import { DataContext } from "@/contexts/DataContext";
import Image from "next/image";
import React, { useContext } from "react";

const CategoryList = () => {
  const data = useContext(DataContext);

  return (
    <ul className="flex flex-col gap-4">
      {data.map(({ category, score, icon, color }, index) => {
        const bgColors = {
          "light-red": "bg-light-red/5",
          "orange-yellow": "bg-orange-yellow/5",
          "green-teal": "bg-green-teal/5",
          "cobalt-blue": "bg-cobalt-blue/5",
        };

        const textColors = {
          "light-red": "text-light-red",
          "orange-yellow": "text-orange-yellow",
          "green-teal": "text-green-teal",
          "cobalt-blue": "text-cobalt-blue",
        };

        return (
          <li
            key={index}
            className={`${bgColors[color]} flex flex-row justify-between rounded-xl p-4`}
          >
            <div className="flex flex-row gap-4">
              <Image src={icon} alt="" width={20} height={20} />
              <h3
                className={`${textColors[color]} font-bold capitalize md:text-lg`}
              >
                {category}
              </h3>
            </div>
            <div className="flex flex-row gap-2 font-bold">
              <h4 className="text-dark-gray-blue md:text-lg">{score}</h4>
              <h4 className="text-dark-gray-blue opacity-50 md:text-lg">
                / 100
              </h4>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryList;
