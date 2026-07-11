export const detalle_receta_mock = {
  id: 1,

  nombre: "Milanesas al horno",

  descripcion:
    "Una receta clásica preparada al horno, ideal para una comida saludable y sabrosa.",

  categoria: "Carnes",

  dificultad: "Fácil",

  tiempo_preparacion: 45,

  porciones: 4,

  imagen_url:
    "https://images.unsplash.com/photo-1544025162-d76694265947",

  nutricion: {
    calorias: 550,
    proteinas: 35,
    carbohidratos: 30,
    grasas: 20,
  },

  ingredientes: [
    {
      nombre: "Carne",
      cantidad: 500,
      unidad: "g",
    },
    {
      nombre: "Huevo",
      cantidad: 2,
      unidad: "un",
    },
    {
      nombre: "Pan rallado",
      cantidad: 150,
      unidad: "g",
    },
  ],

  pasos: [
    "Batir los huevos con una pizca de sal.",
    "Pasar la carne por huevo y luego por pan rallado.",
    "Colocar en una fuente para horno.",
    "Cocinar durante 30 minutos a 180°C.",
  ],
};