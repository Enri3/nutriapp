interface AuthHeaderProps {
  titulo: string;
  descripcion: string;
}

export default function AuthHeader({
  titulo,
  descripcion,
}: AuthHeaderProps) {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {titulo}
      </h1>

      <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
        {descripcion}
      </p>
    </div>
  );
}