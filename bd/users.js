const uuid = require('uuid');

const data = [];

const allUsers = () => {
    return data;
}

const filterById = (id) => {
    return data.find((item)=>{
        return  item.id === id
    });
}

const createUser = (req) => {
    req.body['id'] = uuid.v1();
    req.body['isDeleted'] = false;
    data.push(req.body);
}

const userById = (req) => {
    return data.find((user) => user.id === req.params.id);
}

const deleteUserById = (req) => {
    const item = filterById(req.params.id);
    item.isDeleted = true;
}

const updateUserById = (req) => {
    const item = filterById(req.body.id);
    item['id'] = req.params.id;
    item['isDeleted'] = false;
    return { ...item, password: req.body.password, login: req.body.login, age: req.body.age };
}

const getAutoSuggestUsers = (login, limit) => {
    let requestedUsers = data.filter(user => {
        return user.login.indexOf(login) !== -1;
    }).sort((a, b) => {
        if (a.login < b.login) return 1
        if (a.login > b.login) return -1
        return 0
    })
    return requestedUsers.length <= limit ? requestedUsers : requestedUsers.slice(0,limit);
}

module.exports = {
    data,
    allUsers,
    createUser,
    userById,
    deleteUserById,
    updateUserById,
    getAutoSuggestUsers
};
