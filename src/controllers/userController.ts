import {Context} from 'koa';
import userService from '../services/userService';

class UserController {
    async getAllUsers(ctx: Context) {
        ctx.body = await userService.getAllUsers();
    }

    async createUser(ctx: Context) {
        ctx.body = await userService.createUser(ctx.body);
    }
}

export default new UserController();
