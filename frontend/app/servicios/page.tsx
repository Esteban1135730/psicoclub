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
      <div>
        <header className="space-y-3 px-6 py-10 text-center sm:px-10 md:px-12 lg:px-16">
          <h1 className="font-heading text-3xl text-cherry sm:text-4xl lg:text-5xl">Servicios</h1>
          <p className="mx-auto max-w-2xl font-body text-body-lg text-slate-600 sm:text-body-xl">
            Conoce en detalle cada uno de nuestros servicios para instituciones educativas y comunidades.
          </p>
        </header>

        <section className="space-y-0">
          {SERVICIOS.map((servicio, index) => {
            const imageLeft = index % 2 === 0;
            const titleColor = index % 2 === 0 ? "text-cherry" : "text-orange";
            const bgClass = index % 2 === 0 ? "bg-white" : "bg-amber-50/80";

            return (
              <article
                key={servicio.id}
                id={servicio.id}
                className={`scroll-mt-24 py-14 sm:py-16 lg:py-20 ${bgClass}`}
              >
                <div
                  className={`mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-start md:gap-14 md:px-10 lg:gap-16 lg:px-16 ${
                    imageLeft ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="relative h-72 w-full shrink-0 overflow-hidden rounded-2xl shadow-lg md:h-80 md:w-[380px] lg:h-96 lg:w-[420px]">
                    <Image
                      src={servicio.imageSrc}
                      alt={servicio.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center space-y-5">
                    <div className={`border-l-4 pl-4 md:pl-6 ${index % 2 === 0 ? "border-cherry" : "border-orange"}`}>
                      <h2 className={`font-heading text-2xl font-bold sm:text-3xl lg:text-4xl ${titleColor}`}>
                        {servicio.title}
                      </h2>
                    </div>
                    <p className="font-body text-base leading-relaxed text-slate-700 sm:text-body-lg">
                      {servicio.fullDescription}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </LayoutShell>
  );
}
