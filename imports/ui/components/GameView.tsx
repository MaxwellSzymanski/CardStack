import React from "react";

import CardView from "./CardView";
import PlayerView from "./PlayerView";
import { usePlayer } from "/imports/api/hooks/usePlayer";
import {
  AegianDragon,
  AngelMonarch,
  BlackDotDragon,
  MajesticRockMonarch,
  PhotonDragon,
  RockMonarch,
} from "/imports/data/cards/Dragons";
import { Attributes } from "/types/gameTypes";

export function GameView() {
  const [
    scoreOwn,
    updateScoreOwn,
    currentCardOwn,
    cardsOwn,
    drawCardOwn,
    giveCurrentCardOwn,
    addCardOwn,
  ] = usePlayer([RockMonarch, AngelMonarch, MajesticRockMonarch]);
  const [
    scoreOpp,
    updateScoreOpp,
    currentCardOpp,
    cardsOpp,
    drawCardOpp,
    giveCurrentCardOpp,
    addCardOpp,
  ] = usePlayer([AegianDragon, BlackDotDragon, PhotonDragon]);

  function move(choice: keyof Attributes) {
    if (currentCardOwn && currentCardOpp) {
      if (
        currentCardOwn.attributes[choice] > currentCardOpp.attributes[choice]
      ) {
        updateScoreOwn((score) => score + 1);
        addCardOwn(giveCurrentCardOpp());
        drawCardOwn();
        drawCardOpp();
      } else if (
        currentCardOwn.attributes[choice] < currentCardOpp.attributes[choice]
      ) {
        updateScoreOpp((score) => score + 1);
        addCardOpp(giveCurrentCardOwn());
        drawCardOwn();
        drawCardOpp();
      } else {
        alert("Tie, choose again.");
      }
      console.log(cardsOwn);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-4">
      <div className="flex flex-row items-center justify-center w-full h-full gap-10">
        <div className="flex flex-col items-center justify-center gap-10">
          <PlayerView score={scoreOwn} length={cardsOwn.length} self={true} />
          {currentCardOwn && <CardView card={currentCardOwn} move={move} />}
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <PlayerView score={scoreOpp} length={cardsOpp.length} />
          {currentCardOpp && <CardView card={currentCardOpp} />}
        </div>
      </div>
    </div>
  );
}
