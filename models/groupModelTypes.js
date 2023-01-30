const Sequelize = require("sequelize");


const group = {
    id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
    group_name: { type: Sequelize.TEXT, allowNull: false },
    permissions: {
        type: Sequelize.ARRAY(Sequelize.ENUM({
            values: ['READ', 'WRITE']})),
    allowNull: false
    },
}

module.exports = group;
