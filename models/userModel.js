const db = require('../config/database')
const userTypes = require('./userModelTypes')

const User = db.define(
    "user_tb", userTypes,
    { freezeTableName: true }
);

User.sync();

module.exports = User;
