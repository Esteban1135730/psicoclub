"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface Testimonial {
  imageSrc: string;
  imageAlt: string;
  text: string;
  large?: boolean;
}

interface TestimonialsSectionProps {
  title?: string;
  testimonials: Testimonial[];
}

const CARD_WIDTH_PX = 300;
const GAP_PX = 16;
const DURATION_PER_CYCLE = 45;

export function TestimonialsSection({ title = "Testimonios", testimonials }: TestimonialsSectionProps) {
  const strip = [...testimonials, ...testimonials];
  const oneCyclePx = testimonials.length * (CARD_WIDTH_PX + GAP_PX);

  if (!testimonials.length) return null;

  return (
    <section className="space-y-8 py-10 px-6 sm:px-10">
      <h2 className="font-heading text-section-title text-cherry sm:text-section-title-lg lg:text-4xl">{title}</h2>
      <div className="relative w-full overflow-hidden">
        <div
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-emerald-50 to-transparent sm:w-28"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-emerald-50 to-transparent sm:w-28"
          aria-hidden
        />
        <div className="relative py-1">
          <motion.div
            className="flex gap-4 px-4 sm:px-8"
            style={{ width: "max-content" }}
            animate={{ x: -oneCyclePx }}
            transition={{
              type: "tween",
              duration: DURATION_PER_CYCLE,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
          >
            {strip.map((t, i) => (
              <article
                key={i}
                className="flex w-[300px] shrink-0 flex-col overflow-hidden rounded-2xl border-2 border-emerald-200/60 bg-white shadow-soft-kid"
              >
                <div className="relative h-[280px] w-full shrink-0 overflow-hidden bg-emerald-50">
                  <Image
                    src={t.imageSrc}
                    alt={t.imageAlt}
                    fill
                    sizes="300px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-col gap-3 px-5 py-5">
                  <p className="text-center font-heading text-base font-bold text-cherry sm:text-lg">
                    {t.imageAlt}
                  </p>
                  <p className="text-center font-body text-base leading-relaxed text-slate-700 line-clamp-3 sm:text-body-lg">
                    {t.text}
                  </p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
