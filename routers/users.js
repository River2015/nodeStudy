const express = require('express');
const app = express();
const router = express.Router();
const data = require('../bd/users');
const bodyParser = require('body-parser');
const HttpStatus = require('http-status-codes');
const responseMessage = require('../constants/responseMessage');

app.listen(3000);
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

const errorHandler = (res) => {
    return res
        .status(HttpStatus.NOT_FOUND)
        .send({
            error: HttpStatus.getStatusText(HttpStatus.NOT_FOUND)
        });
}

router.post('/user', function(req, res) {
    data.createUser(req)
    res.status(HttpStatus.OK).send(responseMessage.CREATE);
})

router.get('/users', function(req, res) {
    const users = data.allUsers()
    res.json(users);
});

router.get('/user/:id', function(req, res) {
    const user = data.userById(req);
    (!user) ? errorHandler(res) : res.status(HttpStatus.OK).send({ data: user });
});

router.delete('/user/:id',function(req, res) {
    data.deleteUserById(req);
    res.status(HttpStatus.OK).send(responseMessage.DELETE);
});

router.put('/user/:id', function(req, res) {
    const user = data.updateUserById(req);
    (!user) ? errorHandler(res) : res.status(HttpStatus.OK).send(responseMessage.UPDATE);
})

router.get('users', function(req, res) {
    const login = req.query.query;
    const limit = req.query.limit || 10;
    (!login) ? errorHandler(res) : res.send(data.getAutoSuggestUsers(login, limit));
})

app.use('/', router);
