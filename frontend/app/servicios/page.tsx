import Image from "next/image";
import { LayoutShell } from "../../components/LayoutShell";
import { SERVICIOS } from "../../lib/serviciosData";

export const metadata = {
  title: "Servicios | Psicoclub",
  description:
    "Asesoría a jardines infantiles, psicología y neuropsicopedagogía, nutrición y enfermería, actividades artísticas, talleres para familias y laboratorios de formación."
};

export default function ServiciosPage() {
  return (
    <LayoutShell>
      <div className="space-y-16">
        <header className="space-y-3 px-6 sm:px-10 md:px-12 lg:px-16">
          <h1 className="font-heading text-3xl text-slate-900 sm:text-4xl">Servicios</h1>
          <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
            Conoce en detalle cada uno de nuestros servicios para instituciones educativas y comunidades.
          </p>
        </header>

        <section className="space-y-20 px-6 sm:px-10 md:px-12 lg:px-16">
          {SERVICIOS.map((servicio) => (
            <article
              key={servicio.id}
              id={servicio.id}
              className="scroll-mt-24"
            >
              <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
                <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-2xl md:h-72 md:w-80 lg:h-80 lg:w-96">
                  <Image
                    src={servicio.imageSrc}
                    alt={servicio.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="font-heading text-2xl font-bold text-slate-900 sm:text-3xl">
                    {servicio.title}
                  </h2>
                  <p className="font-body text-base leading-relaxed text-slate-700 sm:text-lg">
                    {servicio.fullDescription}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </LayoutShell>
  );
}
