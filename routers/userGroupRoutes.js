const express = require("express");
const router = express.Router();

const validator = require("express-joi-validation").createValidator({});

const groupModel = require('../models/groupModel');
const userModel = require('../models/userModel');

const UserGroupRoutes = require("../services/userGroupService");

const usersToGroupsSchema = require("../validations/schemas").usersToGroupsValidationSchema;

const userGroupService = new UserGroupRoutes(userModel,groupModel);

router.post("/",validator.body(usersToGroupsSchema),  (req, res, next) => {
    userGroupService.addUsersToGroup(req.body).then(group => {
        res.send(group);
    }).catch(error => {
        next(error);
    });
});

router.all("*", (req, res) => {
    return res.status(404).end();
});

module.exports = router;
