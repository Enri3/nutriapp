import { Search } from "lucide-react";
import { useState } from "react";

import RecetaCard from "@/components/recetas/receta_card";
import FiltroRecetas from "@/components/recetas/filtro";
import EncabezadoPagina from "@/components/headers/page";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { recetasMock } from "@/mocks/recetas.mock";

const filtros = [
  { id: "sandwich", nombre: "Sandwich", icono: "🥪" },
  { id: "pasta", nombre: "Pasta", icono: "🍝" },
  { id: "pizza", nombre: "Pizza", icono: "🍕" },
  { id: "ensalada", nombre: "Ensalada", icono: "🥗" },
  { id: "carne", nombre: "Carne", icono: "🥩" },
  { id: "pollo", nombre: "Pollo", icono: "🍗" },
  { id: "pescado", nombre: "Pescado", icono: "🐟" },
  { id: "postre", nombre: "Postre", icono: "🍰" },
  { id: "bebida", nombre: "Bebida", icono: "🥤" },
  { id: "snack", nombre: "Snack", icono: "🍿" },
];

export default function ListadoRecetasPage() {
  const [filtro_seleccionado, set_filtro_seleccionado] =
    useState("sandwich");

  return (
    <div className="space-y-4 pb-2">
      <EncabezadoPagina
        subtitulo="Catálogo"
        titulo="Recetas"
        descripcion="Busca y revisa recetas listas para usar en tu plan."
        texto_accion="Agregar receta"
        ruta_accion="/agregar_receta"
      />

      <Card>
        <CardContent className="space-y-3 p-4">
          <label className="flex items-center gap-2 rounded-2xl border border-border/70 bg-background px-3 py-2.5">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar receta"
              className="h-auto border-0 bg-transparent p-0 text-sm shadow-none focus-visible:ring-0"
            />
          </label>

          <FiltroRecetas
            filtros={filtros}
            filtro_seleccionado={filtro_seleccionado}
            on_cambiar_filtro={set_filtro_seleccionado}
          />
        </CardContent>
      </Card>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Sugerencias
            </p>
            <h2 className="text-lg font-semibold">
              Recetas para hoy
            </h2>
          </div>

          <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            {recetasMock.length}
          </span>
        </div>

        <div className="space-y-3">
          {recetasMock.map((receta) => (
            <RecetaCard key={receta.id} {...receta} />
          ))}
        </div>
      </section>
    </div>
  );
}