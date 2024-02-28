import { Card } from "entities/Card";
import { Station } from "entities/Station";
import { TrainLine } from "entities/TrainLine";
import { DataSourceOptions } from "typeorm";
import { Logger } from "utils";

require('dotenv').config();

export const dbConfig: DataSourceOptions = {
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: String(process.env.DATABASE_PASSWORD),
  database: process.env.DATABASE_DBNAME,
  entities: [Card, Station, TrainLine],
  synchronize: true,
  logging: false,
  name: "parker",
};
