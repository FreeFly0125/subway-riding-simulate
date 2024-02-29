import { StationEntity } from "entities";
import { DBConnect } from "utils/dbConnector";

export const getStationRepository = async () => {
  const connection = await DBConnect.getConnection();

  return connection.getRepository(StationEntity);
};
