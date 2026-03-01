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
    { label: "Quiénes somos", href: "/#quienes-somos" },
    { label: "Contacto", href: "/contacto" },
    { label: "Nube", href: "/nube" },
    { label: "Planner", href: "/planner" }
  ],

  contact: {
    address: "Calle Ejemplo 123, Ciudad",
    phone: "+57 300 123 4567",
    email: "hola@psicoclub.com.co",
    schedule: "Lun - Vie: 8:00 a.m. - 7:00 p.m. | Sáb: 8:00 a.m. - 1:00 p.m."
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

const SECTION_TITLE = "font-heading text-xs font-bold uppercase tracking-wider text-slate-500";

const SOCIAL_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  WhatsApp: MessageCircle,
  Facebook: Facebook,
  Instagram: Instagram
};

const CURRENT_YEAR = 2025;

export function Footer() {
  const { brand, description, links, contact, social, legal } = FOOTER_CONFIG;

  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50/80">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Fila 1: Marca + descripción */}
        <div className="flex flex-col gap-6 border-b border-slate-200 pb-10 sm:flex-row sm:items-start sm:gap-8">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <span className="relative h-14 w-14 overflow-hidden rounded-full shadow-md">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={56}
                height={56}
                className="h-full w-full object-cover"
              />
            </span>
            <div>
              <span className="font-heading text-xl font-bold text-slate-800">{brand.name}</span>
              <span className="block text-sm text-slate-500">{brand.tagline}</span>
            </div>
          </Link>
          <p className="max-w-md text-sm leading-relaxed text-slate-600 sm:pt-1">
            {description}
          </p>
        </div>

        {/* Fila 2: Enlaces | Contacto | Redes — tres columnas alineadas */}
        <div className="grid gap-10 pt-10 sm:grid-cols-3">
          <div>
            <h3 className={SECTION_TITLE}>Enlaces</h3>
            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-600 hover:text-cherry">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={SECTION_TITLE}>Contacto</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>{contact.address}</li>
              <li>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-cherry">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-cherry">
                  {contact.email}
                </a>
              </li>
              <li className="text-xs text-slate-500">{contact.schedule}</li>
            </ul>
          </div>
          <div>
            <h3 className={SECTION_TITLE}>Síguenos</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {social.map((item) => {
                const Icon = SOCIAL_ICONS[item.name];
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200/80 text-slate-600 transition hover:bg-cherry hover:text-white"
                  >
                    {Icon ? <Icon size={20} className="shrink-0" /> : item.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Fila 3: Copyright y legal */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500">
            © {CURRENT_YEAR} {legal.copyright}. {legal.rights}
          </p>
          <div className="flex gap-6 text-xs">
            <Link href={legal.privacyHref} className="text-slate-500 hover:text-cherry">
              Política de privacidad
            </Link>
            <Link href={legal.termsHref} className="text-slate-500 hover:text-cherry">
              Términos de uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
