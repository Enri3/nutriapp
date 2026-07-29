import express from "express";
import cors from "cors";

import receta_routes from "./routes/receta";
import usuario_routes from "./routes/usuario";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/recetas", receta_routes);
app.use("/usuarios", usuario_routes);

app.get("/", (_, res) => {
  res.json({
    mensaje: "NutriApp API funcionando",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(
    `Servidor ejecutándose en puerto ${PORT}`
  );
});