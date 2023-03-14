const jwt = require('jsonwebtoken');
const model = require('../models/userModel');
const { secret } = require('../config/jwtConfig')

const getUserByName = async (user_login, user_password) => {
    try{
        const data = await model.findOne({
            where: { user_login, user_password }
        });
        return data;
    } catch(err){
        return err;
    }
}

const generateAccessToken = (id) => {
    const payload = {
        id
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"} )
}


module.exports = {
    getUserByName,
    generateAccessToken
};
