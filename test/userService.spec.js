const UserService = require('../services/userService');
const user = { login: '123', password: 'test1', id: '12345678' };
const mockUserModel = {
    create: () => {
        return { dataValues: user };
    },
    findOne: () => {
        return user;
    },
    findAll: () => {
        return [user];
    },
    update: () => {
        return [null, { ...user, isdeleted: true }];
    }
};
const userService = new UserService(mockUserModel);

describe('User Service', () => {
    it('it should create a user', async () => {
        const createdUser = await userService.createUser(user);
        expect(createdUser).toEqual(user);
    });
    it('it should find a user by id', async () => {
        const oneUser = await userService.getUser(user.id);
        expect(oneUser).toEqual(user);
    });
    it('it should get all users', async () => {
        const users = await userService.getAllUser();
        expect(users).toEqual([user]);
    });
    it('should update user with flag isDeleted in true when delete user', async () => {
        const deletedUser = await userService.deleteUser(user.id);
        expect(deletedUser.isdeleted).toBeTruthy();
    });
    it('it should find all the matched terms', async () => {
        const searchedUser = await userService.searchUser(5,'123');
        expect(searchedUser).toEqual([user]);
    });
});
