import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  tags?: string[];
}

export function ServiceCard({ icon, title, description, tags }: ServiceCardProps) {
  return (
    <article className="flex flex-col gap-3 rounded-3xl bg-white px-5 py-6 shadow-soft">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cherry/10 text-cherry">
          {icon}
        </div>
        <h3 className="font-heading text-xl text-slate-900">{title}</h3>
      </div>
      <p className="text-sm text-slate-600">{description}</p>
      {tags && tags.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-2 text-[11px]">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-orange/5 px-2.5 py-1 text-orange"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

