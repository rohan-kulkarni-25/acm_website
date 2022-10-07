import React from "react";
import ObjectivesCard from "./ObjectivesCard";

export default function Objectives() {
  return (
    <div className="bg-cornflower-blue-500 flex flex-col justify-center align-middle p-12">
      <p className="text-5xl text-center font-mono text-white  font-bold sm:text-3xl">
        We belive in
      </p>
      <div className="flex justify-evenly mt-24 sm:flex-col gap-8 sm:mt-12 sm:place-items-center">
        <ObjectivesCard
          name="Diversity"
          img="https://i.ibb.co/85hDTbm/Untitled-design-13.png"
        />
        <ObjectivesCard
          name="Collaboration"
          img="https://i.ibb.co/0KBm1wm/Untitled-design-12.png"
        />
        <ObjectivesCard
          name="Open Source"
          img="https://i.ibb.co/SXk2Zcz/Untitled-design-11.png"
        />
        <ObjectivesCard
          name="Innovation"
          img="https://i.ibb.co/qJXdGfC/Untitled-design-10.png"
        />
      </div>
    </div>
  );
}
