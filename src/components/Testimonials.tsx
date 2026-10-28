"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { images, testimonials } from "@/data/site";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const n = testimonials.length;
  const t = testimonials[i];

  return (
    <section className="relative overflow-hidden bg-cream-deep py-20 md:py-24">
      <div className="absolute inset-y-0 right-0 hidden w-[42%] fade-left lg:block">
        <Image
          src={images.testimonial}
          alt="Smiling senior gentleman (placeholder image)"
          fill
          sizes="42vw"
          className="object-cover object-[50%_20%]"
        />
      </div>

      <div className="container-x relative">
        <div className="max-w-[640px]">
          <span className="tag-pill">What Families Say</span>
          <h2 className="mt-4 font-serif text-[32px] font-semibold text-forest md:text-[38px]">
            Trusted by Families
          </h2>
          <p className="mt-3 text-[15px] text-ink-soft">
            We are grateful to the families who have placed their trust in us.
          </p>

          <div className="relative mt-8">
            <div className="rounded-xl bg-white px-7 py-6 shadow-card" aria-live="polite">
              <Quote className="h-6 w-6 fill-forest text-forest" aria-hidden />
              <p className="mt-3 text-[15px] leading-relaxed text-ink">{t.quote}</p>
              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="text-[13px] text-ink-soft">— {t.author}</span>
                {t.isSample && (
                  <span className="rounded-full bg-gold/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#8a6a10]">
                    Demo – not a real review
                  </span>
                )}
              </div>
            </div>
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => setI((i - 1 + n) % n)}
              className="absolute -left-4 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white shadow-card hover:bg-cream"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setI((i + 1) % n)}
              className="absolute -right-4 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white shadow-card hover:bg-cream"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2 md:justify-start md:pl-24">
            {testimonials.map((_, d) => (
              <button
                key={d}
                type="button"
                aria-label={`Show testimonial ${d + 1}`}
                onClick={() => setI(d)}
                className={`h-2 w-2 rounded-full ${d === i ? "bg-forest" : "bg-forest/25"}`}
              />
            ))}
          </div>
          <p className="mt-6 text-xs text-ink-mute">
            Demo content — replace with authentic, permission-granted reviews before launch.
          </p>
        </div>
      </div>
    </section>
  );
}
