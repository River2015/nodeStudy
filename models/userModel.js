const db = require('../config/database');
const userTypes = require('./userModelTypes');
const UsersToGroups = require('../models/userGroupModel');

const User = db.define(
    "user_tb", userTypes,
    { freezeTableName: true }
);

User.associate = function(models) {
        models.User.belongsToMany(models.Group, {
            through: UsersToGroups,
            as: "groups",
            foreignKey: "userId"
        })
    }

module.exports = User;
