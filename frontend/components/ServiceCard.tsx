import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  tags?: string[];
  /** Fondo de la tarjeta para evitar que quede en blanco */
  cardBg?: string;
}

export function ServiceCard({ icon, title, description, tags, cardBg = "bg-white" }: ServiceCardProps) {
  return (
    <article className={`flex flex-col gap-4 rounded-3xl px-6 py-7 shadow-soft-kid ring-1 ring-cherry/10 sm:px-7 sm:py-8 ${cardBg}`}>
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cherry/15 text-cherry sm:h-14 sm:w-14">
          {icon}
        </div>
        <h3 className="font-heading text-xl text-cherry sm:text-2xl">{title}</h3>
      </div>
      <p className="font-body text-base leading-relaxed text-slate-700 sm:text-body-lg">{description}</p>
      {tags && tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2 text-sm">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-orange/15 px-3 py-1.5 font-medium text-orange-800"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

