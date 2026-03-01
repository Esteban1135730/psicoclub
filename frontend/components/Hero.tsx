"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section className="grid min-h-[26rem] grid-cols-1 bg-white px-6 py-14 sm:px-10 sm:py-16 md:min-h-[30rem] md:grid-cols-2 md:gap-12 md:px-12 md:py-20 lg:px-16 lg:py-24">
      {/* Grid izquierdo: título, subtítulo y botón */}
      <div className="flex flex-col justify-center gap-6 sm:gap-8">
        <h1 className="font-heading text-page-title font-bold uppercase leading-tight tracking-tight text-cherry sm:text-4xl md:text-page-title-lg lg:text-5xl">
          LLEVAMOS TU INSTITUCIÓN EDUCATIVA A OTRO NIVEL
        </h1>
        <p className="max-w-xl font-body text-body-lg font-medium leading-relaxed text-orange-800 sm:text-body-xl">
          Asesorías en estándares de calidad – profesionales de nutrición y psicología - actividades innovadoras
        </p>
        <div>
          <Link
            href="/contacto"
            className="inline-block rounded-xl bg-cherry px-7 py-3.5 text-base font-semibold text-white shadow-soft-kid transition hover:bg-cherry/90 sm:px-8 sm:py-4 sm:text-lg"
          >
            Contactanos
          </Link>
        </div>
      </div>

      {/* Grid derecho: vacío (placeholder para imagen) */}
      <div className="hidden md:block" aria-hidden />
    </section>
  );
}
