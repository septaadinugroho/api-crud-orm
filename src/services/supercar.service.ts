import { supercarRepository } from "../repositories/supercar.repo.js";
import {
  CreateSupercarDTO,
  UpdateSupercarDTO,
} from "../schema/supercar.schema.js";
import {
  applyFilter,
  applyPagination,
  applySort,
} from "../utils/queryBuilder.js";

export const supercarService = {
  getAll: async (query: any) => {
    const { skip, take, page, limit } = applyPagination(query);
    const where = applyFilter(query);
    const orderBy = applySort(query);

    const [data, total] = await Promise.all([
      supercarRepository.findAll({
        skip,
        take,
        where,
        orderBy,
      }),
      supercarRepository.count(where),
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
    const car = await supercarRepository.findById(id);
    if (!car) {
      throw new Error("Supercar not found...");
    }

    return car;
  },

  create: async (data: CreateSupercarDTO) => {
    if (!data.name || !data.brand || !data.year) {
      throw new Error("Invalid data");
    }
    return await supercarRepository.create(data);
  },

  update: async (id: number, data: UpdateSupercarDTO) => {
    const exist = await supercarRepository.findById(id);

    if (!exist) {
      throw new Error("Car doesn't exist");
    }

    return await supercarRepository.update(id, data);
  },

  delete: async (id: number) => {
    const exist = await supercarRepository.findById(id);

    if (!exist) {
      throw new Error("Car doesn't exist");
    }

    return await supercarRepository.delete(id);
  },
};
