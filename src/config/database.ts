import { CardEntity } from "entities/Card";
import { StationEntity } from "entities/Station";
import { TrainLineEntity } from "entities/TrainLine";
import { DataSourceOptions } from "typeorm";
import { Logger } from "utils";

require("dotenv").config();

export const dbConfig: DataSourceOptions = {
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: String(process.env.DATABASE_PASSWORD),
  database: process.env.DATABASE_DBNAME,
  entities: [CardEntity, StationEntity, TrainLineEntity],
  synchronize: true,
  logging: false,
  name: "parker",
};
