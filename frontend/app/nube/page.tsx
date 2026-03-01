import { LayoutShell } from "../../components/LayoutShell";

export const metadata = {
  title: "Nube | Psicoclub",
  description: "Recursos en la nube."
};

export default function NubePage() {
  return (
    <LayoutShell>
      <div className="space-y-4">
        <h1 className="font-heading text-3xl text-slate-900">nube</h1>
        <p className="text-slate-600">Contenido en construcción.</p>
      </div>
    </LayoutShell>
  );
}
