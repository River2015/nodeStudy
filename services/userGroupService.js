const Sequelize = require("sequelize");

function UserGroupService(userModel, groupModel) {
    this.userModel = userModel;
    this.groupModel = groupModel;
}

UserGroupService.prototype.addUsersToGroup = async function(UsersToGroups) {
    try{
        const data = await this.groupModel.findOne({ where: { id: UsersToGroups.groupId } });
        const inP = Sequelize.Op.in;
        const users = await this.userModel.findAll({
            where: { id: { [inP]: UsersToGroups.userId } }
        });
        await data.addUsers(users);

        const usersGroups = await this.groupModel.findOne({
            where: { id: UsersToGroups.groupId },
        });
        return usersGroups;
    } catch(error){
        return error
    }
};

module.exports = UserGroupService;
