"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface TeamSlide {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description?: string;
}

interface TeamCarouselProps {
  slides: TeamSlide[];
  intervalMs?: number;
  visibleCount?: number;
  stepSize?: number;
}

const CARD_WIDTH_PX = 280;
const GAP_PX = 10;

export function TeamCarousel({ slides }: TeamCarouselProps) {
  const strip = [...slides, ...slides];
  const oneCyclePx = slides.length * (CARD_WIDTH_PX + GAP_PX);
  const durationPerCycle = 45;

  if (!slides.length) return null;

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-sky-50 to-transparent sm:w-28"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-sky-50 to-transparent sm:w-28"
        aria-hidden
      />
      <div className="relative py-1">
        <motion.div
          className="flex gap-2.5 px-4 sm:px-8"
          style={{ width: "max-content" }}
          animate={{ x: -oneCyclePx }}
          transition={{
            type: "tween",
            duration: durationPerCycle,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
        >
          {strip.map((slide, i) => (
            <div key={i} className="h-[380px] w-[280px] shrink-0">
              <div className="flex h-full w-full flex-col items-center rounded-3xl bg-white px-4 py-6 shadow-soft-kid ring-1 ring-cherry/10">
              <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full shadow-soft ring-2 ring-cherry/30 sm:h-44 sm:w-44">
                <Image
                  src={slide.imageSrc}
                  alt={slide.imageAlt}
                  fill
                  sizes="176px"
                  className="object-cover object-[center_25%]"
                />
              </div>
              <div className="mt-4 w-full min-h-[2rem] flex flex-col items-center">
                <p className="text-center font-heading text-base font-bold leading-tight text-cherry sm:text-lg">
                  {slide.title}
                </p>
                <span className="mt-1.5 block h-0.5 w-10 rounded-full bg-orange/60" aria-hidden />
              </div>
              {slide.description && (
                <p className="mt-3 min-h-[2.5rem] line-clamp-2 text-center font-body text-sm leading-relaxed text-slate-600 sm:text-base">
                  {slide.description}
                </p>
              )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
