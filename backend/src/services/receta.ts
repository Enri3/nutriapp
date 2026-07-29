import { prisma } from "../config/prisma";

export async function obtener_recetas() {
  return prisma.receta.findMany({
    include: {
      categoriaReceta: true,
      usuario: true,
    },
  });
}