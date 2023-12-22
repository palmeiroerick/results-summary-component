import React from "react";
import DataProvider from "@/contexts/DataContext";
import CategoryList from "../CategoryList";
import Button from "../Button";

const Summary = () => {
  return (
    <section>
      <h3>Summary</h3>
      <DataProvider>
        <CategoryList />
      </DataProvider>
      <Button>Continue</Button>
    </section>
  );
};

export default Summary;
