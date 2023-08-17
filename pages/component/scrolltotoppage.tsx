import React from "react";

export const ScrollToTopPage = () => {
  return (
    <div className="relative flex h-[500vh] w-full flex-col items-center justify-center bg-stone-900 text-3xl text-white">
      <ul className="absolute flex h-full flex-col items-center justify-between p-20">
        <li> This is a really long div...</li>
        <li>Halfway there!</li>
        <li>👋</li>
      </ul>
    </div>
  );
};
