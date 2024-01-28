import React from "react";
import Rate from "./Rate";

export default function Card() {
  return (
    <div className="font-hanken">
      <div className="wrap w-[23.4375rem] h-[22.25rem] text-white flex flex-col items-center">
        <p>Your Result</p>
        <div className="w-[8.75rem] h-[8.75rem] bg-[#4D21C9] rounded-full flex flex-col justify-center items-center">
          <h1>76</h1>
          <p>of 100</p>
        </div>
        <h1>Great</h1>
        <p className="text-center">
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
      <h1>Summary</h1>
      <Rate icon="./images/icon-reaction.svg" title="Reaction" text="80" />
      <Rate icon="./images/icon-memory.svg" title="Memory" text="92" />
      <Rate icon="./images/icon-verbal.svg" title="Verbal" text="61" />
      <Rate icon="./images/icon-visual.svg" title="Visual" text="72" />
      <button>Continue</button>
    </div>
  );
}
