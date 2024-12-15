import dotenv from 'dotenv';
import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from '@koa/bodyparser';
import router from './router';
import loggerMiddleware from './middleware/logger.ts';
import responseMiddleware from './middleware/response.ts';

dotenv.config({
  path: ['.env/.env', '.env/.env.development'],
});

const PORT = process.env.PORT || 3000;

const app = new Koa();

// Middlewares
app.use(responseMiddleware);
app.use(loggerMiddleware);
app.use(cors());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => console.log(`
🚀 Server ready at: http://localhost:${PORT}`),
);
