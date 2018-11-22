import { getRepository } from "typeorm";
import { Song } from "../../entities";

export const getSongById = async (id: number): Promise<Song> => {
    const songRepo = getRepository(Song);
    return await songRepo.findOne(id).then((song) => song);
};

export const getSongByName = async (name: string): Promise<Song> => {
    const songRepo = getRepository(Song);
    return await songRepo.find({ where: { name } }).then((songs) => songs[0]);
};
