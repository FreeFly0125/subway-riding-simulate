import { STATUS } from "consts";
import { getCardRepository } from "repositories";

export const getCardsService = async () => {
  const cardRepository = await getCardRepository();
  const cards = cardRepository.find({ order: { id: "ASC" } });
  return cards;
};

export const getCardByNumberService = async (number: string) => {
  const cardRepository = await getCardRepository();
  const card = cardRepository.findOne({ where: { number: number } });
  if (!card) {
    return STATUS.CARD_NOT_EXIST;
  }
  return card;
};

export const createCardService = async (number: string, amount: number) => {
  const cardRepository = await getCardRepository();

  let newCard = await cardRepository.findOne({ where: { number: number } });

  if (!newCard) {
    newCard = cardRepository.create({
      number: number,
      amount: amount,
      riding: false,
    });
  } else {
    newCard.amount += amount;
  }

  const retCard = await cardRepository.save(newCard);

  return retCard;
};
