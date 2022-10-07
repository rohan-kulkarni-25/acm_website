import React from "react";

export default function ObjectivesCard({ name, img }) {
  return (
    <div>
      <div className="flex justify-center w-72 flex-col align-middle bg-cornflower-blue-100 p-4 rounded-xl gap-2">
        <img className=" h-24 self-center" src={img} />
        <p className="font-mono text-3xl text-center">{name}</p>
      </div>
    </div>
  );
}
