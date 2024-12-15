import type { Context, Next } from 'koa';

const responseMiddleware = async (ctx: Context, next: Next) => {
  try {
    await next();
    const code = ctx.status || 200;
    if (ctx.body === undefined) {
      ctx.body = {
        code,
        message: 'success',
        data: null,
      };
    } else {
      ctx.body = {
        code,
        message: 'success',
        data: ctx.body,
      };
    }
  } catch (err: any) {
    ctx.status = err.status || 500;
    ctx.body = {
      code: ctx.status,
      message: err.message || 'Internal Server Error',
      detail: err.detail || null,
    };
  }
};

export default responseMiddleware;
