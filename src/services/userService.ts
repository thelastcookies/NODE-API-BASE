import userModel from '../models/userModel';

class UserService {
    async getAllUsers() {
        return await userModel.findAll();
    }

    async createUser(userData: any) {
        return await userModel.create(userData);
    }
}

export default new UserService();
