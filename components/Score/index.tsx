import React from "react";

const Score = () => {
  return (
    <div className="my-4 flex h-48 w-48 flex-col items-center justify-center gap-2 rounded-full bg-gradient-to-b from-violet-blue to-persian-blue">
      <h1 className="text-[5rem] font-extrabold leading-none text-pale-blue">
        76
      </h1>
      <h4 className="text-lg font-bold text-light-lavender text-opacity-50">
        of 100
      </h4>
    </div>
  );
};

export default Score;
