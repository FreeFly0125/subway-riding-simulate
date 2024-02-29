import { TrainLineEntity } from "entities";
import { DBConnect } from "utils/dbConnector";

export const getLineRepository = async () => {
  const connection = await DBConnect.getConnection();

  return connection.getRepository(TrainLineEntity);
};
