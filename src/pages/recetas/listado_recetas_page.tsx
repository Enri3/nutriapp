import { Search } from "lucide-react";

import RecetaCard from "@/components/recetas/receta_card";
import EncabezadoPagina from "@/components/headers/page_header";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { recetasMock } from "@/mocks/recetas.mock";

const filtros = ["Todas", "Desayuno", "Almuerzo", "Cena"];

export default function ListadoRecetasPage() {
  return (
    <div className="space-y-4 pb-2">
      <EncabezadoPagina
        subtitulo="Catálogo"
        titulo="Recetas"
        descripcion="Busca y revisa recetas listas para usar en tu plan."
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

          <div className="flex gap-2 overflow-x-auto pb-1">
            {filtros.map((filtro, index) => (
              <span
                key={filtro}
                className={[
                  "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium",
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground",
                ].join(" ")}
              >
                {filtro}
              </span>
            ))}
          </div>
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