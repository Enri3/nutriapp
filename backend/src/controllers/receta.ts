import { Request, Response } from "express";

import { obtener_recetas } from "../services/receta";

export async function get_recetas(
  _: Request,
  res: Response,
) {
  const recetas = await obtener_recetas();

  res.json(recetas);
}