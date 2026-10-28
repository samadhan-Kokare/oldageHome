import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { images, organization } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="bg-cream py-20 md:py-28">
      <div className="container-x grid items-center gap-12 md:grid-cols-2">
        <div>
          <span className="tag-pill">About Us</span>
          <h2 className="mt-4 font-serif text-[32px] font-semibold leading-tight text-forest md:text-[38px]">
            About {organization.shortName}
          </h2>
          <p className="mt-5 max-w-[500px] text-[16px] leading-[1.75] text-ink-soft">{organization.aboutText}</p>
          <a href="#about" className="btn-primary mt-7 !px-6 !py-3 !text-sm">
            Read More <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-card">
          <Image
            src={images.about}
            alt="Front view of the old age home building (placeholder image)"
            fill
            sizes="(min-width: 768px) 560px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
