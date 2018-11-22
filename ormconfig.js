// tslint:disable-next-line:no-var-requires
require("dotenv").config();

module.exports = {
    type: "postgres",
    host: "localhost",
    username: process.env.TYPEORM_USERNAME,
    database: process.env.TYPEORM_DATABASE,
    migrations: [
        "migrations/*.ts",
    ],
    cli: {
        migrationsDir: "migrations",
    },
};
