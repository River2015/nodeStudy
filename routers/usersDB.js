const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});

const userModel = require('../models/UserModel');
const UserService = require("../services/userService");
const userService = new UserService(userModel);

//const userSchema = require("../middlewares/validators").userSchema;

// router.get("/:id", (req, res) => {
//     const id = req.params.id;
//     userService.getUser(id).then(user => {
//         if (!user) {
//             return res.status(404).end();
//         } else {
//             console.log(user)
//             res.send(user);
//         }
//     });
// });

router.get("/", (req, res) => {
    userService.getAllUser().then(user => {
        if (!user) {
            return res.status(404).end();
        } else {
            console.log(user)
            res.send(user);
        }
    });
});

module.exports = router;
