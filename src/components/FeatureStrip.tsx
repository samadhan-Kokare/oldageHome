import { Flower2, Heart, HandHeart, House, ShieldCheck, Users } from "lucide-react";
import type { ReactNode } from "react";
import { highlights } from "@/data/site";

const icons: Record<string, ReactNode> = {
  shield: <ShieldCheck />,
  home: <House />,
  meals: <HandHeart />,
  care: <Heart />,
  social: <Flower2 />,
  staff: <Users />,
};

export default function FeatureStrip() {
  return (
    <section className="relative z-10 -mt-24 md:-mt-28">
      <div className="container-x">
        <ul className="grid grid-cols-2 gap-y-6 rounded-3xl bg-white px-4 py-7 shadow-card sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0 lg:px-6">
          {highlights.map((h, i) => (
            <li
              key={h.label}
              className={`flex flex-col items-center gap-3 px-3 text-center ${
                i > 0 ? "lg:border-l lg:border-black/10" : ""
              }`}
            >
              <span className="text-forest [&>svg]:h-9 [&>svg]:w-9 [&>svg]:stroke-[1.6]">{icons[h.icon]}</span>
              <span className="text-[13px] font-medium leading-snug text-ink">{h.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
