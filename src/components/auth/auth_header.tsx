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
      <h1 className="text-3xl font-bold">
        {titulo}
      </h1>

      <p className="text-sm text-muted-foreground">
        {descripcion}
      </p>
    </div>
  );
}