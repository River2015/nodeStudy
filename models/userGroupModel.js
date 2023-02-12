const Sequelize = require("sequelize");
const db = require('../config/database');

const UsersToGroups = db.define(
    "userstogroups", {
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

)
module.exports = UsersToGroups;

