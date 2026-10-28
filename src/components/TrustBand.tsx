import { Award, Star, UserCheck, Users } from "lucide-react";
import type { ReactNode } from "react";
import { DEMO_MODE, organization, stats } from "@/data/site";

const icons: Record<string, ReactNode> = {
  rating: <Star className="fill-gold" />,
  years: <Award />,
  residents: <Users className="fill-gold/30" />,
  staff: <UserCheck />,
};

export default function TrustBand() {
  return (
    <section className="bg-forest py-16 text-white md:py-20">
      <div className="container-x text-center">
        <h2 className="mx-auto max-w-[760px] font-serif text-[28px] font-semibold leading-snug md:text-[36px]">
          {organization.bandTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-[680px] text-[15.5px] leading-relaxed text-white/90">
          {organization.bandText}
        </p>

        <ul className="mx-auto mt-12 grid max-w-[1000px] grid-cols-2 gap-y-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <li
              key={s.label}
              className={`flex items-center justify-center gap-4 px-4 text-left ${
                i > 0 ? "md:border-l md:border-white/20" : ""
              }`}
            >
              <span className="text-gold [&>svg]:h-10 [&>svg]:w-10 [&>svg]:stroke-[1.5]">{icons[s.icon]}</span>
              <span>
                {s.value ? (
                  <span className="block font-serif text-3xl font-semibold">{s.value}</span>
                ) : (
                  <span
                    className="mb-1 block h-5 w-14 rounded bg-white/15"
                    title="Value to be verified and added"
                    aria-label="Value to be added"
                  />
                )}
                <span className="block text-[15px] leading-tight">{s.label}</span>
                {s.note && !s.value && <span className="mt-1 block text-[10px] text-white/60">{s.note}</span>}
              </span>
            </li>
          ))}
        </ul>
        {DEMO_MODE && <p className="mt-8 text-xs text-white/60">Demo values — replace with verified figures before launch.</p>}
      </div>
    </section>
  );
}
