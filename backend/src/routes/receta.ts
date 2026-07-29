import { Router } from "express";

import { get_recetas } from "../controllers/receta";

const router = Router();

router.get("/", get_recetas);

export default router;