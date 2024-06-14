import Koa from 'koa';
import bodyParser from '@koa/bodyparser';
import cors from '@koa/cors';
import router from './router';

const app = new Koa();

// Middlewares
app.use(cors());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

export default app;
