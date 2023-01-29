function UserService(model) {
    this.model = model;
}

UserService.prototype.createUser = function(payload) {
    return this.model.create(payload);
};

UserService.prototype.getUser = function(id) {
    return this.model.findOne(id);
};

UserService.prototype.getAllUser = function() {
    return this.model.findAll();
};

UserService.prototype.deleteUser = function(id) {
    return this.model.remove(id);
};

UserService.prototype.updateUser = function(id, payload) {
    return this.model.update(id, payload);
};

UserService.prototype.searchUser = function(limit, login) {
    return this.model.filter(user => {
        return user.login.indexOf(login) !== -1;
    }).sort((a, b) => {
        if (a.login < b.login) return 1
        if (a.login > b.login) return -1
        return 0
    });
};

module.exports = UserService;
