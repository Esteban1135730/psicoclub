import Link from "next/link";
import { LayoutShell } from "../components/LayoutShell";
import { Hero } from "../components/Hero";
import { ServiceCard } from "../components/ServiceCard";
import { ServiceImageCard } from "../components/ServiceImageCard";
import { TeamCarousel } from "../components/TeamCarousel";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { ColoredSection } from "../components/ColoredSection";
import { Baby, Users, ClipboardList } from "lucide-react";
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
      <div className="space-y-16">
        <Hero />
        {/* Sección color suave */}
        <ColoredSection bgClass="bg-emerald-50">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <p className="max-w-2xl font-body text-base leading-relaxed text-slate-700 sm:text-lg">
              Ofrecemos servicios de consultoría, asesoría a jardines infantiles y colegios, para el cumplimiento de sus estándares de calidad, acompañamiento de profesionales en psicología, nutrición y/o enfermería, entrenamientos y talleres innovadores que vinculan a la comunidad y fortalecen las interacciones.
            </p>
            <Link
              href="/contacto"
              className="rounded-lg bg-slate-800 px-6 py-3 text-sm font-medium text-white hover:bg-slate-700"
            >
              Psicoclub te acompaña
            </Link>
          </div>
        </ColoredSection>
        {/* Sección blanca */}
        <ColoredSection bgClass="bg-white">
          <section className="space-y-10 px-6 sm:px-10 md:px-12 lg:px-16">
            <h2 className="font-heading text-2xl text-slate-900 sm:text-3xl">Servicios</h2>
            <div className="grid grid-cols-1 gap-x-12 gap-y-20 pt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-24 lg:pt-12">
              {SERVICIOS.map((s) => (
                <ServiceImageCard
                  key={s.id}
                  imageSrc={s.imageSrc}
                  imageAlt={s.imageAlt}
                  title={s.title}
                  cardColor={s.cardColor}
                  underlineColor={s.underlineColor}
                  href={`/servicios#${s.id}`}
                />
              ))}
            </div>
          </section>
        </ColoredSection>
        {/* Sección color suave */}
        <ColoredSection id="quienes-somos" bgClass="bg-sky-50">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-slate-900 sm:text-3xl">
              Quiénes somos
            </h2>
            <div className="max-w-2xl space-y-4 font-body text-base leading-relaxed text-slate-700 sm:text-lg">
              <p>
                Somos un equipo de profesionales interdisciplinarios (psicólogas, nutricionistas, enfermeras y artistas) especializadas en población infantil, que acompaña a instituciones educativas a llevar sus procesos a otro nivel.
              </p>
              <p>
                Apoyamos la construcción de entornos educativos organizados con nuestro servicio de asesoría en estándares de calidad, construimos actividades y experiencias en torno al desarrollo infantil, transformando creencias y desafíos propios de la crianza, mediante un acompañamiento que permite construir comunidad y fortalecer vínculos.
              </p>
            </div>
            <Link
              href="/contacto"
              className="rounded-lg bg-slate-800 px-6 py-3 text-sm font-medium text-white hover:bg-slate-700"
            >
              Psicoclub te acompaña
            </Link>
            <div className="mt-6 w-full">
              <TeamCarousel slides={TEAM_CAROUSEL_SLIDES} />
            </div>
          </div>
        </ColoredSection>
        {/* Sección blanca */}
        <ColoredSection bgClass="bg-white">
          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-slate-900 sm:text-3xl">¿Cómo acompañamos a tu familia?</h2>
            <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
              Creamos espacios seguros y lúdicos para que niños y niñas puedan expresar lo que sienten, mientras
              trabajamos de la mano con padres y cuidadores.
            </p>
            <div className="grid gap-5 md:grid-cols-3">
              <ServiceCard
                icon={<Baby className="h-5 w-5" />}
                title="Terapia infantil"
                description="Sesiones individuales para trabajar emociones, conducta, habilidades sociales, autoestima y procesos escolares."
                tags={["Juego terapéutico", "Emociones", "Colegio"]}
              />
              <ServiceCard
                icon={<Users className="h-5 w-5" />}
                title="Orientación a padres"
                description="Acompañamos a madres y padres en temas de límites, rutinas, manejo de berrinches, comunicación y crianza respetuosa."
                tags={["Crianza positiva", "Límites", "Rutinas"]}
              />
              <ServiceCard
                icon={<ClipboardList className="h-5 w-5" />}
                title="Evaluaciones"
                description="Valoramos el desarrollo emocional, conductual y escolar para orientar procesos terapéuticos y decisiones en familia."
                tags={["Evaluación", "Informes", "Colegio"]}
              />
            </div>
          </section>
        </ColoredSection>
        {/* Sección color suave */}
        <ColoredSection bgClass="bg-emerald-50">
          <TestimonialsSection testimonials={TESTIMONIOS} />
        </ColoredSection>
      </div>
    </LayoutShell>
  );
}

