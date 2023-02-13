const Joi = require('@hapi/joi');
const Sequelize = require("sequelize");

const paramsValidationSchema = Joi.object().keys({
    query: Joi.string().required()
})

const userValidationSchema = Joi.object().keys({
    user_login: Joi.string().required(),
    user_password: Joi.string()
        .regex(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)
        .required(),
    user_age: Joi.number()
        .integer()
        .min(4)
        .max(130)
        .required()
});

const groupValidationSchema = Joi.object().keys({
    group_name: Joi.string().required(),
    permissions:  Joi.array()
        .min(1)
        .required()
});

const usersToGroupsValidationSchema = Joi.object().keys({
    group: Joi.string().required(),
    users: Joi.array().required(),
});


module.exports = { userValidationSchema, paramsValidationSchema, groupValidationSchema, usersToGroupsValidationSchema };
