const db = require('../config/database')
const userTypes = require('./userModelTypes')

const User = db.define(
    "user_tb", userTypes,
    { freezeTableName: true }
);


User.sync();

async function findOne(id) {
    let user = await User.findOne({
        where: { id }
    });
    return user;
}

async function create(user) {
    try{
        let data = await User.create(user);
        return data.dataValues;
    }catch(exe){
        console.log(exe);
    }
}

async function findAll() {
    //let iLike = Sequelize.Op.iLike;
    let users = await User.findAll({
        // limit: limit,
        where: { user_deleted: false }
    });
    return users;
}

async function update(id, updatedUser) {
    try {
        let user = await User.update(updatedUser, {
            where: { id, user_deleted: false },
            returning: true,
            plain: true
        });
        return user ? user[1] : null;
    } catch (exe) {
        return null;
    }
}

async function remove(id) {
    let user = await User.update(
        { user_deleted: true },
        {
            where: { id },
            returning: true,
            plain: true
        }
    );
    return user[1];
}

module.exports = { findAll, create, remove, findOne, update};
