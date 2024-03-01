import { STATUS } from "consts";
import { getLineRepository, getStationRepository } from "repositories";

const addNeighborStation = async (preStationName, curStationName) => {
  const stationRepository = await getStationRepository();

  const curStation = await stationRepository.findOne({
    where: { name: curStationName },
  });
  if (
    preStationName !== null &&
    !curStation.neighbors.includes(preStationName)
  ) {
    curStation.neighbors.push(preStationName);
  }
  await stationRepository.save(curStation);

  if (preStationName !== null) {
    const preStation = await stationRepository.findOne({
      where: { name: preStationName },
    });
    if (!preStation.neighbors.includes(curStationName)) {
      preStation.neighbors.push(curStationName);
    }
    await stationRepository.save(preStation);
  }
};

const setNeighbors = async (stations: string[]) => {
  let preStationName: String | null = null;

  for (const stationName of stations) {
    await addNeighborStation(preStationName, stationName);
    preStationName = stationName;
  }
};

export const createLineService = async (
  name: string,
  stations: string[],
  fare: number
) => {
  const lineRepository = await getLineRepository();
  const isExistingLine = await lineRepository.findOne({
    where: { name: name },
  });
  if (isExistingLine) {
    return STATUS.TRAIN_LINE_EXIST;
  }

  const stationRepository = await getStationRepository();

  const stationEntities = await Promise.all(
    stations.map(async (stationName) => {
      let station = await stationRepository.findOne({
        where: { name: stationName },
      });
      if (!station) {
        station = stationRepository.create({
          name: stationName,
          fare: fare,
          neighbors: [],
        });
        await stationRepository.save(station);
      } else {
        station.fare = station.fare < fare ? station.fare : fare;
        await stationRepository.save(station);
      }
      return station;
    })
  );
  setNeighbors(stations);

  const newLine = lineRepository.create({
    name: name,
    stations: stations,
    fare: fare,
  });
  const line = await lineRepository.save(newLine);
  return line;
};

export const getLinesService = async () => {
  const lineRepository = await getLineRepository();
  const lines = await lineRepository.find({ order: { id: "ASC" } });
  return lines;
};

export const getLineByNameService = async (name: string) => {
  const lineRepository = await getLineRepository();
  const line = await lineRepository.findOne({ where: { name: name } });
  if (!line) {
    return STATUS.LINE_NOT_EXIST;
  }
  return line;
};
