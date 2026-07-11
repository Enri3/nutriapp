export const recetasMock = [
  {
    id: 1,
    nombre: "Pollo con arroz",
    categoria: "Almuerzo",
    tiempoPreparacion: 45,
    dificultad: "Fácil",
  },
  {
    id: 2,
    nombre: "Ensalada César",
    categoria: "Cena",
    tiempoPreparacion: 15,
    dificultad: "Fácil",
  },
  {
    id: 3,
    nombre: "Sopa de verduras",
    categoria: "Almuerzo",
    tiempoPreparacion: 30,
    dificultad: "Fácil",
  },
  {
    id: 4,
    nombre: "Tacos de pescado",
    categoria: "Cena",
    tiempoPreparacion: 20,
    dificultad: "Fácil",
  },
  {
    id: 5,
    nombre: "Pasta al pesto",
    categoria: "Almuerzo",
    tiempoPreparacion: 25,
    dificultad: "Fácil",
  }
];

export const recetaMock1 = {
  id: 1,
  nombre: "Pollo con arroz",
  categoria: "Almuerzo",
  tiempoPreparacion: 45,
  dificultad: "Fácil",
  ingredientes: [
    { nombre: "Pechuga de pollo", cantidad: 2, unidad: "kg" },
    { nombre: "Arroz integral", cantidad: 1, unidad: "kg" },
    { nombre: "Aceite de oliva", cantidad: 2, unidad: "cucharadas" },
    { nombre: "Sal", cantidad: 1, unidad: "cucharadita" },
    { nombre: "Pimienta", cantidad: 1, unidad: "cucharadita" },
  ],
  pasos: [
    "Cortar la pechuga de pollo en trozos y sazonar con sal y pimienta.",
    "Calentar el aceite de oliva en una sartén y cocinar el pollo hasta que esté dorado.",
    "Cocinar el arroz integral según las instrucciones del paquete.",
    "Servir el pollo sobre el arroz y disfrutar.",
  ],
};

export const recetaMock2 = {
  id: 2,
  nombre: "Ensalada César",
  categoria: "Cena",
  tiempoPreparacion: 15,
  dificultad: "Fácil",
  ingredientes: [
    { nombre: "Lechuga romana", cantidad: 1, unidad: "unidad" },
    { nombre: "Pechuga de pollo a la parrilla", cantidad: 1, unidad: "unidad" },
    { nombre: "Queso parmesano rallado", cantidad: 50, unidad: "g" },
  ],
  pasos: [
    "Lavar y cortar la lechuga romana en tiras.",
    "Calentar una parrilla y cocinar la pechuga de pollo hasta que esté hecha.",
    "Rallar el queso parmesano.",
    "Mezclar la lechuga con el queso parmesano y servir con la pechuga de pollo.",
  ],
};