import { Router } from "express";
import { create, getAll, login } from "../controllers/user.controller";
import { appKeyValidationMiddleware } from "../shared/middleware/app-key-validation.middleware";
import { userValidationMiddleware } from "../shared/middleware/user-validation.middleware";

const router = Router();

router.post("/", [userValidationMiddleware], create);
router.get("/", getAll);
router.post("/login",[appKeyValidationMiddleware], login);

export default router;
