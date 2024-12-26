import type { Prisma } from '@prisma/client';

export interface GetCountriesQuery {
  keyword?: string;
  sort?: string;
  order?: Prisma.SortOrder;
}

