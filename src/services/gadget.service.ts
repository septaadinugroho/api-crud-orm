import { gadgetRepository } from "../repositories/gadget.repo.js";
import { CreateGadgetDTO, UpdateGadgetDTO } from "../schema/gadget.schema.js";
import {
  applyFilter,
  applyPagination,
  applySort,
} from "../utils/queryBuilder.js";

export const gadgetService = {
  getAll: async (query: any) => {
    const { skip, take, page, limit } = applyPagination(query);
    const where = applyFilter(query);
    const orderBy = applySort(query);

    const [data, total] = await Promise.all([
      gadgetRepository.findAll({ skip, take, where, orderBy }),
      gadgetRepository.count(where),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      data,
      meta: {
        total,
        totalPages,
        page,
        limit,
      },
    };
  },

  getById: async (id: number) => {
    const gadget = await gadgetRepository.findById(id);

    if (!gadget) {
      throw new Error("Gadget not found");
    }
    return gadget;
  },

  create: async (data: CreateGadgetDTO) => {
    const newGadget = await gadgetRepository.create(data);
    return newGadget;
  },

  update: async (id: number, data: UpdateGadgetDTO) => {
    const exist = await gadgetRepository.findById(id);
    if (!exist) {
      throw new Error("Gadget not found");
    }

    return gadgetRepository.update(id, data);
  },

  delete: async (id: number) => {
    const exist = await gadgetRepository.findById(id);
    if (!exist) {
      throw new Error("Gadget not found");
    }

    return gadgetRepository.delete(id);
  },
};
