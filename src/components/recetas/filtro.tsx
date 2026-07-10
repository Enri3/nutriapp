interface FiltroReceta {
  id: string;
  nombre: string;
  icono: string;
}

interface FiltroRecetasProps {
  filtros: FiltroReceta[];
  filtro_seleccionado: string;
  on_cambiar_filtro: (id: string) => void;
}

export default function FiltroRecetas({
  filtros,
  filtro_seleccionado,
  on_cambiar_filtro,
}: FiltroRecetasProps) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {filtros.map((filtro) => {
        const seleccionado =
          filtro.id === filtro_seleccionado;

        return (
          <button
            key={filtro.id}
            onClick={() => on_cambiar_filtro(filtro.id)}
            className={`
              flex min-w-[90px] flex-col items-center gap-1
              rounded-xl border px-4 py-3 transition-colors
              ${
                seleccionado
                  ? "border-green-600 bg-green-50"
                  : "border-slate-200 bg-white"
              }
            `}
          >
            <span className="text-2xl">
              {filtro.icono}
            </span>

            <span className="text-xs font-medium">
              {filtro.nombre}
            </span>
          </button>
        );
      })}
    </div>
  );
}