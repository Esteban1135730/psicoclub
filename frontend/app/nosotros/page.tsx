import Link from "next/link";
import { LayoutShell } from "../../components/LayoutShell";
import { TeamCarousel } from "../../components/TeamCarousel";

export const metadata = {
  title: "Nosotros | Quiénes somos | Psicoclub",
  description:
    "Conoce a nuestro equipo interdisciplinario: psicólogas, nutricionistas, enfermeras y artistas. Acompañamos a instituciones educativas en estándares de calidad y desarrollo infantil."
};

const TEAM_CAROUSEL_SLIDES = [
  { imageSrc: "/fotos equipo/fotos equipo Carrucel/andrea nd.jpg", imageAlt: "Andrea", title: "Andrea N. D.", description: "" },
  { imageSrc: "/fotos equipo/fotos equipo Carrucel/enfermera sha.jpg", imageAlt: "Sha", title: "Sha", description: "Enfermería" },
  { imageSrc: "/fotos equipo/fotos equipo Carrucel/lider karen.jpg", imageAlt: "Karen", title: "Karen", description: "Líder" },
  { imageSrc: "/fotos equipo/fotos equipo Carrucel/lili ps.jpg", imageAlt: "Lili", title: "Lili", description: "" },
  { imageSrc: "/fotos equipo/fotos equipo Carrucel/psico adri.jpg", imageAlt: "Adri", title: "Adri", description: "Psicología" },
  { imageSrc: "/fotos equipo/fotos equipo Carrucel/psico nasly.jpg", imageAlt: "Nasly", title: "Nasly", description: "Psicología" },
  { imageSrc: "/fotos equipo/fotos equipo Carrucel/psico pao.jpg", imageAlt: "Pao", title: "Pao", description: "Psicología" },
  { imageSrc: "/fotos equipo/fotos equipo Carrucel/psico paula.jpg", imageAlt: "Paula", title: "Paula", description: "Psicología" }
];

export default function NosotrosPage() {
  return (
    <LayoutShell>
      <div className="px-6 py-12 sm:px-10 sm:py-16 md:px-12 lg:px-16 lg:py-20">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-3xl font-bold uppercase tracking-wide text-cherry sm:text-4xl lg:text-5xl">
            Quiénes somos
          </h1>
          <p className="mt-4 font-body text-body-lg text-slate-600 sm:text-body-xl">
            Todo sobre nuestro equipo, nuestra labor y nuestra apuesta por la educación y el bienestar infantil.
          </p>
        </header>

        <div className="mx-auto mt-14 max-w-4xl space-y-14">
          <section>
            <h2 className="font-heading mb-4 text-xl font-bold text-cherry sm:text-2xl">
              Nuestro equipo
            </h2>
            <p className="font-body text-body-lg leading-relaxed text-slate-700 sm:text-body-xl">
              Somos un equipo de profesionales interdisciplinarios: psicólogas, nutricionistas, enfermeras y artistas, especializadas en población infantil. Acompañamos a instituciones educativas para llevar sus procesos a otro nivel.
            </p>
          </section>

          <section>
            <h2 className="font-heading mb-4 text-xl font-bold text-cherry sm:text-2xl">
              Qué hacemos
            </h2>
            <p className="font-body text-body-lg leading-relaxed text-slate-700 sm:text-body-xl">
              Apoyamos la construcción de entornos educativos organizados con asesoría en estándares de calidad. Construimos actividades y experiencias en torno al desarrollo infantil, transformando creencias y desafíos propios de la crianza.
            </p>
          </section>

          <section>
            <h2 className="font-heading mb-4 text-xl font-bold text-cherry sm:text-2xl">
              Nuestra apuesta
            </h2>
            <p className="font-body text-body-lg leading-relaxed text-slate-700 sm:text-body-xl">
              Trabajamos mediante un acompañamiento que permite construir comunidad y fortalecer vínculos entre instituciones, familias y equipos. Creemos en procesos que suman calidad, bienestar y confianza.
            </p>
          </section>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <h2 className="font-heading mb-8 text-center text-xl font-bold text-cherry sm:text-2xl">
            Conoce a nuestro equipo
          </h2>
          <TeamCarousel slides={TEAM_CAROUSEL_SLIDES} />
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/contacto"
            className="rounded-xl bg-orange px-7 py-3.5 text-base font-semibold text-white shadow-soft-kid transition hover:bg-orange/90 sm:px-8 sm:py-4 sm:text-lg"
          >
            Psicoclub te acompaña
          </Link>
        </div>
      </div>
    </LayoutShell>
  );
}
