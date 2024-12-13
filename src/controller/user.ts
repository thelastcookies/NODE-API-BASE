import { Context } from 'koa';
import { userService } from '../service';

export const createUser = async (ctx: Context) => {
  const { email, name } = ctx.request.body;
  if (!email) {
    ctx.status = 400;
    ctx.body = { error: 'Email is required' };
    return;
  }
  try {
    const user = await userService.createUser(email, name);
    ctx.status = 201;
    ctx.body = user;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal server error' };
  }
};

export const getUsers = async (ctx: Context) => {
  try {
    const users = await userService.getUsers();
    ctx.status = 200;
    ctx.body = users;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal server error' };
  }
};

export const getUserById = async (ctx: Context) => {
  try {
    const user = await userService.getUserById(ctx.params.id);
    ctx.status = 200;
    ctx.body = user;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal server error' };
  }
};
