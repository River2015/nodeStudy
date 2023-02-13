const express = require("express");
const router = express.Router();
const validator = require("express-joi-validation").createValidator({});

const model = require('../models');
const GroupService = require("../services/groupService");
const groupService = new GroupService(model.Group);

const groupSchema = require("../validations/schemas").groupValidationSchema;

router.get("/:id", (req, res) => {
    const id = req.params.id;
    groupService.getGroup(id).then(group => {
        if (!group) {
            return res.status(404).end();
        } else {
            res.send(group);
        }
    });
});

router.post("/", validator.body(groupSchema), (req, res) => {
    const body = req.body;
    groupService.createGroup(body).then(group => res.send(group));
});

router.get("/", (req, res) => {
    groupService.getAllGroups().then(group => {
        if (!group) {
            return res.status(404).end();
        } else {
            res.send(group);
        }
    });
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    groupService.deleteGroup(id).then(group =>{ if (!group) {
        return res.status(404).end();
    }
        res.send({ success: true });})

});

router.put("/:id", validator.body(groupSchema), (req, res) => {
    const body = req.body;
    const id = req.params.id;
    groupService.updateGroup(id, body).then(group => {
        if (!group) {
            return res.status(404).end();
        }
        res.send(group);
    });
});

module.exports = router;
