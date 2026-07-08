interface TarjetaComidaProps {
  tipoComida: string;
  nombreReceta: string;
  porciones: number;
}

export default function TarjetaComida({
  tipoComida,
  nombreReceta,
  porciones,
}: TarjetaComidaProps) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <p className="text-xs text-muted-foreground">
        {tipoComida}
      </p>

      <h3 className="font-semibold">
        {nombreReceta}
      </h3>

      <p className="text-sm text-muted-foreground">
        {porciones} porciones
      </p>
    </div>
  );
}