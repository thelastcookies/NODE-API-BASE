// Example using a simple in-memory data store
const users: any[] = [];

class UserModel {
    async findAll() {
        return users;
    }

    async create(userData: any) {
        const newUser = { id: users.length + 1, ...userData };
        users.push(newUser);
        return newUser;
    }
}

export default new UserModel();
