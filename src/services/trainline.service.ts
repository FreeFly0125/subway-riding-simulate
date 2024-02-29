import { StationEntity, TrainLineEntity } from "entities";
import { getLineRepository, getStationRepository } from "repositories";

export const createLineService = async (name: string, stations: string[]) => {
  const lineRepository = await getLineRepository();
  const stationRepository = await getStationRepository();

  const newLine = new TrainLineEntity();
  newLine.name = name;

  const stationEntities = await Promise.all(
    stations.map(async (stationName) => {
      let station = await stationRepository.findOne({ where: { name: stationName }});
      if (!station) {
        station = stationRepository.create({ name: stationName });
        await stationRepository.save(station);
      }
      return station;
    })
  );

  newLine.stations = stations;

  const line = await lineRepository.save(newLine);
  return line;
};

export const getLinesService = async () => {
  const lineRepository = await getLineRepository();

  const lines = lineRepository.find({ order: { id: "ASC" } });

  return lines;
};

export const getLineService = async (id: number) => {
  const lineRepository = await getLineRepository();

  const lines = lineRepository.findOne({ where: { id: id } });

  return lines;
};
