import React from "react";

export default function Rate({ icon, title, text }) {
  return (
    <div className="flex gap-12">
      <div className="flex">
        <img src={icon} />
        <p>{title}</p>
      </div>
      <div className="flex">
        <p>{text}</p>
        <p> / 100</p>
      </div>
    </div>
  );
}
