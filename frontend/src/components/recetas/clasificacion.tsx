interface Clasificacion {
  icono?: string;
  texto: string;
}

interface ClasificacionesRecetaProps {
  clasificaciones: Clasificacion[];
}

export default function ClasificacionesReceta({
  clasificaciones,
}: ClasificacionesRecetaProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {clasificaciones.map((clasificacion) => (
        <span
          key={`${clasificacion.icono ?? ""}-${clasificacion.texto}`}
          className="flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs font-medium"
        >
          {clasificacion.icono && (
            <span>{clasificacion.icono}</span>
          )}

          <span>{clasificacion.texto}</span>
        </span>
      ))}
    </div>
  );
}