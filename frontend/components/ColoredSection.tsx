import { ReactNode } from "react";

interface ColoredSectionProps {
  id?: string;
  children: ReactNode;
  bgClass: string;
}

export function ColoredSection({ id, children, bgClass }: ColoredSectionProps) {
  return (
    <section id={id} className={`py-16 ${bgClass}`}>
      <div className="w-full">
        {children}
      </div>
    </section>
  );
}

