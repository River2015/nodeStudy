const Sequelize = require("sequelize");

function UserGroupService(userModel, groupModel) {
    this.userModel = userModel;
    this.groupModel = groupModel;
}

UserGroupService.prototype.addUsersToGroup = async function(groupUsers) {
    try{
        const data = await this.groupModel.findOne({ where: { id: groupUsers.group } });
        const inP = Sequelize.Op.in;

        const users = await this.userModel.findAll({
            where: { id: { [inP]: groupUsers.users } }
        });

        await data.addUsers(users);

        const usersGroups = await this.groupModel.findOne({
            where: { id: groupUsers.group },
            include: [
                {
                    model: this.userModel,
                    as: "users",
                    attributes: ["login", "password", "id", "age"]
                }
            ]
        });
        return usersGroups;
    } catch(error){
        return error
    }
};

module.exports = UserGroupService;
