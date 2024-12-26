import Router from '@koa/router';
import { countryController } from '../controller';

const countryRouter = new Router({
  prefix: '/country',
});

countryRouter.get('/', countryController.getCountries);
countryRouter.get('/:id', countryController.getCountryByCode);
countryRouter.post('/', countryController.saveCountry);
countryRouter.delete('/:id', countryController.delCountryByCode);

export default countryRouter;
