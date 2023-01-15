const Sequelize = require("sequelize");

const user = {
    user_id: {
        type: Sequelize.TEXT
    },
    user_login: {
        type: Sequelize.TEXT
    },
    user_password: {
        type: Sequelize.TEXT
    },
    user_age: {
        type: Sequelize.INTEGER
    },
    user_deleted: {
        type: Sequelize.BOOLEAN
    }
}

module.exports = user;
