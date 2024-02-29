import { CardEntity } from "entities";
import { DBConnect } from "utils/dbConnector";

export const getCardRepository = async () => {
  const connection = await DBConnect.getConnection();

  return connection.getRepository(CardEntity);
};
