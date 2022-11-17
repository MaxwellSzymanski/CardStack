import React from "react";

interface PlayerViewProps {
  score: number;
  length: number;
  self?: boolean;
}

function PlayerView({ score, length, self = false }: PlayerViewProps) {
  return (
    <div className="w-full p-5 rounded-md shadow-xl bg-slate-100 text-slate-700">
      <h1 className="w-full text-2xl font-bold ">
        {self ? "You" : "Opponent"}
      </h1>
      <p>Score: {score}</p>
      <p>Cards: {length}</p>
    </div>
  );
}

export default PlayerView;
