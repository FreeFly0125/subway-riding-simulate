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

export const getStationByIDService = async (id: number) => {
  const stationRepository = await getStationRepository();
  const station = stationRepository.findOne({ where: { id: id } });
  return station;
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
  const stationRepository = await getStationRepository();
  const cardRepository = await getCardRepository();

  const station = await stationRepository.findOne({
    where: { name: stationName },
  });
  const card = await cardRepository.findOne({ where: { number: number } });
  card.riding = true;
  card.amount -= station.fare;
  return cardRepository.save(card);
};

export const exitStationService = async (
  stationName: string,
  number: string
) => {
  const stationRepository = await getStationRepository();
  const cardRepository = await getCardRepository();

  const card = await cardRepository.findOne({ where: { number: number } });
  card.riding = false;
  return cardRepository.save(card);
};
