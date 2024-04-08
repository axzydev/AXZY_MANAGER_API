import { Router } from "express";
import { create, getAll } from "../controllers/mandt.controller";
import { createMandtValidationMiddleware } from "../shared/middleware/add-mandt-validation.middleware";

const router = Router();

router.post("/", [createMandtValidationMiddleware], create);

router.get("/", getAll);


export default router;
