const db = require('../config/database');
const userTypes = require('./userModelTypes');
//const User = require('./models/userModel');
const Group = require('../models/groupModel');
const UsersToGroups = require('../models/userGroupModel');
// const groupModel = require('./groupModel');
//
const User = db.define(
    "user_tb", userTypes,
    { freezeTableName: true }
);

User.associate = (models) => {
    // const { Group, UsersToGroups } = models

    User.Groups = User.belongsToMany(Group, {
        as: 'groups',
        through: UsersToGroups,
        primaryKey: true
    })
}

//User.sync();

module.exports = User;

// module.exports = (sequelize, DataTypes) => {
//     const User = sequelize.define(
//         "user_tb", userTypes,
//         { freezeTableName: true }
//     )
//
//     User.associate = (models) => {
//         const { Group, UsersToGroups } = models
//
//         User.Groups = User.belongsToMany(Group, {
//             as: 'groups',
//             through: UsersToGroups,
//             primaryKey: true
//         })
//     }
//
//     return User
// }

