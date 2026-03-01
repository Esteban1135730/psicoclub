import Link from "next/link";
import { LayoutShell } from "../components/LayoutShell";
import { Hero } from "../components/Hero";
import { ServiceImageCard } from "../components/ServiceImageCard";
import { TeamCarousel } from "../components/TeamCarousel";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { ColoredSection } from "../components/ColoredSection";
import { SERVICIOS } from "../lib/serviciosData";

const TESTIMONIOS = [
  {
    imageSrc: "/testimonios/testimonios clientes/ciente rincon.jpg",
    imageAlt: "Cliente Rincón",
    text: "El acompañamiento de Psicoclub transformó la dinámica de nuestro jardín. Las familias están más conectadas y el equipo tiene herramientas claras para el día a día."
  },
  {
    imageSrc: "/testimonios/testimonios clientes/cientes ggm.jpg",
    imageAlt: "Clientes GGM",
    text: "Las asesorías en estándares de calidad nos permitieron obtener el REI con tranquilidad. Muy recomendados."
  },
  {
    imageSrc: "/testimonios/testimonios clientes/cliente enmanuel.jpg",
    imageAlt: "Cliente Enmanuel",
    text: "Los talleres para familias son distintos a todo lo que habíamos probado. Nuestra comunidad los valora mucho."
  },
  {
    imageSrc: "/testimonios/testimonios clientes/cliente eureka.jpg",
    imageAlt: "Cliente Eureka",
    text: "Profesionales muy preparados y cercanos. El proceso de evaluación fue claro y útil para nosotros."
  },
  {
    imageSrc: "/testimonios/testimonios clientes/cliente spk.jpg",
    imageAlt: "Cliente SPK",
    text: "Los laboratorios de formación motivaron mucho a nuestro equipo. Se nota el enfoque en las personas."
  },
  {
    imageSrc: "/testimonios/testimonios clientes/cliente suenos.jpg",
    imageAlt: "Cliente Sueños",
    text: "Gracias al equipo de Psicoclub por su calidez y profesionalismo. Recomendamos su acompañamiento."
  }
];

const TEAM_CAROUSEL_SLIDES = [
  {
    imageSrc: "/fotos equipo/fotos equipo Carrucel/andrea nd.jpg",
    imageAlt: "Andrea",
    title: "Andrea N. D.",
    description: ""
  },
  {
    imageSrc: "/fotos equipo/fotos equipo Carrucel/enfermera sha.jpg",
    imageAlt: "Sha",
    title: "Sha",
    description: "Enfermería"
  },
  {
    imageSrc: "/fotos equipo/fotos equipo Carrucel/lider karen.jpg",
    imageAlt: "Karen",
    title: "Karen",
    description: "Líder"
  },
  {
    imageSrc: "/fotos equipo/fotos equipo Carrucel/lili ps.jpg",
    imageAlt: "Lili",
    title: "Lili",
    description: ""
  },
  {
    imageSrc: "/fotos equipo/fotos equipo Carrucel/psico adri.jpg",
    imageAlt: "Adri",
    title: "Adri",
    description: "Psicología"
  },
  {
    imageSrc: "/fotos equipo/fotos equipo Carrucel/psico nasly.jpg",
    imageAlt: "Nasly",
    title: "Nasly",
    description: "Psicología"
  },
  {
    imageSrc: "/fotos equipo/fotos equipo Carrucel/psico pao.jpg",
    imageAlt: "Pao",
    title: "Pao",
    description: "Psicología"
  },
  {
    imageSrc: "/fotos equipo/fotos equipo Carrucel/psico paula.jpg",
    imageAlt: "Paula",
    title: "Paula",
    description: "Psicología"
  }
];

export default function HomePage() {
  return (
    <LayoutShell>
      <div>
        <Hero />
        {/* Intro - segunda sección, con color */}
        <ColoredSection bgClass="bg-amber-100">
          <div className="flex flex-col items-center justify-center gap-8 text-center px-6 sm:px-10">
            <p className="max-w-3xl font-body text-body-lg leading-relaxed text-amber-900 sm:text-body-xl">
              Ofrecemos servicios de consultoría, asesoría a jardines infantiles y colegios, para el cumplimiento de sus estándares de calidad, acompañamiento de profesionales en psicología, nutrición y/o enfermería, entrenamientos y talleres innovadores que vinculan a la comunidad y fortalecen las interacciones.
            </p>
            <Link
              href="/contacto"
              className="rounded-xl bg-cherry px-7 py-3.5 text-base font-semibold text-white shadow-soft-kid transition hover:bg-cherry/90 sm:px-8 sm:py-4 sm:text-lg"
            >
              Psicoclub te acompaña
            </Link>
          </div>
        </ColoredSection>
        {/* Servicios - blanco */}
        <ColoredSection bgClass="bg-white">
          <section className="px-6 sm:px-10 md:px-12 lg:px-16">
            <h2 className="font-heading mb-14 text-center text-4xl text-cherry sm:mb-16 sm:text-5xl lg:mb-20 lg:text-6xl">Servicios</h2>
            <div className="grid grid-cols-1 gap-x-14 gap-y-24 pt-16 sm:grid-cols-2 sm:pt-4 sm:gap-x-16 sm:gap-y-28 lg:grid-cols-3 lg:gap-x-20 lg:gap-y-32">
              {SERVICIOS.map((s) => (
                <ServiceImageCard
                  key={s.id}
                  imageSrc={s.imageSrc}
                  imageAlt={s.imageAlt}
                  title={s.title}
                  cardColor={s.cardColor}
                  cardColorHex={s.cardColorHex}
                  underlineColor={s.underlineColor}
                  href={`/servicios#${s.id}`}
                />
              ))}
            </div>
          </section>
        </ColoredSection>
        {/* Quiénes somos - con color */}
        <ColoredSection id="quienes-somos" bgClass="bg-sky-100/80">
          <div className="flex flex-col items-center justify-center gap-8 text-center px-6 sm:px-10">
            <h2 className="font-heading text-section-title font-bold uppercase tracking-wide text-cherry sm:text-section-title-lg lg:text-4xl">
              Quiénes somos
            </h2>
            <div className="max-w-3xl space-y-5 font-body text-body-lg leading-relaxed text-slate-700 sm:text-body-xl">
              <p>
                Somos un equipo de profesionales interdisciplinarios (psicólogas, nutricionistas, enfermeras y artistas) especializadas en población infantil, que acompaña a instituciones educativas a llevar sus procesos a otro nivel.
              </p>
              <p>
                Apoyamos la construcción de entornos educativos organizados con nuestro servicio de asesoría en estándares de calidad, construimos actividades y experiencias en torno al desarrollo infantil, transformando creencias y desafíos propios de la crianza, mediante un acompañamiento que permite construir comunidad y fortalecer vínculos.
              </p>
            </div>
            <Link
              href="/nosotros"
              className="rounded-xl bg-orange px-7 py-3.5 text-base font-semibold text-white shadow-soft-kid transition hover:bg-orange/90 sm:px-8 sm:py-4 sm:text-lg"
            >
              Conocer más sobre nosotros
            </Link>
            <div className="mt-6 w-full">
              <TeamCarousel slides={TEAM_CAROUSEL_SLIDES} />
            </div>
          </div>
        </ColoredSection>
        {/* Testimonios - blanco */}
        <ColoredSection id="testimonios" bgClass="bg-white">
          <TestimonialsSection testimonials={TESTIMONIOS} />
        </ColoredSection>
      </div>
    </LayoutShell>
  );
}

