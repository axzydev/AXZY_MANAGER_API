import { Router } from "express";
import { create, getAll, getById } from "../controllers/policy.controller";

const router = Router();

router.post("/", create);
router.get("/", getAll);
router.get("/:id", getById);

export default router;
