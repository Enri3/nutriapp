import { Link } from "react-router-dom";

export default function BottomNavigation() {
  return (
    <nav>
      <Link to="/inicio">Inicio</Link> |{" "}
      <Link to="/recetas">Recetas</Link> |{" "}
      <Link to="/plan">Plan</Link> |{" "}
      <Link to="/compras">Compras</Link> |{" "}
      <Link to="/perfil">Perfil</Link>
    </nav>
  );
}