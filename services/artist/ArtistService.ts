import { getRepository } from "typeorm";
import { Artist } from "../../entities";

export const getArtistByID = async (id: number): Promise<Artist> => {
    const artistRepo = getRepository(Artist);
    return await artistRepo.findOne(id).then((artist) => artist);
};

export const getArtistByName = async (name: string): Promise<Artist> => {
    const artistRepo = getRepository(Artist);
    return await artistRepo.find({ where: { name }})
        .then((artists) => artists[0])
        .catch((error) => error);
};
