import { Request, Response } from "express";
import httpStatus from "http-status";
import { getNeighborStationService } from "services/station.service";

export const searchPath = async (req: Request, res: Response) => {
  let stations = await getNeighborStationService();

  const { origin, destination } = req.query;
  const originStation = origin as string;
  const destStation = destination as string;

  const searchPath = (path: string[]): string[] | null => {
    if (path[path.length - 1] === destStation) {
      return path;
    }
    const curStation = stations.find(
      (station) => station.name === path[path.length - 1]
    );
    for (const neiStation of curStation.neighbors) {
      if (!path.includes(neiStation)) {
        path.push(neiStation);
        const result = searchPath(path);
        if (result) {
          return result;
        }
        path.pop();
      }
    }
    return null;
  };

  const path = searchPath([originStation]);

  res.status(httpStatus.OK).json({ route: path });
};
