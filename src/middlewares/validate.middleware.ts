import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError } from "zod";

export const validate =
  (schema: ZodSchema, source: "body" | "params" | "query" = "body") =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsed = await schema.parseAsync(req[source]);

      // overwrite request dengan data bersih
      (req as any)[source] = parsed;

      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({
          status: "fail",
          errors: err.issues.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        });
      }
      next(err);
    }
  };
