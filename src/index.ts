import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from '@koa/bodyparser';
import serve from 'koa-static';
import mount from 'koa-mount';
import dotenv from 'dotenv';
import ip from 'ip';
import router from './router';
import loggerMiddleware from './middleware/logger.ts';
import responseMiddleware from './middleware/response.ts';
import notFoundMiddleware from './middleware/not-found.ts';

dotenv.config({
  path: ['.env/.env', '.env/.env.development'],
});

const ipAddr = ip.address();
const PORT = process.env.PORT || 3000;

const app = new Koa();

/*************
 * Middlewares
 */
// 提供静态文件服务
app.use(mount('/uploads', serve(process.cwd() + '/uploads')));
// 统一返回结构
app.use(responseMiddleware);
// 处理 404
app.use(notFoundMiddleware);
// 日志记录
app.use(loggerMiddleware);
// 处理跨域
app.use(cors());
// 解析请求体
app.use(bodyParser());
// 路由配置
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => console.log(`
🚀 Server ready at: http://${ipAddr}:${PORT}`),
);
