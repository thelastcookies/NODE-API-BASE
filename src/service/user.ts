import prisma from '../prisma';

export const createUser = (email: string, name?: string) => {
  return prisma.user.create({
    data: {
      email,
      name,
    },
  });
};

export const getUsers = () => {
  return prisma.user.findMany();
};

export const getUserById = (id: number) => {
  return prisma.user.findUnique({
    where: { id: Number(id) },
  });
};
