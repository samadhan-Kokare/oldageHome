import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { contact } from "@/data/site";
import { WhatsAppIcon } from "./Icons";

function MapPlaceholder() {
  return (
    <div
      className="relative min-h-[260px] overflow-hidden rounded-2xl bg-[#e9efe3] shadow-card md:min-h-[300px]"
      role="img"
      aria-label="Map placeholder — location to be added once the address is verified"
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <rect width="400" height="300" fill="#eef2e8" />
        <path d="M-10 220 C80 180 140 250 260 200 S380 120 420 150 L420 310 L-10 310Z" fill="#dbe7d0" />
        <rect x="270" y="30" width="90" height="60" rx="10" fill="#d3e4c9" />
        <g stroke="#fff" strokeLinecap="round" fill="none">
          <path d="M-10 90 L420 60" strokeWidth="9" />
          <path d="M120 -10 L170 310" strokeWidth="9" />
          <path d="M-10 170 L420 210" strokeWidth="6" />
          <path d="M280 -10 L250 310" strokeWidth="6" />
          <path d="M40 -10 L80 310" strokeWidth="4" />
          <path d="M-10 250 L420 270" strokeWidth="4" />
        </g>
      </svg>
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
        <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-card">
          <MapPin className="h-6 w-6 fill-red-500 text-white" aria-hidden />
          <div className="text-[12px] font-semibold leading-tight text-ink">
            Mauli Social Welfare Trust
            <br />
            <span className="font-normal text-ink-soft">Old Age Home</span>
          </div>
        </div>
        <span className="whitespace-nowrap rounded-full bg-white/90 px-3 py-1 text-[11px] text-ink-soft">
          Map placeholder — verified location to be added
        </span>
      </div>
    </div>
  );
}

export default function Contact() {
  const mapsHref = contact.mapsUrl || undefined;
  const waHref = contact.whatsappDigits ? `https://wa.me/${contact.whatsappDigits}` : undefined;

  return (
    <section id="contact" className="bg-white py-16 md:py-20">
      <div className="container-x grid items-center gap-10 md:grid-cols-2">
        <div>
          <span className="tag-pill">Contact Us</span>
          <h2 className="mt-4 font-serif text-[32px] font-semibold text-forest md:text-[38px]">
            Visit or Contact Us
          </h2>
          <p className="mt-3 text-[15px] text-ink-soft">
            We welcome you to visit our old age home or get in touch for any enquiries.
          </p>

          <ul className="mt-8 space-y-5 text-[15px]">
            <li className="flex gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-forest" aria-hidden />
              <span className="leading-relaxed text-ink">
                {contact.address}
                <br />
                {contact.cityLine}
              </span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="h-5 w-5 shrink-0 text-forest" aria-hidden />
              <span className="font-medium">{contact.phone}</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="h-5 w-5 shrink-0 text-forest" aria-hidden />
              <span className="font-medium">{contact.email}</span>
            </li>
            <li className="flex items-center gap-4">
              <Clock className="h-5 w-5 shrink-0 text-forest" aria-hidden />
              <span className="font-medium">{contact.hours}</span>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!mapsHref}
              title={mapsHref ? undefined : "Directions link will be added once the address is verified"}
              className={`btn-primary !px-6 !py-3 !text-sm ${mapsHref ? "" : "cursor-not-allowed opacity-80"}`}
            >
              <Navigation className="h-4 w-4" aria-hidden />
              Get Directions
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!waHref}
              title={waHref ? undefined : "WhatsApp number to be added"}
              className={`btn-outline !px-6 !py-3 !text-sm ${waHref ? "" : "cursor-not-allowed"}`}
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25d366]" />
              WhatsApp
            </a>
          </div>
        </div>

        <MapPlaceholder />
      </div>
    </section>
  );
}
