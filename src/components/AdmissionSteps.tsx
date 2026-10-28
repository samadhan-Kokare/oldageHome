import { admissionSteps } from "@/data/site";

export default function AdmissionSteps() {
  return (
    <section className="bg-cream-deep py-20 md:py-24">
      <div className="container-x">
        <div className="text-center">
          <span className="tag-pill">How It Works</span>
          <h2 className="mt-4 font-serif text-[32px] font-semibold text-forest md:text-[38px]">
            A Simple Admission Process
          </h2>
        </div>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {admissionSteps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl bg-white px-6 pb-6 pt-9 text-center shadow-card">
              <span className="absolute -top-5 left-1/2 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full bg-forest font-serif text-lg font-semibold text-white ring-4 ring-cream-deep">
                {i + 1}
              </span>
              <h3 className="text-[16px] font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
