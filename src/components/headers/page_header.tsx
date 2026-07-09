import type { ReactNode } from "react";

interface EncabezadoPaginaProps {
  subtitulo: string;
  titulo: string;
  descripcion: string;
  contenidoExtra?: ReactNode;
}

export default function EncabezadoPagina({
  subtitulo,
  titulo,
  descripcion,
  contenidoExtra,
}: EncabezadoPaginaProps) {
  return (
    <section className="space-y-2.5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            {subtitulo}
          </p>

          <h1 className="text-[2rem] font-semibold tracking-tight text-balance sm:text-[2.35rem]">
            {titulo}
          </h1>
        </div>

        {contenidoExtra ? <div className="shrink-0 pt-1">{contenidoExtra}</div> : null}
      </div>

      <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
        {descripcion}
      </p>
    </section>
  );
}