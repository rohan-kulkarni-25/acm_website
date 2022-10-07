import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between m-24 sm:m-0 sm:flex-col sm:align-middle">
        <p className="text-5xl font-mono font-semibold sm:text-3xl text-center">
          Get In Touch
        </p>

        <img
          className="place-items-end sm:w-48 sm:place-self-center sm:mt-12 sm:mb-12 "
          src="https://i.ibb.co/gJzVKHL/Untitled-design-8.png"
        />
      </div>
      <p className="text-center font-mono bg-black text-white text-xl p-4 sm:text-xs">
        COPYRIGHT © ACM @SITS 2022
      </p>
    </div>
  );
}
