const Sequelize = require("sequelize");
const db = require('../config/database');
// const User = require('./models/userModel');
// const Group = require('./models/groupModel');
// const UsersToGroups = require('./models/userGroupModel');

const GroupUsers = db.define(
    "user_to_group",    {
        userId: {
            type: Sequelize.UUID,
            // allowNull: false,
            references: {
                model: 'User',
                key: 'id'
            }
        },
        groupId: {
            type: Sequelize.UUID,
            // allowNull: false,
            references: {
                model: 'Group',
                key: 'id'
            }
        }
    },
    { freezeTableName: true }

);

module.exports = GroupUsers;

// module.exports = (sequelize, DataTypes) => {
//     const UsersToGroups = sequelize.define(
//         'users_to_groups',
//         {
//             role: {
//                 type: DataTypes.STRING
//             }
//         }
//     )
//
//     return UsersToGroups
// }
