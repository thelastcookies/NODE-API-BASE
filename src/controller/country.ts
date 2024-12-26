import { Context } from 'koa';
import { countryService } from '../service';

export const getCountries = async (ctx: Context) => {
  try {
    const query = ctx.query;
    const resBody = await countryService.getCountries(query);
    ctx.status = 200;
    ctx.body = resBody;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { detail: `Method getCountries error: ${error}` };
  }
};

export const getCountryByCode = async (ctx: Context) => {
  try {
    const code = ctx.params.code;
    const resBody = await countryService.getCountryByCode(code);
    ctx.status = 200;
    ctx.body = resBody;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { detail: `Method getCountryByCode error: ${error}` };
  }
};

export const saveCountry = async (ctx: Context) => {
  try {
    const req = ctx.request.body;
    const resBody = await countryService.saveCountry(req);
    ctx.status = 'code' in req ? 200 : 201;
    ctx.body = resBody;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { detail: `Method saveCountry error: ${error}` };
  }
};

export const delCountryByCode = async (ctx: Context) => {
  try {
    const code = ctx.params.code;
    const resBody = await countryService.delCountryByCode(code);
    ctx.status = 200;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { detail: `Method delCountry error: ${error}` };
  }
};
