import { Router } from "express";
import { create, getAll, getById, remove } from "../controllers/app.controller";
import { mandtValidationMiddleware } from "../shared/middleware/mandt-validation.middleware";
import { addAppKeyValidationMiddleware } from "../shared/middleware/add-app-key-validation.middleware";
import { appKeyValidationMiddleware } from "../shared/middleware/app-key-validation.middleware";

const router = Router();

router.post(
  "/",
  [mandtValidationMiddleware, addAppKeyValidationMiddleware],
  create
);
router.get("/", getAll);
router.delete("/:uuid", [appKeyValidationMiddleware], remove);
router.get("/:uuid", getById);
export default router;
