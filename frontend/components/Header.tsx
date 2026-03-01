"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { label: "inicio", href: "/", external: false },
  { label: "servicios", href: "/servicios", external: false },
  { label: "nosotros", href: "/nosotros", external: false },
  { label: "testimonios", href: "/#testimonios", external: false },
  { label: "nube", href: "https://nube.psicoclub.com.co/index.php/login", external: true },
  { label: "planner", href: "https://planner.psicoclub.com.co/login.php?return=true&", external: true }
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
    <header
      className="sticky top-0 z-50 flex items-center justify-between overflow-visible rounded-b-2xl px-4 py-3 shadow-soft sm:px-6 sm:py-4"
      style={{
        background: "linear-gradient(90deg, #db5066 0%, #ff8429 100%)"
      }}
    >
      <div className="relative z-10 flex flex-1 items-center justify-center sm:justify-start">
        <Link href="/" className="block" onClick={closeMenu}>
          <span className="relative mb-[-2.5rem] flex h-24 w-24 overflow-hidden rounded-full shadow-lg ring-2 ring-white/30 sm:mb-[-3rem] sm:h-28 sm:w-28">
            <Image
              src="/icons/logoPsicoclub.jpg"
              alt="Psicoclub Kids - Desarrollo Infantil"
              width={112}
              height={112}
              sizes="112px"
              className="h-full w-full object-cover"
            />
          </span>
        </Link>
      </div>

      {/* Escritorio: nav + botón contacto */}
      <div className="hidden flex-1 items-center justify-end gap-4 sm:flex sm:gap-6">
        <nav className="flex items-center gap-4 text-base font-semibold lowercase text-white sm:gap-5 sm:text-lg">
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-90">
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className="hover:opacity-90">
                {link.label}
              </Link>
            )
          )}
        </nav>
        <Link
          href="/contacto"
          className="rounded-xl bg-white px-5 py-2.5 text-base font-semibold lowercase text-cherry shadow-md transition hover:bg-amber-50 hover:shadow-lg sm:px-6 sm:py-3 sm:text-lg"
        >
          contactanos
        </Link>
      </div>

      {/* Móvil: botón hamburguesa */}
      <div className="flex flex-1 justify-end sm:hidden">
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
    </header>

      {/* Menú desplegable móvil */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 sm:hidden"
            onClick={closeMenu}
            aria-hidden
          />
          <div
            className="fixed left-0 right-0 top-[4.5rem] z-40 max-h-[calc(100vh-5rem)] overflow-y-auto rounded-b-2xl border-t border-white/20 bg-gradient-to-b from-[#db5066] to-[#ff8429] px-4 py-4 shadow-xl sm:hidden"
            role="dialog"
            aria-label="Menú de navegación"
          >
            <nav className="flex flex-col items-end gap-1">
              {NAV_LINKS.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="w-full rounded-xl px-4 py-3 text-right text-base font-semibold lowercase text-white hover:bg-white/20"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="w-full rounded-xl px-4 py-3 text-right text-base font-semibold lowercase text-white hover:bg-white/20"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                href="/contacto"
                onClick={closeMenu}
                className="mt-2 w-full rounded-xl bg-white px-4 py-3 text-right text-base font-semibold lowercase text-cherry shadow-md transition hover:bg-amber-50"
              >
                contactanos
              </Link>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
