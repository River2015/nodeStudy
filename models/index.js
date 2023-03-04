const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const User = require('../models/userModel');
const Group = require('../models/groupModel');
//const UsersToGroups = require('../models/userGroupModel');

// Import models
const models = {
  User,
  Group,
  //UsersToGroups
}

Object.keys(models).forEach(modelKey => {
  if ('associate' in models[modelKey]) {
    models[modelKey].associate(models)
  }
})

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
