"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "@/data/site";

export default function Gallery() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = useCallback(() => {
    const el = track.current;
    if (!el || !el.children.length) return;
    const tile = (el.children[0] as HTMLElement).offsetWidth;
    const max = el.scrollWidth - el.clientWidth;
    // Snap the last dot on when scrolled to the end
    if (max > 0 && el.scrollLeft >= max - 4) return setActive(gallery.length - 1);
    setActive(Math.min(gallery.length - 1, Math.round(el.scrollLeft / (tile + 16))));
  }, []);

  useEffect(() => {
    onScroll();
  }, [onScroll]);

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const tile = (el.children[0] as HTMLElement).offsetWidth + 16;
    el.scrollBy({ left: dir * tile, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="bg-gradient-to-b from-cream to-cream-tan py-20 md:py-24">
      <div className="container-x">
        <div className="text-center">
          <span className="tag-pill">Life at Mauli</span>
          <h2 className="mt-4 font-serif text-[32px] font-semibold text-forest md:text-[38px]">
            Moments of Happiness
          </h2>
          <p className="mt-3 text-[15px] text-ink-soft">
            A glimpse into the daily life, activities and environment at our old age home.
          </p>
        </div>

        <div className="relative mt-10">
          <div
            ref={track}
            onScroll={onScroll}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth"
          >
            {gallery.map((g) => (
              <div
                key={g.src}
                className="relative aspect-[1.08/1] w-[72%] shrink-0 snap-start overflow-hidden rounded-xl shadow-soft sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]"
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 1024px) 280px, 70vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {(["prev", "next"] as const).map((d) => (
            <button
              key={d}
              type="button"
              aria-label={d === "prev" ? "Previous photos" : "Next photos"}
              onClick={() => scrollBy(d === "prev" ? -1 : 1)}
              className={`absolute top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-card hover:bg-cream ${
                d === "prev" ? "-left-3 sm:-left-5" : "-right-3 sm:-right-5"
              }`}
            >
              {d === "prev" ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            </button>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2" aria-hidden>
          {gallery.map((g, i) => (
            <span
              key={g.src}
              className={`h-2 w-2 rounded-full ${i === active ? "bg-forest" : "bg-forest/25"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
