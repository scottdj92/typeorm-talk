import { getRepository } from "typeorm";
import { Artist, Song } from "../entities";

export default async () => {
    const artistRepo = getRepository(Artist);
    const metallica = new Artist();
    metallica.name = "Metallica";

    const MoP = new Song();
    MoP.name = "Master of Puppets";
    MoP.artist = metallica;
    MoP.genre = "Thrash Metal";
    MoP.duration = 20000;

    const one = new Song();
    one.genre = "Thrash Metal";
    one.artist = metallica;
    one.name = "One";
    one.duration = 1500;

    metallica.songs = [MoP, one];

    const daftPunk = new Artist();
    daftPunk.name = "Daft Punk";

    const daFunk = new Song();
    daFunk.name = "Da Funk";
    daFunk.genre = "Techno";
    daFunk.artist = daftPunk;
    daFunk.duration = 1000;

    daftPunk.songs = [daFunk];
    await artistRepo.save([metallica, daftPunk]);
};
