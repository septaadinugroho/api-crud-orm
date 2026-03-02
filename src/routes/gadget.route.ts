import { Router } from "express";
import { gadgetController } from "../controllers/gadget.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { createGadgetSchema } from "../schema/gadget.schema.js";

const router = Router();

router.get("/", gadgetController.getAll);
router.get("/:id", gadgetController.getById);
router.post("/", validate(createGadgetSchema), gadgetController.create);
router.put("/:id", validate(createGadgetSchema), gadgetController.update);
router.delete("/:id", gadgetController.delete);

export default router;
