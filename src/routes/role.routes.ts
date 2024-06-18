import { getAll, getById, create } from "@controllers/role.controller";
import { Router } from "express";

const router = Router();

router.post("/", create);
router.get("/", getAll);
router.get("/:id", getById);

export default router;
