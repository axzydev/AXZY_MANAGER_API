import cors from "cors";
import express from "express";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

//ROUTES
import apiRouter from "@routes/api.router";
import { tokenValidationMiddleware } from "@shared/middleware/token-validation.middleware";
import { apiValidator } from "@shared/middleware/schema-validator.middleware";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json(), helmet(), cors());

app.use(
  "/swagger",
  swaggerUi.serve,
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const swaggerDocument = YAML.load("./swagger.yaml");
    const swaggerUiHandler = swaggerUi.setup(swaggerDocument);
    swaggerUiHandler(req, res, next);
  }
);

app.use(apiValidator());

app.use(tokenValidationMiddleware);

app.use("/api/v1", apiRouter);

app.listen(PORT, () => {
  console.log(`[App] Listening on: ${PORT}`);
});
