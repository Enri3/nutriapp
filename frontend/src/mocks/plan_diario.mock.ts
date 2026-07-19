import { recetaMock1 } from "./recetas.mock";
import { recetaMock2 } from "./recetas.mock";

export const comidas_dia_mock = [
  {
    receta_id: 1,
    tipo_comida: "Desayuno",
    nombre_receta: "Avena con frutas",
    porciones: 1,
    ingredientes: [
      { nombre: "Avena", cantidad: 80, unidad: "g" },
      { nombre: "Banana", cantidad: 1, unidad: "unidad" },
      { nombre: "Leche", cantidad: 250, unidad: "ml" },
      { nombre: "Miel", cantidad: 1, unidad: "cucharada" },
    ],
  },
  {
    receta_id: 2,
    tipo_comida: recetaMock1.categoria,
    nombre_receta: recetaMock1.nombre,
    porciones: 1,
    ingredientes: recetaMock1.ingredientes,
  },
  {
    receta_id: 3,
    tipo_comida: "Merienda",
    nombre_receta: "Yogur con granola",
    porciones: 1,
    ingredientes: [
      { nombre: "Yogur natural", cantidad: 1, unidad: "vaso" },
      { nombre: "Granola", cantidad: 40, unidad: "g" },
      { nombre: "Frutillas", cantidad: 4, unidad: "unidades" },
    ],
  },
  {
    receta_id: 4,
    tipo_comida: recetaMock2.categoria,
    nombre_receta: recetaMock2.nombre,
    porciones: 1,
    ingredientes: recetaMock2.ingredientes,
  },
];

export const comidas_dia_mock2 = [
  {
    receta_id: 1,
    tipo_comida: "Desayuno",
    nombre_receta: "Avena con frutas",
    porciones: 1,
    ingredientes: [
      { nombre: "Avena", cantidad: 80, unidad: "g" },
      { nombre: "Banana", cantidad: 1, unidad: "unidad" },
      { nombre: "Leche", cantidad: 250, unidad: "ml" },
      { nombre: "Miel", cantidad: 1, unidad: "cucharada" },
    ],
  },
  {
    receta_id: 2,
    tipo_comida: recetaMock1.categoria,
    nombre_receta: recetaMock1.nombre,
    porciones: 1,
    ingredientes: recetaMock1.ingredientes,
  },
  {
    receta_id: 3,
    tipo_comida: "Merienda",
    nombre_receta: "Yogur con granola",
    porciones: 1,
    ingredientes: [
      { nombre: "Yogur natural", cantidad: 1, unidad: "vaso" },
      { nombre: "Granola", cantidad: 40, unidad: "g" },
      { nombre: "Frutillas", cantidad: 4, unidad: "unidades" },
    ],
  },
];

export const comidas_dia_mock3 = [
  {
    receta_id: 1,
    tipo_comida: "Desayuno",
    nombre_receta: "Avena con frutas",
    porciones: 1,
    ingredientes: [
      { nombre: "Avena", cantidad: 80, unidad: "g" },
      { nombre: "Banana", cantidad: 1, unidad: "unidad" },
      { nombre: "Leche", cantidad: 250, unidad: "ml" },
      { nombre: "Miel", cantidad: 1, unidad: "cucharada" },
    ],
  },
  {
    receta_id: 2,
    tipo_comida: recetaMock1.categoria,
    nombre_receta: recetaMock1.nombre,
    porciones: 1,
    ingredientes: recetaMock1.ingredientes,
  },
  {
    receta_id: 3,
    tipo_comida: recetaMock2.categoria,
    nombre_receta: recetaMock2.nombre,
    porciones: 1,
    ingredientes: recetaMock2.ingredientes,
  },
];