import { TrainLineEntity } from "entities";
import { getLineRepository } from "repositories";

export const createLineService = async (name: string, stations: string[]) => {
  const lineRepository = await getLineRepository();

  const newLine = new TrainLineEntity();
  newLine.name = name;
  newLine.stations = stations;

  const line = await lineRepository.save(newLine);

  return line;
};

export const getLinesService = async () => {
  const lineRepository = await getLineRepository();

  const lines = lineRepository.find({ order: { id: 'ASC' } });

  return lines;
};

export const getLineService = async (id: number) => {
    const lineRepository = await getLineRepository();
  
    const lines = lineRepository.findOne({ where: { id: id } });
  
    return lines;
  };
