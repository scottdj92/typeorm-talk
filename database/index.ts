import { createConnection, Connection } from "typeorm";
// import entities here

export default async (connectionString: string): Promise<Connection> => {
    return await createConnection({
        type: "postgres",
        url: connectionString,
        entities: [],
        synchronize: process.env.NODE_ENV === "production",
    });
};
