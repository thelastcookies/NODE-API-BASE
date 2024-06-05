import Router from '@koa/router';
import userController from '../controllers/userController';

const router = new Router({
    prefix: '/users'
});

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

export default router;
