import { ShoppingBasket } from "lucide-react";

import ItemCompra from "@/components/compras/item_compra";
import EncabezadoPagina from "@/components/headers/page";
import { Card, CardContent } from "@/components/ui/card";
import { comprasMock } from "@/mocks/compras.mock";

export default function ListaComprasPage() {
  const pendientes = comprasMock.filter((item) => !item.comprado);
  const comprados = comprasMock.filter((item) => item.comprado);

  return (
    <div className="space-y-4 pb-2">
      <EncabezadoPagina
        subtitulo="Organización"
        titulo="Compras"
        descripcion="Revisa lo pendiente y lo que ya está comprado antes de salir."
      />

      <Card>
        <CardContent className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-3">
          <div className="min-w-0 rounded-2xl bg-primary/10 p-3 text-center">
            <p className="text-xs uppercase tracking-[0.16em] text-primary/70">
              Total
            </p>
            <p className="mt-1 text-lg font-semibold text-primary sm:text-xl">
              {comprasMock.length}
            </p>
          </div>

          <div className="min-w-0 rounded-2xl bg-muted p-3 text-center">
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Pendientes
            </p>
            <p className="mt-1 text-lg font-semibold sm:text-xl">
              {pendientes.length}
            </p>
          </div>

          <div className="min-w-0 rounded-2xl bg-success/10 p-3 text-center">
            <p className="text-xs uppercase tracking-[0.16em] text-success">
              Listo
            </p>
            <p className="mt-1 text-lg font-semibold text-success sm:text-xl">
              {comprados.length}
            </p>
          </div>
        </CardContent>
      </Card>

      <section className="space-y-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Lista pendiente
          </p>
          <h2 className="text-lg font-semibold">
            Para comprar hoy
          </h2>
        </div>

        <div className="space-y-3">
          {pendientes.map((item) => (
            <ItemCompra key={item.id} {...item} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <ShoppingBasket className="h-4 w-4 text-muted-foreground" />
          <h2 className="text-base font-semibold">
            Ya comprados
          </h2>
        </div>

        <div className="space-y-3">
          {comprados.map((item) => (
            <ItemCompra key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}