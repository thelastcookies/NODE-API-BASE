import Router from '@koa/router';
import { userController } from '../controller';

const userRouter = new Router({
  prefix: '/user',
});

userRouter.get('/', userController.getUsers);
userRouter.get('/:id', userController.getUserById);
userRouter.post('/', userController.createUser);

export default userRouter;
