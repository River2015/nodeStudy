const express = require("express");
const router = express.Router();
const validator = require("express-joi-validation").createValidator({});

const model = require('../models');
const UserService = require("../services/userService");
const userService = new UserService(model.User);

const userSchema = require("../validations/user").userValidationSchema;

router.get("/:id", (req, res, next) => {
    const id = req.params.id;
    userService.getUser(id)
        .then(user => {
            if (!user) {
                return res.status(404).end();
            } else {
                res.send(user);
            }
        })
        .catch((err) => { next(err) });
});

router.post("/", validator.body(userSchema), (req, res, next) => {
    const body = req.body;
    userService.createUser(body).then(user => res.send(user)).catch((err) => { next(err) });;
});

router.get("/", (req, res, next) => {
    userService.getAllUser()
        .then(user => {
            if (!user) {
                return res.status(404).end();
            } else {
                res.send(user);
            }
        })
        .catch((err) => { next(err) });
});

router.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    userService.deleteUser(id)
        .then(user =>{ if (!user) {
                return res.status(404).end();
            }
                res.send({ success: true });
            })
        .catch((err) => { next(err) });
});

router.put("/:id", validator.body(userSchema), (req, res, next) => {
    const body = req.body;
    const id = req.params.id;
    userService.updateUser(id, body)
        .then(user => {
            if (!user) {
                return res.status(404).end();
            }
            res.send(user);
        })
        .catch((err) => { next(err) });
});

module.exports = router;
