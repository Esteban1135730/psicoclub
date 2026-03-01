/**
 * Datos de los 6 servicios: títulos, imágenes y textos para la página de desglose.
 * En la home solo se muestran título + imagen; el texto completo va en /servicios.
 */

export interface ServicioItem {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  /** Texto largo para la página de servicios (desglose) */
  fullDescription: string;
  /** Estilo de la tarjeta en la home */
  cardColor: string;
  /** Color de fondo en hex para asegurar que se vea (fallback) */
  cardColorHex: string;
  underlineColor: string;
}

export const SERVICIOS: ServicioItem[] = [
  {
    id: "asesoria-jardines",
    title: "Asesoria a jardines infantiles – sdis cumplimiento de estandares de calidad para la educacion inicial.",
    imageSrc: "/fotos servicios/fotos servicios/directora archivo 2.jpg",
    imageAlt: "Asesoría a jardines infantiles",
    fullDescription:
      "Cumplimiento de estándares de calidad para la educación inicial (SDIS). No te preocupes por los trámites de integración social, cumple con tu proceso de inscripción, recibe con empoderamiento las auditorías y obtén tu REI de manera tranquila. Te asesoramos y acompañamos para cumplir con los estándares de calidad y cumplir a cabalidad con los requisitos de ley.",
    cardColor: "bg-orange",
    cardColorHex: "#ff8429",
    underlineColor: "bg-amber-200"
  },
  {
    id: "psicologia-neuropsicopedagogia",
    title: "Sevicios profesionales de psicologia y neuropsicopedagogia.",
    imageSrc: "/fotos servicios/fotos servicios/psico con ninos.jpg",
    imageAlt: "Psicología y neuropsicopedagogía",
    fullDescription:
      "Profesionales en Psicología especializados en desarrollo infantil, neuropsicología y crianza, te acompañan en la construcción de ambientes y estrategias que aportan a las habilidades emocionales y sociales de tu comunidad, cumpliendo con los requisitos de las entidades competentes y vinculándose a los desafíos que se presentan en torno a la salud mental en entornos educativos.",
    cardColor: "bg-teal-600",
    cardColorHex: "#0d9488",
    underlineColor: "bg-emerald-200"
  },
  {
    id: "nutricion-enfermeria",
    title: "Servicios profesionales de Nutricion y/o enfermeria.",
    imageSrc: "/fotos servicios/fotos servicios/nd servicio.jpg",
    imageAlt: "Nutrición y enfermería",
    fullDescription:
      "Con un equipo de profesionales en nutrición y enfermería, te apoyamos en los procesos de salud, desarrollo, educación y promoción de estilos de vida saludable. Una apuesta que fortalece tus servicios interdisciplinarios, te ayuda a cumplir con los estándares de calidad y brinda herramientas a la comunidad de cuidado y bienestar.",
    cardColor: "bg-lime-600",
    cardColorHex: "#65a30d",
    underlineColor: "bg-green-200"
  },
  {
    id: "actividades-artisticas",
    title: "Actividades artisticas para la promocion y la prevencion.",
    imageSrc: "/fotos servicios/fotos servicios/arte ok 2.jpg",
    imageAlt: "Actividades artísticas",
    fullDescription:
      "Una propuesta innovadora, con un equipo de profesionales en artes escénicas que se personifican para llevar a tu comunidad experiencias de promoción y prevención, mediante pequeños sketch teatrales que proponen temas de interés. No solo creas un programa sino que impulsas acciones de valor que fortalecen mediante el arte, la creatividad y la imaginación.",
    cardColor: "bg-violet-600",
    cardColorHex: "#7c3aed",
    underlineColor: "bg-purple-200"
  },
  {
    id: "talleres-familias",
    title: "Talleres y experiencias de conexión para familias.",
    imageSrc: "/fotos servicios/fotos servicios/juliana nd tomas.jpg",
    imageAlt: "Talleres y experiencias de conexión para familias",
    fullDescription:
      "Diseñar espacios de conexión con las familias es una apuesta de alto valor para las instituciones educativas. Termina ya con los talleres teóricos y catedráticos que aburren profundamente a tu comunidad, y permítenos gestionar espacios de verdadero valor frente a los desafíos de la crianza, con una gran carga de aprendizaje y reflexión.",
    cardColor: "bg-rose-600",
    cardColorHex: "#e11d48",
    underlineColor: "bg-pink-200"
  },
  {
    id: "laboratorios-talento-humano",
    title: "Laboratorios de formación para el talento humano.",
    imageSrc: "/fotos servicios/fotos servicios/CAP TH.jpg",
    imageAlt: "Laboratorios de formación para el talento humano",
    fullDescription:
      "Tu talento humano requiere formación continua, pero sobre todo motivante que le permita sacar su potencial. Los laboratorios se convierten en espacios vivenciales que se gestionan bajo diferentes temas de interés que construyen equipos comprometidos, capacitados y altamente efectivos.",
    cardColor: "bg-sky-600",
    cardColorHex: "#0284c7",
    underlineColor: "bg-cyan-200"
  }
];
