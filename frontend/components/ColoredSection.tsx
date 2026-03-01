import { ReactNode } from "react";

interface ColoredSectionProps {
  id?: string;
  children: ReactNode;
  bgClass: string;
}

export function ColoredSection({ id, children, bgClass }: ColoredSectionProps) {
  return (
    <section id={id} className={`py-14 sm:py-20 lg:py-24 ${bgClass}`}>
      <div className="w-full">
        {children}
      </div>
    </section>
  );
}

