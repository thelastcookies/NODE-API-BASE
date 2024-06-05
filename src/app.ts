import Koa from 'koa';
import bodyParser from '@koa/bodyparser';
import userRoutes from './routes/userRoutes';

const app = new Koa();

// Middlewares
app.use(bodyParser());

// Routes
app.use(userRoutes.routes());
app.use(userRoutes.allowedMethods());

export default app;
