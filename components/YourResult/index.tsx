import React from "react";
import Score from "../Score";

const YourResult = () => {
  return (
    <section>
      <h3>Your Result</h3>
      <Score />
      <h2>Grate</h2>
      <p>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </section>
  );
};

export default YourResult;
