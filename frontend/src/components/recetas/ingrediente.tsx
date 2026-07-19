interface IngredienteItemProps {
  nombre: string;
  cantidad: number;
  unidad: string;
}

export default function IngredienteItem({
  nombre,
  cantidad,
  unidad,
}: IngredienteItemProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3">
        <span className="text-green-600">
          ✓
        </span>

        <span className="font-medium">
          {nombre}
        </span>
      </div>

      <span className="text-sm text-muted-foreground">
        {cantidad} {unidad}
      </span>
    </div>
  );
}