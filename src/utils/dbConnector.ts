import { dbConfig } from "config/database";
import { DataSource, DataSourceOptions, createConnection } from "typeorm";

class DBController {
    connection: DataSource | null = null;
  
    dbConnection = async (): Promise<DataSource> => {
      return await createConnection(dbConfig);
    };
  
    getConnection = async (): Promise<DataSource> => {
      if (this.connection === null) {
        this.connection = await this.dbConnection();
        return this.connection;
      } else {
        return this.connection;
      }
    };
  }
  
  export const DBConnect = new DBController();
  