import Image from "next/image";
import Link from "next/link";

interface ServiceImageCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  cardColor: string;
  underlineColor: string;
  href?: string;
}

/**
 * Tarjeta de servicio para la home: círculo con foto + solo título (estilo referencia).
 * Sin texto descriptivo; el detalle está en /servicios.
 */
export function ServiceImageCard({
  imageSrc,
  imageAlt,
  title,
  cardColor,
  underlineColor,
  href = "/servicios"
}: ServiceImageCardProps) {
  return (
    <Link href={href} className="group block">
      <article
        className={`relative flex h-[28rem] flex-col overflow-visible rounded-[1.75rem] px-6 py-6 shadow-soft transition-all duration-300 hover:shadow-xl sm:px-8 sm:py-8 ${cardColor}`}
      >
        {/* Imagen circular: sobresale por encima del borde superior de la tarjeta */}
        <div className="absolute left-1/2 top-0 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full shadow-lg sm:h-44 sm:w-44">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={176}
            height={176}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col pt-24 sm:pt-28">
          {/* Título y línea: ocupan el espacio flexible */}
          <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
            <h3 className="font-heading line-clamp-4 text-center text-2xl font-bold leading-snug text-white sm:text-3xl">
              {title}
            </h3>
            <div
              className={`mx-auto mt-3 h-1 w-14 rounded-full ${underlineColor}`}
              aria-hidden
            />
          </div>
          {/* Botón siempre abajo en la misma posición */}
          <div className="mt-auto flex justify-center pb-2 pt-4">
            <span className="inline-block rounded-full bg-amber-300 px-6 py-2.5 text-sm font-semibold text-emerald-900 shadow-md transition group-hover:bg-amber-200">
              Leer +
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
