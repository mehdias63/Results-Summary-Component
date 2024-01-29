import React from "react";
import Rate from "./Rate";

export default function Card() {
  return (
    <div className="font-hanken bg-white flex flex-col lg:flex-row lg:rounded-[2rem] shadow-[0_30px_60px_0px_rgba(61,108,236,0.15)]">
      <div className="wrap w-[23.4375rem] h-[22.25rem] lg:h-[32rem] rounded-b-[2rem] lg:rounded-t-[2rem] text-white flex flex-col items-center">
        <p className="text-xl font-bold mt-4 lg:text-2xl text-light-blue lg:mt-8">
          Your Result
        </p>
        <div className="state w-[8.75rem] h-[8.75rem] lg:w-[12.5rem] lg:h-[12.5rem] rounded-full flex flex-col justify-center items-center mt-6 mb-4 lg:gap-2">
          <h1 className="text-[3.5rem] lg:text-7xl font-extrabold">76</h1>
          <p className="text-base lg:text-lg text-light-blue">of 100</p>
        </div>
        <h1 className="text-2xl lg:text-[2rem] font-bold mt-2 mb-2 lg:mb-6">
          Great
        </h1>
        <p className="text-center px-8 text-base lg:text-lg font-medium text-light-blue lg:px-14">
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
      <div className="flex flex-col lg:w-1/2 p-4 lg:p-6">
        <h1 className=" text-lg font-bold lg:text-2xl text-dark-blue lg:p-2">
          Summary
        </h1>
        <Rate
          icon="./images/icon-reaction.svg"
          title="Reaction"
          text="80"
          color="#fff6f6"
          textcolor="#FF5555"
        />
        <Rate
          icon="./images/icon-memory.svg"
          title="Memory"
          text="92"
          color="#fffbf4"
          textcolor="#FFB21E"
        />
        <Rate
          icon="./images/icon-verbal.svg"
          title="Verbal"
          text="61"
          color="#f2fcf9"
          textcolor="#00BB8F"
        />
        <Rate
          icon="./images/icon-visual.svg"
          title="Visual"
          text="72"
          color="#f2f2fd"
          textcolor="#1125D6"
        />
        <button className="bg-dark-blue p-4 rounded-full text-white mt-4 lg:mt-8">
          Continue
        </button>
      </div>
    </div>
  );
}
