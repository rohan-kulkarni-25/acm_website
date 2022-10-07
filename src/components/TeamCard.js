import React from "react";

export default function TeamCard() {
  return (
    <div className="w-84  border-4 border-cornflower-blue-500 p-4 rounded-lg  flex flex-col ">
      <img
        className="w-48 sm:w-24 rounded-lg place-self-center"
        src="https://github.com/rohan-kulkarni-25.png"
      />
      <p className="font-mono font-semibold text-center mt-4  text-2xl sm:text-xl">
        Rohan Kulkarni
      </p>
      <p className="font-mono sm:text-xs text-center">
        Founder @devsincolba communnity
      </p>
    </div>
  );
}
