import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { images, organization } from "@/data/site";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#f1ecd9]">
      {/* Photo on the right, fading into the cream background */}
      <div className="absolute inset-y-0 right-0 hidden w-[68%] fade-left md:block">
        <Image
          src={images.hero}
          alt="A caregiver sharing a warm moment with a senior resident (placeholder image)"
          fill
          priority
          sizes="70vw"
          className="object-cover object-[60%_30%]"
        />
      </div>
      {/* Mobile: photo as soft background */}
      <div className="absolute inset-0 md:hidden">
        <Image src={images.hero} alt="" fill priority sizes="100vw" className="object-cover opacity-25" />
      </div>

      <div className="container-x relative pb-36 pt-16 md:pb-44 md:pt-24">
        <div className="max-w-[520px]">
          <h1 className="font-serif text-[44px] font-semibold leading-[1.12] text-forest sm:text-[56px] lg:text-[62px]">
            A Caring Home
            <br />
            for a Happier
            <br />
            Tomorrow
          </h1>
          <p className="mt-6 max-w-[480px] text-[16px] leading-relaxed text-ink">{organization.heroText}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#enquiry" className="btn-primary">
              Enquiry Now <ArrowRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              disabled
              title="Video coming soon"
              className="btn-outline cursor-not-allowed"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-forest text-white">
                <Play className="h-2.5 w-2.5 fill-current" />
              </span>
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
