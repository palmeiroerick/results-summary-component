import React from "react";
import Score from "../Score";

const YourResult = () => {
  return (
    <section className="md:w-1/2 md:justify-between md:rounded-[2.5rem] md:px-14 md:py-12 flex flex-col items-center gap-2 bg-gradient-to-b from-light-slate-blue to-light-royal-blue px-11 py-8">
      <h3 className="md:text-2xl text-xl font-bold text-light-lavender">
        Your Result
      </h3>
      <Score />
      <h2 className="text-3xl font-bold text-pale-blue">Great</h2>
      <p className="md:leading-6 text-center text-lg text-light-lavender">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </section>
  );
};

export default YourResult;
