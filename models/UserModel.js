//const uuid = require("uuid/v4");
const Sequelize = require("sequelize");
const db = require('../config/database')
const users = require('./user')

const User = db.define(
    "user_tb" ,users,
);

User.sync();

// async function findOne(id) {
//     let user = await User.findOne({
//         where: { id }
//     });
//     return user;
// }

async function findAll() {
    //let iLike = Sequelize.Op.iLike;
    let users = await User.findAll({
        //limit: limit,
        //where: { isDeleted: false }
    });
    return users;
}

module.exports = { findAll};
