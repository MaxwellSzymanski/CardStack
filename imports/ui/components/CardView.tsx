import React from "react";
import { ObjectEntries } from "/imports/utils/objectUtils";
import { capitalise } from "/imports/utils/stringUtils";
import { Attributes, Card } from "/types/gameTypes";

interface CardUIProps {
  card: Card;
  move?: (choice: keyof Attributes) => void;
}

function CardView({ card, move }: CardUIProps) {
  const mean =
    Object.values(card.attributes).reduce((sum, val) => {
      return sum + val;
    }, 0) / 5;

  return (
    <div className="p-4 transition-all border-8 shadow-lg rounded-2xl bg-slate-400 hover:shadow-2xl border-slate-200">
      <div className="flex items-center justify-between w-full mb-1">
        <h1 className="mb-2 text-xl font-bold text-slate-700">{card.name}</h1>
        <p className="px-2 py-1 font-bold rounded-md bg-slate-100">{mean}</p>
      </div>
      <picture>
        <img
          src={`/${card.image}.webp`}
          className="mx-5 mb-4 border-4 rounded-md w-60 border-slate-200"
        />
      </picture>
      <div>
        {ObjectEntries(card.attributes).map(([attribute, value]) => {
          return (
            <button
              key={attribute}
              className="flex items-center justify-between w-full h-full py-1 pl-4 pr-1 my-3 shadow-sm cursor-pointer rounded-xl bg-slate-200 hover:shadow-lg"
              onClick={() => move && move(attribute)}
            >
              <h2 className="text-lg font-semibold text-slate-700">
                {capitalise(attribute)}
              </h2>
              <h4 className="px-4 py-1 text-base font-semibold rounded-xl bg-slate-700 text-slate-200 ">
                {value}
              </h4>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CardView;
