// tslint:disable-next-line:no-var-requires
require("dotenv").config();
import "reflect-metadata";
import express from "express";
import signale from "signale";
import bodyParser from "body-parser";
import database from "./database";

database(process.env.DB_CONNECTION).then((connection) => {
    const PORT = process.env.NODE_ENV === "production" ? 4000 : 3000;
    const app = express();

    app.use(bodyParser.json());

    app.get("/health-check", (req, res) => res.sendStatus(200));

    app.get("/song", (req, res) => {
        signale.info("getting song");
        // const song = await
    });

    app.get("/artist", (req, res) => {
        signale.info("getting artist");
    });

    app.listen(PORT, () => signale.info(`Server running at ${PORT}`));
});
