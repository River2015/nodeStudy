const express = require("express");
const router = express.Router();
const validator = require("express-joi-validation").createValidator({});

const model = require('../models');
const GroupService = require("../services/groupService");
const groupService = new GroupService(model.Group);

const groupSchema = require("../validations/schemas").groupValidationSchema;

router.get("/:id", (req, res, next) => {
    const id = req.params.id;
    groupService.getGroup(id)
        .then(group => {
            if (!group) {
                return res.status(404).end();
            } else {
                res.send(group);
            }
        })
        .catch((err) => { next(err) });
});

router.post("/", validator.body(groupSchema), (req, res, next) => {
    const body = req.body;
    groupService.createGroup(body).then(group => res.send(group)).catch((err) => { next(err) });;
});

router.get("/", (req, res) => {
    groupService.getAllGroups()
        .then(group => {
            if (!group) {
                return res.status(404).end();
            } else {
                res.send(group);
            }
        })
        .catch((err) => { next(err) });
});

router.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    groupService.deleteGroup(id)
        .then(group =>{ if (!group) {
            return res.status(404).end();
        }
            res.send({ success: true });
        })
        .catch((err) => { next(err) });
        })

router.put("/:id", validator.body(groupSchema), (req, res, next) => {
    const body = req.body;
    const id = req.params.id;
    groupService.updateGroup(id, body)
        .then(group => {
            if (!group) {
                return res.status(404).end();
            }
            res.send(group);
        }).catch((err) => { next(err) });
});

module.exports = router;
