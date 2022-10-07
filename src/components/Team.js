import React from "react";
import TeamCard from "./TeamCard";

export default function Team() {
  return (
    <div className="m-24 sm:m-12">
      <p className="text-5xl font-mono font-bold text-center sm:text-2xl">
        We all together
      </p>
      <div className="flex flex-wrap justify-evenly gap-8 mt-24 sm:m-4">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
}
