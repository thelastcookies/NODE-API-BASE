// import Koa from "koa";
// import dotenv from 'dotenv';
//
// import bodyParser from '@koa/bodyparser';
// import cors from '@koa/cors';
// import reslogger from './middleware/reslogger';
// import context from './extend/context';
// import moundRouter from './router';
//
// // Load environment variables from .env file
// dotenv.config({
//     path: '../.env/.env',
// });
//
// const PORT = process.env.PORT || 3000;
//
//
//
// export const start = () => {
//     const app = new Koa();
//
//     Object.assign(app.context, context);
//
//     app.use(reslogger());
//     app.use(cors());
//     app.use(bodyParser(config.bodyParser));
//
//     moundRouter(app);
//     const server = app.listen(config.port);
//
//     app.listen(PORT, () => {
//         console.log(`Server is running on port ${PORT}`);
//     });
//
//     KT.logger.info(`${config.name} is running at: http://localhost:${config.port}`);
//     return server;
// };
