import { prisma } from "../config/prisma";

interface CrearUsuarioDTO {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
}

export async function obtener_usuarios() {
  return prisma.usuario.findMany();
}

export async function crear_usuario(
  datos: CrearUsuarioDTO,
) {
  return prisma.usuario.create({
    data: datos,
  });
}