const db = require('../config/database')
const groupTypes = require('./groupModelTypes')
const User = require('../models/userModel');
//const Group = require('./models/groupModel');
const UsersToGroups = require('../models/userGroupModel');

const Group = db.define(
    "user_group", groupTypes,
    { freezeTableName: true }

);
Group.associate = function() {
    //const { User, UsersToGroups } = models

    Group.belongsToMany(User, {
        through: UsersToGroups,
        as: "users",
        foreignKey: "groupId"
    });
};

//Group.sync();

module.exports = Group;

// module.exports = (sequelize, DataTypes) => {
//     const Group = sequelize.define(
//         'user_group',
//         groupTypes,
//         { freezeTableName: true }
//     )
//
//     Group.associate = (models) => {
//         const { Tournament, UsersToTournaments } = models
//
//         Group.Users = User.belongsToMany(Tournaments, {
//             as: 'users',
//             through: UsersToTournaments,
//             primaryKey: true
//         })
//     }
//
//     return Group
// }
