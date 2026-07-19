import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Plus, Pen } from "lucide-react";

interface EncabezadoPaginaProps {
  subtitulo: string;
  titulo: string;
  descripcion: string;
  contenidoExtra?: ReactNode;
  texto_accion?: string;
  ruta_accion?: string;
}

export default function EncabezadoPagina({
  subtitulo,
  titulo,
  descripcion,
  contenidoExtra,
  texto_accion,
  ruta_accion,
}: EncabezadoPaginaProps) {
  return (
    <section className="space-y-2.5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1 flex items-center justify-between">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            {subtitulo}
          </p>

          {texto_accion && ruta_accion && (
          <Link to={ruta_accion} className="flex items-center gap-1 text-sm font-medium text-primary">
            {texto_accion != "Editar receta" ? <Plus className="h-4 w-4" /> : <Pen className="h-4 w-4" />}
            {texto_accion}
          </Link>)}

        </div>

        <h1 className="text-[2rem] font-semibold tracking-tight text-balance sm:text-[2.35rem]">
          {titulo}
        </h1>


        {contenidoExtra ? <div className="shrink-0 pt-1">{contenidoExtra}</div> : null}
      </div>

      <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
        {descripcion}
      </p>
    </section>
  );
}