import { Coffee, Dumbbell, Moon, Music, Sun, Utensils } from "lucide-react";
import type { ReactNode } from "react";
import { dailyLife } from "@/data/site";

const icons: Record<string, ReactNode> = {
  sun: <Sun />,
  coffee: <Coffee />,
  yoga: <Dumbbell />,
  utensils: <Utensils />,
  music: <Music />,
  moon: <Moon />,
};

export default function DailyLife() {
  return (
    <section className="bg-cream pb-20 md:pb-28">
      <div className="container-x">
        <div className="text-center">
          <span className="tag-pill">A Day at Mauli</span>
          <h2 className="mt-4 font-serif text-[32px] font-semibold text-forest md:text-[38px]">
            A Peaceful and Joyful Daily Routine
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-relaxed text-ink-soft">
            A balanced day of rest, nourishment, gentle activity and companionship. (Sample schedule)
          </p>
        </div>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dailyLife.map((d) => (
            <li key={d.title} className="flex gap-4 rounded-2xl bg-white p-5 shadow-card">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-pill text-forest [&>svg]:h-6 [&>svg]:w-6">
                {icons[d.icon]}
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-saffron">{d.time}</p>
                <h3 className="mt-0.5 text-[16px] font-semibold text-ink">{d.title}</h3>
                <p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">{d.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
