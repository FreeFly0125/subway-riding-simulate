import { TrainLineEntity } from "entities";
import { getLineRepository } from "repositories";

export const createLineService = async (line: TrainLineEntity) => {
  const lineRepository = await getLineRepository();

  await lineRepository.save(line);

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
