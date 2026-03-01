import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { Footer } from "./Footer";

interface LayoutShellProps {
  children: ReactNode;
}

export function LayoutShell({ children }: LayoutShellProps) {
  return (
    <div className="flex min-h-screen flex-col gap-8">
      <header className="sticky top-0 z-50 flex items-center justify-between overflow-visible rounded-3xl bg-white/80 px-5 py-4 shadow-soft backdrop-blur sm:px-6">
        {/* Izquierda: logo circular, mitad sobresaliendo por debajo del navbar */}
        <div className="relative z-10 flex min-w-0 flex-shrink-0 items-end">
          <Link href="/" className="block">
            <span className="relative mb-[-2rem] flex h-16 w-16 overflow-hidden rounded-full shadow-soft ring-2 ring-slate-200 sm:mb-[-2.5rem] sm:h-20 sm:w-20">
              <Image
                src="/icons/logoPsicoclub.jpg"
                alt="Psicoclub Kids - Desarrollo Infantil"
                fill
                sizes="80px"
                className="object-cover"
              />
            </span>
          </Link>
        </div>

        {/* Derecha: enlaces + CTA, todo en minúscula y alineado a la derecha */}
        <div className="flex flex-1 flex-shrink-0 items-center justify-end gap-6 sm:gap-8">
          <nav className="hidden items-center gap-6 text-sm font-medium lowercase text-slate-700 sm:flex">
            <Link href="/" className="hover:text-cherry">
              psicoclub
            </Link>
            <Link href="/servicios" className="hover:text-cherry">
              servicios
            </Link>
            <Link href="/nube" className="hover:text-cherry">
              nube
            </Link>
            <Link href="/planner" className="hover:text-cherry">
              planner
            </Link>
          </nav>
          <Link
            href="/contacto"
            className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium lowercase text-white hover:bg-slate-700"
          >
            contactanos
          </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

