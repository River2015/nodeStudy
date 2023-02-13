const Sequelize = require("sequelize");

const user = {
    id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
    user_login: { type: Sequelize.STRING, allowNull: false },
    user_password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            validatePassword: function(value) {
                if (!/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/i.test(value)) {
                    throw new Error("Password does not meets the requirements");
                }
            }
        }
    },
    user_age: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: { min: 4, max: 130 }
    },
    user_deleted: { type: Sequelize.BOOLEAN, defaultValue: false }
}

module.exports = user;
