import { Router } from "express";

import {
  get_usuarios,
  post_usuario,
} from "../controllers/usuario";

const router = Router();

router.get("/", get_usuarios);

router.post("/", post_usuario);

export default router;