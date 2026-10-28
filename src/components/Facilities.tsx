import Image from "next/image";
import { facilities } from "@/data/site";

export default function Facilities() {
  return (
    <section id="facilities" className="bg-cream pb-20 pt-4 md:pb-28">
      <div className="container-x">
        <div className="text-center">
          <span className="tag-pill">Our Facilities</span>
          <h2 className="mt-4 font-serif text-[32px] font-semibold text-forest md:text-[38px]">
            Everything for a Comfortable Life
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-[15px] leading-relaxed text-ink-soft">
            We provide essential facilities and personal care to ensure a safe, healthy and happy living experience
            for our residents.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <article key={f.title} className="overflow-hidden rounded-2xl bg-white shadow-card">
              <div className="relative aspect-[16/8.6]">
                <Image
                  src={f.image}
                  alt={`${f.title} (placeholder image)`}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="px-5 pb-6 pt-4">
                <h3 className="text-[16px] font-semibold text-ink">{f.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">{f.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
