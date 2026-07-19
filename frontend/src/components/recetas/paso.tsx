interface PasoRecetaProps {
  numero: number;
  descripcion: string;
}

export default function PasoReceta({
  numero,
  descripcion,
}: PasoRecetaProps) {
  return (
    <div className="flex gap-4 py-2">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
        {numero}
      </div>

      <p className="text-sm leading-relaxed">
        {descripcion}
      </p>
    </div>
  );
}