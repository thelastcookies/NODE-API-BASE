import prisma from '../prisma';
import type { GetCountriesQuery } from './types';
import type { Prisma } from '@prisma/client';

export const getCountries = async (query: GetCountriesQuery) => {
  let where = {
    AND: [] as Prisma.countryWhereInput[],
  };
  if ('keyword' in query) {
    where.AND.push({
      OR: [
        { name: { contains: query.keyword } },
        { code: { contains: query.keyword } },
        { region: { contains: query.keyword } },
        { localName: { contains: query.keyword } },
        { headOfState: { contains: query.keyword } },
      ],
    });
  }
  let orderBy = {};
  if ('sort' in query) {
    orderBy = { [query.sort as keyof Prisma.countryOrderByWithRelationInput]: query.order };
  }

  return await prisma.country.findMany({
    where,
    orderBy,
  });
};

export const getCountryByCode = async (code: string) => {
  return await prisma.country.findUnique({
    where: { code },
  });
};

export const saveCountry = async (country: any) => {
  let data = { ...country };
  if ('id' in country) {
    return await prisma.country.update({
      data,
      where: { code: country.code },
    });
  } else {
    return await prisma.country.create({
      data,
    });
  }
};

export const delCountryByCode = async (code: string) => {
  return await prisma.country.delete({
    where: { code },
  });
};
