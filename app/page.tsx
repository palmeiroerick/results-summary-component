import React from "react";
import Summary from "@/components/Summary";
import YourResult from "@/components/YourResult";

const Home = () => {
  return (
    <main className="md:flex md:h-[32rem] md:w-[45rem] md:rounded-[2.5rem] md:shadow-[4px_4px_12px] md:shadow-pale-blue">
      <YourResult />
      <Summary />
    </main>
  );
};

export default Home;
