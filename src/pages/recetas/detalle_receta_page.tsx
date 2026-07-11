import IngredienteItem from "@/components/recetas/ingrediente";
import PasoReceta from "@/components/recetas/paso";
import InformacionNutricional from "@/components/planificacion/informacion_nutricional";
import EncabezadoPagina from "@/components/headers/page_header";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { detalle_receta_mock } from "@/mocks/detalle_receta.mock";
import { recetasMock } from "@/mocks/recetas.mock";
import ClasificacionesReceta from "@/components/recetas/clasificacion";
import AlternativasReceta from "@/components/recetas/alternatias";

export default function DetalleRecetaPage() {
  const receta = detalle_receta_mock;

  return (
    <div className="space-y-4 pb-4">
      <EncabezadoPagina
        subtitulo={receta.categoria}
        titulo={receta.nombre}
        descripcion={receta.descripcion}
      />

      <Card>
        <CardContent className="p-0">
          {receta.imagen_url}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <Accordion multiple className="w-full px-4">
            <AccordionItem value="ingredientes">
              <AccordionTrigger>
                Ingredientes
              </AccordionTrigger>

              <AccordionContent>
                <div className="space-y-2">
                  {receta.ingredientes.map((ingrediente) => 
                  (<IngredienteItem
                        key={ingrediente.nombre}
                        nombre={ingrediente.nombre}
                        cantidad={ingrediente.cantidad}
                        unidad={ingrediente.unidad}
                    />))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="preparacion">
              <AccordionTrigger>
                Preparación
              </AccordionTrigger>

              <AccordionContent>
                <div className="space-y-3">
                  {receta.pasos.map((paso, index) => (<PasoReceta key={index} numero={index + 1} descripcion={paso}/>))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="nutricion">
              <AccordionTrigger>
                Información nutricional
              </AccordionTrigger>

              <AccordionContent>
                <InformacionNutricional
                  calorias={receta.nutricion.calorias}
                  proteinas={receta.nutricion.proteinas}
                  carbohidratos={receta.nutricion.carbohidratos}
                  grasas={receta.nutricion.grasas}
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="alternativas">
              <AccordionTrigger>
                Alternativas
              </AccordionTrigger>
              <AccordionContent>
                <AlternativasReceta recetas={recetasMock} />
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </CardContent>
      </Card>

      <ClasificacionesReceta
        clasificaciones={[
            { texto: receta.dificultad, }, 
            { icono: "⏱", texto: `${receta.tiempo_preparacion} min`, },
            { icono: "🍽", texto: `${receta.porciones} porciones`, }, ]}
      />

      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline">
          Guardar
        </Button>

        <Button>
          Planificar
        </Button>
      </div>
    </div>
  );
}