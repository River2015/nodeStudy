const Sequelize = require("sequelize");
const config = require("./databaseConfig");

const database = new Sequelize(
    config.database,
    config.userName,
    config.password,
    {
        host: config.host,
        port: config.port,
        dialect: config.dialect,
        protocol: config.protocol,
    }
);

// sequelize.authenticate().then(
//     suceess => {
//         console.log("suceess", suceess);
//     },
//     error => {
//         console.log("error", error);
//     }
// );

module.exports = database;
