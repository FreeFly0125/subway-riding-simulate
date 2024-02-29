import { CardEntity } from "entities";
import { getCardRepository } from "repositories";

export const getCardsService = async () => {
  const cardRepository = await getCardRepository();
  const cards = cardRepository.find({ order: { id: "ASC" } });
  return cards;
};

export const getCardService = async (id: number) => {
  const cardRepository = await getCardRepository();
  const card = cardRepository.findOne({ where: { id: id } });
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
