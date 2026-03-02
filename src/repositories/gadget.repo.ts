import prisma from "../lib/prisma.js";
import { CreateGadgetDTO, UpdateGadgetDTO } from "../schema/gadget.schema.js";

export const gadgetRepository = {
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
    return await prisma.gadget.findMany({ skip, take, where, orderBy });
  },

  count: async (where?: any) => {
    return await prisma.gadget.count({ where });
  },

  findById: async (id: number) => {
    return await prisma.gadget.findUnique({
      where: { id },
    });
  },

  create: async (data: CreateGadgetDTO) => {
    return await prisma.gadget.create({ data });
  },

  update: async (id: number, data: UpdateGadgetDTO) => {
    return await prisma.gadget.update({
      where: { id },
      data,
    });
  },

  delete: async (id: number) => {
    return await prisma.gadget.delete({
      where: { id },
    });
  },
};
