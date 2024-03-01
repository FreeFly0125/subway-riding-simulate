import { STATUS } from "consts";
import { getCardRepository, getStationRepository } from "repositories";

export const getNeighborStationService = async () => {
  const stationRepository = await getStationRepository();
  const stations = await stationRepository.find({
    select: ["name", "neighbors"],
  });
  return stations;
};

export const getStationsService = async () => {
  const stationRepository = await getStationRepository();
  const stations = stationRepository.find({ order: { id: "ASC" } });
  return stations;
};

export const getStationByNameService = async (name: string) => {
  const stationRepository = await getStationRepository();
  const station = stationRepository.findOne({ where: { name: name } });
  return station;
};

export const enterStationService = async (
  stationName: string,
  number: string
) => {
  const cardRepository = await getCardRepository();
  const card = await cardRepository.findOne({ where: { number: number } });
  
  if (!card) { return STATUS.CARD_NOT_EXIST; }
  if (card.riding) { return STATUS.ALREADY_RIDING; }
  
  const stationRepository = await getStationRepository();
  const station = await stationRepository.findOne({
    where: { name: stationName },
  });

  if (card.amount < station.fare) { return STATUS.NOT_ENOUGH_MONEY; }

  card.riding = true;
  card.amount -= station.fare;
  return cardRepository.save(card);
};

export const exitStationService = async (
  stationName: string,
  number: string
) => {
  const cardRepository = await getCardRepository();
  const card = await cardRepository.findOne({ where: { number: number } });
  if (card.riding === false) {
    return STATUS.ALREADY_EXIT;
  }

  card.riding = false;
  return cardRepository.save(card);
};
