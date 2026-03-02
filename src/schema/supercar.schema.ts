import { z } from "zod";

export const createSupercarSchema = z.object({
  name: z.string().min(1),
  brand: z.string().min(1),
  year: z.number().int(),
});

export const updateSupercarSchema = createSupercarSchema.partial();

export type CreateSupercarDTO = z.infer<typeof createSupercarSchema>;
export type UpdateSupercarDTO = z.infer<typeof updateSupercarSchema>;
