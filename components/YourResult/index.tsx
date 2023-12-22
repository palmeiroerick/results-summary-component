import React from "react";
import Score from "../Score";

const YourResult = () => {
  return (
    <section className="flex flex-col items-center gap-2 bg-gradient-to-b from-light-slate-blue to-light-royal-blue px-11 py-8">
      <h3 className="text-xl font-bold text-light-lavender">Your Result</h3>
      <Score />
      <h2 className="text-3xl font-bold text-pale-blue">Grate</h2>
      <p className="text-center text-lg text-light-lavender">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </section>
  );
};

export default YourResult;
