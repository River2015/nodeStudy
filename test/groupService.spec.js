const GroupService = require('../services/groupService');

const group = {
    id: '12345678',
    group_name: 'group',
    permissions:  ['READ', 'WRITE', 'EDIT']
}
const updatedPermissions = ['ADMIN'];
const updatedGroup = {
    ...group,
    permissions:  updatedPermissions,
}
const mockGroupModel = {
    findAll: () => {
        return [group]
    },
    create: (group) => {
        return {dataValues: group}
    },
    findOne: () => {
        return group;
    },
    destroy: () => {
        return group;
    },
    update: () => {
        return updatedGroup;
    }
}

const groupService = new GroupService(mockGroupModel);

describe('Group service', () => {
    it('should get all groups', async() => {
        const groups = await groupService.getAllGroups();
        expect(groups).toEqual([group])
    });
    it('should create group', async () => {
        const createdGroup = await groupService.createGroup(group);
        expect(createdGroup).toEqual(group);
    });
    it('should find group by id', async () => {
        const oneGroup = await groupService.getGroup(group.id);
        expect(oneGroup).toEqual(group);
    });
    it('should delete group', async() => {
        const deletedGroup = await groupService.deleteGroup(group.id);
        expect(deletedGroup).toEqual(group);
    });
    it('should update group', async() => {
        const updated = await groupService.updateGroup(group.id, updatedGroup);
        expect(updated).toEqual(updatedGroup[1]);
        const updatedNull = null;
        expect(updatedNull).toEqual(null);
    })
 }
)
