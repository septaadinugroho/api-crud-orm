import { z } from "zod";

export const createGadgetSchema = z.object({
  name: z.string().min(1),
  brand: z.string().min(1),
  price: z
    .number()
    .positive("Price must be positive")
    .min(1, "Price must be filled"),
});

export const updateGadgetSchema = createGadgetSchema.partial();

export type CreateGadgetDTO = z.infer<typeof createGadgetSchema>;
export type UpdateGadgetDTO = z.infer<typeof updateGadgetSchema>;
