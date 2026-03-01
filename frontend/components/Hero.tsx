"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section className="grid min-h-[24rem] grid-cols-1 bg-white px-6 py-12 sm:px-10 md:min-h-[28rem] md:grid-cols-2 md:gap-12 md:px-12 md:py-16 lg:px-16">
      {/* Grid izquierdo: título, descripción y botón */}
      <div className="flex flex-col justify-center gap-6">
        <h1 className="font-heading text-3xl font-bold uppercase leading-tight text-slate-800 sm:text-4xl md:text-[2.5rem]">
          LLEVAMOS TU INSTITUCIÓN EDUCATIVA A OTRO NIVEL
        </h1>
        <p className="max-w-xl font-body text-base leading-relaxed text-slate-600 sm:text-lg">
          Asesorías en estándares de calidad – profesionales de nutrición y psicología - actividades innovadoras
        </p>
        <div>
          <Link
            href="/contacto"
            className="inline-block rounded-lg bg-slate-800 px-6 py-3 text-sm font-medium text-white hover:bg-slate-700"
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
