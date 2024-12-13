import Router from '@koa/router';
import user from './user';

const router = new Router({
  prefix: '/api',
});

router.get('/', async (ctx) => {
  ctx.type = 'html';
  ctx.body = '<h1>hello world!</h1>';
});

router.use(user.routes(), user.allowedMethods());

export default router;
