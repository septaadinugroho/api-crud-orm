import express, { Request, Response } from "express";
import morgan from "morgan";
import supercarRouter from "./routes/supercar.route.js";
import gadgetRouter from "./routes/gadget.route.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "API Running...",
  });
});

app.use("/api/supercars", supercarRouter);
app.use("/api/gadgets", gadgetRouter);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
