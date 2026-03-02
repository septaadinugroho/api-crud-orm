import prisma from "../lib/prisma.js";
import {
  CreateSupercarDTO,
  UpdateSupercarDTO,
} from "../schema/supercar.schema.js";

export const supercarRepository = {
  findAll: async ({
    skip,
    take,
    where,
    orderBy,
  }: {
    skip?: number;
    take?: number;
    where?: any;
    orderBy?: any;
  }) => {
    return await prisma.supercar.findMany({
      skip,
      take,
      where,
      orderBy,
    });
  },

  count: async (where?: any) => {
    return prisma.supercar.count({ where });
  },

  findById: async (id: number) => {
    return await prisma.supercar.findUnique({
      where: { id },
    });
  },

  create: async (data: CreateSupercarDTO) => {
    return await prisma.supercar.create({ data });
  },

  update: async (id: number, data: UpdateSupercarDTO) => {
    return await prisma.supercar.update({
      where: { id },
      data,
    });
  },

  delete: async (id: number) => {
    return await prisma.supercar.delete({
      where: { id },
    });
  },
};
