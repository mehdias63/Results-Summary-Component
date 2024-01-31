import React from "react";

export default function Rate({ icon, title, text, color, textcolor }) {
  return (
    <div
      className="flex rounded-xl p-4 w-[19.6875rem] h-[3.5rem] justify-center items-center m-2"
      style={{ backgroundColor: color }}
    >
      <div className="flex items-center gap-3"> 
        <img src={icon} alt="rate" />
        <p style={{ color: textcolor }}>{title}</p>
      </div>
      <div className="flex ml-auto">
        <p className="mr-2">{text}</p>
        <p className="text-dark-blue opacity-50">/ 100</p>
      </div>
    </div>
  );
}
