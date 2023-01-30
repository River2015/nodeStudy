const db = require('../config/database')
const groupTypes = require('./groupModelTypes')

const Group = db.define(
    "user_group", groupTypes,
    // { freezeTableName: true }
);


Group.sync();

module.exports = Group;
