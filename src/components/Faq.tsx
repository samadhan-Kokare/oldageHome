import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/site";

export default function Faq() {
  return (
    <section id="faq" className="bg-cream py-20 md:py-24">
      <div className="container-x max-w-[820px]">
        <div className="text-center">
          <span className="tag-pill">FAQ</span>
          <h2 className="mt-4 font-serif text-[32px] font-semibold text-forest md:text-[38px]">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0} className="group rounded-xl bg-white px-5 py-4 shadow-soft">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15.5px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-forest transition group-open:rotate-180" aria-hidden />
              </summary>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
