const express = require("express");
const router = express.Router();
const validator = require("express-joi-validation").createValidator({});

const userModel = require('../models/userModel');
const UserService = require("../services/userService");
const userService = new UserService(userModel);

const userSchema = require("../validations/user").userValidationSchema;

router.get("/:id", (req, res) => {
    const id = req.params.id;
    userService.getUser(id).then(user => {
        if (!user) {
            return res.status(404).end();
        } else {
            res.send(user);
        }
    });
});

router.post("/", validator.body(userSchema), (req, res) => {
    const body = req.body;
    userService.createUser(body).then(user => res.send(user));
});

router.get("/", (req, res) => {
    userService.getAllUser().then(user => {
        if (!user) {
            return res.status(404).end();
        } else {
            res.send(user);
        }
    });
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    userService.deleteUser(id).then(user =>{ if (!user) {
        return res.status(404).end();
    }
        res.send({ success: true });})

});

router.put("/:id", validator.body(userSchema), (req, res) => {
    const body = req.body;
    const id = req.params.id;
    userService.updateUser(id, body).then(user => {
        if (!user) {
            return res.status(404).end();
        }
        res.send(user);
    });
});

module.exports = router;
