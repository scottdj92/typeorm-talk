import { createConnection, Connection } from "typeorm";
// import entities here
import { Artist, Song, Playlist, Account } from "../entities";

export default async (connectionString: string): Promise<Connection> => {
    return await createConnection({
        type: "postgres",
        url: connectionString,
        entities: [
            Artist,
            Song,
            Account,
            Playlist,
        ],
    });
};
