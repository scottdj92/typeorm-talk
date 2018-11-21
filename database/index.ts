import { createConnection, Connection } from "typeorm";
// import entities here
import { Artist, Song } from "../entities";

export default async (connectionString: string): Promise<Connection> => {
    return await createConnection({
        type: "postgres",
        url: connectionString,
        entities: [
            Artist,
            Song,
        ],
        synchronize: process.env.NODE_ENV !== "production",
    });
};
