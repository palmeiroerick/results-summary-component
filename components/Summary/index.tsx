import React from "react";
import DataProvider from "@/contexts/DataContext";
import CategoryList from "../CategoryList";
import Button from "../Button";

const Summary = () => {
  return (
    <section className="flex flex-col gap-6 bg-white p-8 md:w-1/2 md:justify-between md:rounded-[2.5rem]">
      <h3 className="text-lg font-bold text-dark-gray-blue md:text-2xl">
        Summary
      </h3>
      <DataProvider>
        <CategoryList />
      </DataProvider>
      <Button>Continue</Button>
    </section>
  );
};

export default Summary;
