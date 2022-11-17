import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Card } from "/types/gameTypes";

export const usePlayer = (
  deck: Card[]
): [
  number,
  Dispatch<SetStateAction<number>>,
  Card | undefined,
  Card[],
  () => void,
  () => Card | undefined,
  (card?: Card) => void
] => {
  const [score, updateScore] = useState<number>(0);
  const [cards, updateCards] = useState<Card[]>(deck);
  const [currentCard, updateCurrentCard] =
    useState<Card | undefined>(undefined);

  useEffect(() => {
    drawCard();
  }, []);

  console.log(cards);

  function drawCard() {
    console.log("Drawing");
    const newCards = [...cards];
    updateCurrentCard(newCards.pop());
    updateCards(newCards);
  }

  function giveCurrentCard() {
    if (!currentCard) {
      console.error("No card to give");
      return;
    }
    const card: Card = { ...currentCard };
    updateCurrentCard(undefined);
    return card;
  }

  function addCard(card?: Card) {
    if (card) {
      console.log("Adding");
      console.log([...cards, card]);
      updateCards((cards) => [...cards, card]);
    }
  }

  return [
    score,
    updateScore,
    currentCard,
    cards,
    drawCard,
    giveCurrentCard,
    addCard,
  ];
};
