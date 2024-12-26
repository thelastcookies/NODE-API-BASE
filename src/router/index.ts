import Router from '@koa/router';
import country from './country.ts';

const router = new Router({
  prefix: '/api',
});

router.get('/', async (ctx) => {
  ctx.type = 'html';
  ctx.body = '<h1>hello world!</h1>';
});

router.use(country.routes(), country.allowedMethods());

export default router;
