import Router from '@koa/router';
import { userController } from '../controller';

const userRouter = new Router();

userRouter.get('/', userController.getUsers);
userRouter.post('/', userController.createUser);

export default userRouter;
