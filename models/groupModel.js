const db = require('../config/database')
const groupTypes = require('./groupModelTypes')
const UsersToGroups = require('../models/userGroupModel');

const Group = db.define(
    "user_group", groupTypes,
    { freezeTableName: true }
);

Group.associate = function(models) {
    // associations can be defined here
    models.Group.belongsToMany(models.User, {
        through: UsersToGroups,
        as: "users",
        foreignKey: "groupId"
    })
}

module.exports = Group;

