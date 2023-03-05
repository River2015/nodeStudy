const express = require('express');
const router = express.Router();
const { getUserByName, generateAccessToken } = require('../services/authService');


router.post("/", async (req, res) => {
    try {
        const { user_login, user_password } = req.body;
        const user = await getUserByName(user_login, user_password)
        if (!user) {
            return res.status(400).json({messages: `user ${user_login} not found`})
        }
        const token = generateAccessToken(user.id)
        return res.json(token);
    } catch(err) {
        res.status(400).json({message: 'Login error'})
    }

})

module.exports = router;
