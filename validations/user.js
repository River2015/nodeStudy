const Joi = require('@hapi/joi');

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


module.exports = { userValidationSchema, paramsValidationSchema };
