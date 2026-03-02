import { Router } from "express";
import { supercarController } from "../controllers/supercar.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { createSupercarSchema } from "../schema/supercar.schema.js";

const router = Router();

router.get("/", supercarController.getAll);
router.get("/:id", supercarController.getById);
router.post("/", validate(createSupercarSchema), supercarController.create);
router.put("/:id", validate(createSupercarSchema), supercarController.update);
router.delete("/:id", supercarController.delete);

export default router;
