import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

/**
 * Toda la información del footer está aquí. Edita estos datos para actualizar el footer.
 */
const FOOTER_CONFIG = {
  brand: {
    logo: "/icons/logoPsicoclub.jpg",
    name: "Psicoclub Kids",
    tagline: "Desarrollo Infantil"
  },
  description:
    "Equipo interdisciplinario que acompaña a instituciones educativas y familias en procesos de calidad, desarrollo infantil y bienestar.",

  links: [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Quiénes somos", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" },
    { label: "Nube", href: "https://nube.psicoclub.com.co/index.php/login" },
    { label: "Planner", href: "https://planner.psicoclub.com.co/login.php?return=true&" }
  ],

  contact: {
    website: "psicoclub.com.co",
    emails: ["estoycontigo@psicoclub.com.co", "aliados@psicoclub.com.co"],
    sosLines: ["3104847022", "3123347434"],
    addressLabel: "Sede Administrativa y Consultorios:",
    address: "Carrera 43 # 5 A – 42 – San Rafaél – Bogotá D. C."
  },

  social: [
    { name: "WhatsApp", href: "https://wa.me/573001234567", label: "WhatsApp" },
    { name: "Facebook", href: "https://facebook.com/psicoclub", label: "Facebook" },
    { name: "Instagram", href: "https://instagram.com/psicoclub", label: "Instagram" }
  ],

  legal: {
    copyright: "Psicoclub",
    rights: "Todos los derechos reservados.",
    privacyHref: "/politica-privacidad",
    termsHref: "/terminos"
  }
};

const SOCIAL_ICONS = {
  WhatsApp: MessageCircle,
  Facebook: Facebook,
  Instagram: Instagram
} as const;

/** Sombreado interno 3D: luz arriba-izquierda, sombra abajo-derecha + sombra externa de pegatina */
const STICKER_SHADOW_3D =
  "shadow-[inset_2px_2px_6px_rgba(0,0,0,0.25),inset_-2px_-2px_4px_rgba(255,255,255,0.2),3px_3px_8px_rgba(0,0,0,0.25)]";

/** Bordes + iconos redondos con efecto 3D */
const SOCIAL_BUTTON_STYLES: Record<string, string> = {
  WhatsApp: `rounded-full border-2 border-slate-800 ${STICKER_SHADOW_3D} text-white hover:scale-105 hover:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.25),inset_-2px_-2px_4px_rgba(255,255,255,0.2),4px_4px_12px_rgba(0,0,0,0.28)]`,
  Facebook: `rounded-full border-2 border-slate-800 ${STICKER_SHADOW_3D} text-white hover:scale-105 hover:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.25),inset_-2px_-2px_4px_rgba(255,255,255,0.2),4px_4px_12px_rgba(0,0,0,0.28)]`,
  Instagram: `rounded-full border-2 border-slate-800 ${STICKER_SHADOW_3D} text-white hover:scale-105 hover:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.25),inset_-2px_-2px_4px_rgba(255,255,255,0.2),4px_4px_12px_rgba(0,0,0,0.28)]`
};

/** Degradado que "falta" en una esquina (como si no hubieran coloreado ahí) */
const SOCIAL_GRADIENT: Record<string, React.CSSProperties> = {
  WhatsApp: {
    background: "linear-gradient(135deg, #6ee7b7 0%, #6ee7b7 68%, rgba(255,255,255,0.25) 100%)"
  },
  Facebook: {
    background: "linear-gradient(225deg, #7dd3fc 0%, #7dd3fc 68%, rgba(255,255,255,0.2) 100%)"
  },
  Instagram: {
    background: "linear-gradient(45deg, #fda4af 0%, #fda4af 72%, rgba(255,255,255,0.3) 100%)"
  }
};

/** Pequeñas rotaciones para que parezcan pegadas a mano */
const SOCIAL_ROTATION: Record<string, string> = {
  WhatsApp: "rotate-[-2deg]",
  Facebook: "rotate-[1.5deg]",
  Instagram: "rotate-[2deg]"
};

/** Contorno negro alrededor de la figura del icono */
const ICON_OUTLINE_STYLE: React.CSSProperties = {
  filter:
    "drop-shadow(0 1px 0 #1e293b) drop-shadow(0 -1px 0 #1e293b) drop-shadow(1px 0 0 #1e293b) drop-shadow(-1px 0 0 #1e293b) drop-shadow(1px 1px 0 #1e293b) drop-shadow(-1px -1px 0 #1e293b) drop-shadow(1px -1px 0 #1e293b) drop-shadow(-1px 1px 0 #1e293b)"
};

export function Footer() {
  const { brand, description, links, contact, social, legal } = FOOTER_CONFIG;

  return (
    <footer
      className="pt-6 sm:pt-8"
      style={{ background: "linear-gradient(90deg, #db5066 0%, #ff8429 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-2 py-6 sm:px-4 sm:py-6 lg:px-6">
        {/* Fila 1: Marca + descripción (una sola fila, sin superposiciones) */}
        <div className="border-b border-white/30 pb-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Link href="/" className="flex shrink-0 items-center gap-3">
              <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full shadow-md ring-2 ring-white/40 sm:h-16 sm:w-16">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </span>
              <div className="min-w-0">
                <span className="font-heading text-xl font-bold text-white sm:text-2xl">{brand.name}</span>
                <span className="block text-base text-white/90">{brand.tagline}</span>
              </div>
            </Link>
            <p className="min-w-0 font-body text-base leading-snug text-white/95 sm:text-body-lg">
              {description}
            </p>
          </div>
        </div>

        {/* Fila 2: Enlaces | Contacto | Redes (grid de 3 columnas, cada bloque en su celda) */}
        <div className="grid grid-cols-1 gap-8 pt-6 md:grid-cols-3 md:gap-10">
          {/* Enlaces */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white sm:text-base">Enlaces</h3>
            <ul className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 font-body text-base text-white/95 sm:text-body-lg">
              {links.map((link, i) => (
                <li key={link.href} className="flex items-center gap-x-2">
                  {i > 0 && <span className="text-white/50" aria-hidden>·</span>}
                  {link.href.startsWith("http") ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="hover:text-white">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto: una columna, cada línea en su propio bloque para evitar superposiciones */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white sm:text-base">Contáctenos</h3>
            <ul className="mt-3 space-y-2 font-body text-base text-white/95 sm:text-body-lg">
              <li>
                <a href={`https://${contact.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {contact.website}
                </a>
              </li>
              {contact.emails.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`} className="hover:text-white">
                    {email}
                  </a>
                </li>
              ))}
              <li>
                <span className="text-white/90">Líneas SOS: </span>
                {contact.sosLines.map((line, i) => (
                  <span key={line}>
                    <a href={`tel:+57${line.replace(/\D/g, "")}`} className="hover:text-white">
                      {line}
                    </a>
                    {i < contact.sosLines.length - 1 ? ", " : null}
                  </span>
                ))}
              </li>
              <li>
                <span className="text-white/90">{contact.addressLabel} </span>
                <span>{contact.address}</span>
              </li>
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white sm:text-base">Síguenos</h3>
            <div className="mt-3 flex flex-wrap gap-2 sm:gap-3">
              {social.map((item) => {
                const Icon = SOCIAL_ICONS[item.name as keyof typeof SOCIAL_ICONS];
                const buttonStyle = SOCIAL_BUTTON_STYLES[item.name] ?? "rounded-full border-2 border-slate-800 bg-slate-300 text-white";
                const rotation = SOCIAL_ROTATION[item.name] ?? "";
                const gradientStyle = SOCIAL_GRADIENT[item.name];
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className={`flex h-12 w-12 shrink-0 items-center justify-center transition duration-200 sm:h-14 sm:w-14 ${rotation} ${buttonStyle}`}
                    style={gradientStyle}
                  >
                    {Icon ? (
                      <span className="inline-flex shrink-0" style={ICON_OUTLINE_STYLE}>
                        <Icon size={24} className="shrink-0" />
                      </span>
                    ) : (
                      item.label
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Fila 3: Copyright y legal */}
        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-white/30 pt-4 text-center sm:flex-row sm:text-left">
          <p className="font-body text-sm text-white/90 sm:text-base">
            © 2018 - 2026 Psicoclub. {legal.rights}
          </p>
          <div className="flex gap-6 text-sm sm:text-base">
            <Link href={legal.privacyHref} className="text-white/90 hover:text-white">
              Política de privacidad
            </Link>
            <Link href={legal.termsHref} className="text-white/90 hover:text-white">
              Términos de uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
