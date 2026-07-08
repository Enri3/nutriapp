interface ResumenNutricionalProps {
  calorias: number;
  proteinas: number;
  carbohidratos: number;
  grasas: number;
}

export default function ResumenNutricional({
  calorias,
  proteinas,
  carbohidratos,
  grasas,
}: ResumenNutricionalProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-lg border p-4">
        🔥 {calorias} kcal
      </div>

      <div className="rounded-lg border p-4">
        🥩 {proteinas} g
      </div>

      <div className="rounded-lg border p-4">
        🍞 {carbohidratos} g
      </div>

      <div className="rounded-lg border p-4">
        🥑 {grasas} g
      </div>
    </div>
  );
}