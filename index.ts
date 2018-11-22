// tslint:disable-next-line:no-var-requires
require("dotenv").config();
import "reflect-metadata";
import express from "express";
import signale from "signale";
import bodyParser from "body-parser";
import database from "./database";
import seed from "./database/seed";
import { getArtistByName, getSongByName } from "./services";

database(process.env.DB_CONNECTION).then((connection) => {
    const PORT = process.env.NODE_ENV === "production" ? 4000 : 3000;
    if (process.env.NODE_ENV !== "production") {
        seed();
    }
    const app = express();

    app.use(bodyParser.json());

    app.get("/health-check", (req, res) => res.sendStatus(200));

    app.get("/song/:songName", async (req, res) => {
        signale.info("getting song");
        const song = await getSongByName(req.params.songName);
        res.send(song);
    });

    app.get("/artist/:artistName", async (req, res) => {
        signale.info("getting artist");
        const artist = await getArtistByName(req.params.artistName);
        res.send(artist);
    });

    app.listen(PORT, () => signale.info(`Server running at ${PORT}`));
});
