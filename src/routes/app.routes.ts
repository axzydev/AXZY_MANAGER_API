import { Router } from "express";
import {
  create,
  disable,
  getAll,
  getById,
  remove,
  update,
} from "../controllers/app.controller";
import { mandtValidationMiddleware } from "../shared/middleware/mandt-validation.middleware";
import { addAppKeyValidationMiddleware } from "../shared/middleware/add-app-key-validation.middleware";

const router = Router();

router.post(
  "/",
  [mandtValidationMiddleware, addAppKeyValidationMiddleware],
  create
);
router.get("/", getAll);
router.delete("/:uuid", remove);
router.get("/:uuid", getById);
router.put("/:uuid", update);
router.patch("/:uuid", disable);
export default router;
