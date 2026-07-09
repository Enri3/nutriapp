interface DiaCardProps {
  dia: string;
  cantidad_comidas: number;
}

export default function DiaCard({
  dia,
  cantidad_comidas,
}: DiaCardProps) {
  return (
    <div className="rounded-3xl border border-border/70 bg-card p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base font-semibold">
          {dia}
        </h3>

        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {cantidad_comidas}
        </span>
      </div>

      <p className="mt-2 text-sm text-muted-foreground">
        {cantidad_comidas} comidas planificadas
      </p>
    </div>
  );
}