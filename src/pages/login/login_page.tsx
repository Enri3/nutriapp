import { Link } from "react-router-dom";

import AuthHeader from "@/components/headers/auth_header";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <>
      <AuthHeader
        titulo="NutriApp"
        descripcion="Inicia sesión para continuar"
      />

      <form className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" />
        </div>

        <div>
          <Label htmlFor="password">Contraseña</Label>
          <Input id="password" type="password" />
        </div>

        <Button className="w-full">
          Iniciar sesión
        </Button>

        <p className="text-center text-sm">
          ¿No tienes cuenta?{" "}
          <Link to="/registro" className="text-green-600">
            Registrarse
          </Link>
        </p>
      </form>
    </>
  );
}