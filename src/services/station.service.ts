import { getStationRepository } from "repositories";

export const getStationsService = async () => {
    const stationRepository = await getStationRepository();
    const stations = stationRepository.find({ order: { id: 'ASC' } });
};

export const getStationService = () => {};

export const enterStationService = () => {};

export const exitStationService = () => {};
