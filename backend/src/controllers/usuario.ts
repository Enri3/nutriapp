import { Request, Response } from "express";

import {
  obtener_usuarios,
  crear_usuario,
} from "../services/usuario";

export async function get_usuarios(
  _: Request,
  res: Response,
) {
  const usuarios = await obtener_usuarios();

  res.json(usuarios);
}

export async function post_usuario(
  req: Request,
  res: Response,
) {
  const usuario = await crear_usuario(
    req.body,
  );

  res.status(201).json(usuario);
}