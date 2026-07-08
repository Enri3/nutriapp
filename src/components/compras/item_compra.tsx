interface ItemCompraProps {
  nombre: string;
  cantidad: number;
  unidad: string;
  comprado: boolean;
}

export default function ItemCompra({
  nombre,
  cantidad,
  unidad,
  comprado,
}: ItemCompraProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-3">
      <div>
        <p>{nombre}</p>

        <p className="text-sm text-muted-foreground">
          {cantidad} {unidad}
        </p>
      </div>

      <span>
        {comprado ? "✅" : "⬜"}
      </span>
    </div>
  );
}