import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Radar } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function NotFoundPage() {
  const error = useRouteError() as unknown;
  const status = isRouteErrorResponse(error) ? error.status : 404;
  const message = isRouteErrorResponse(error) ? error.data : error instanceof Error ? error.message : "Expediente no encontrado";
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <Radar size={40} className="text-neon-magenta glow-magenta" />
      <div className="label-stencil">Error {status}</div>
      <h1 className="text-2xl">Este destino no está en el archivo</h1>
      <p className="max-w-md text-sm text-concrete-400">{String(message)}</p>
      <Link to="/">
        <Button variant="neon">Volver al centro de control</Button>
      </Link>
    </div>
  );
}
