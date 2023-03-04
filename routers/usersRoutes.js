const express = require('express');
const router = express.Router();
const validator = require('express-joi-validation').createValidator();
const paramsSchema = require('../validations/schemas').paramsValidationSchema;

const userModel = require('../models/userModel');
const userService = require('../services/userService');
const UserService = new userService(userModel);

router.get('/', validator.query(paramsSchema), (req, res, next) => {
    const login = req.query.query;
    const limit = req.query.limit;
    UserService.searchUser(login, limit).then(user =>{
        if(!user) {
            return res.status(404).end();
        } else {
            res.send(user)
        }
    })
        .catch((err) => { next(err) });
})

module.exports = router;
