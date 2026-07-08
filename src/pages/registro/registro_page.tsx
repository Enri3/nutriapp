import { Link } from "react-router-dom";

import AuthHeader from "@/components/auth/auth_header";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegistroPage() {
  return (
    <>
		<AuthHeader
			titulo="NutriApp"
			descripcion="Crea una nueva cuenta"
		/>

		<form className="space-y-4">

			<div>
			<Label htmlFor="nombre">Nombre</Label>
			<Input
				id="nombre"
				placeholder="Nombre"
			/>
			</div>

			<div>
			<Label htmlFor="apellido">Apellido</Label>
			<Input
				id="apellido"
				placeholder="Apellido"
			/>
			</div>

			<div>
			<Label htmlFor="email">Email</Label>
			<Input
				id="email"
				type="email"
				placeholder="correo@ejemplo.com"
			/>
			</div>

			<div>
			<Label htmlFor="password">Contraseña</Label>
			<Input
				id="password"
				type="password"
				placeholder="********"
			/>
			</div>

			<div>
			<Label htmlFor="confirmPassword">
				Confirmar contraseña
			</Label>

			<Input
				id="confirmPassword"
				type="password"
				placeholder="********"
			/>
			</div>

			<Button className="w-full">
			Registrarse
			</Button>

			<p className="text-center text-sm">
			¿Ya tienes cuenta?{" "}
			<Link
				to="/login"
				className="font-medium text-green-600"
			>
				Iniciar sesión
			</Link>
			</p>

		</form>
	</>
  );
}