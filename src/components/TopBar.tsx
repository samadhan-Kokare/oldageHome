import { MapPin, Phone } from "lucide-react";
import { contact } from "@/data/site";
import { WhatsAppIcon } from "./Icons";

export default function TopBar() {
  return (
    <div className="bg-forest text-[13px] text-white">
      <div className="container-x flex h-10 items-center justify-between gap-4">
        <span className="flex items-center gap-2 truncate">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-gold" aria-hidden />
          <span className="truncate">{contact.cityLine}</span>
        </span>
        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-2 sm:flex">
            <Phone className="h-3.5 w-3.5 text-gold" aria-hidden />
            Call us:{" "}
            {contact.phoneDigits ? (
              <a href={`tel:+${contact.phoneDigits}`} className="font-semibold">
                {contact.phone}
              </a>
            ) : (
              <span className="font-semibold">{contact.phone}</span>
            )}
          </span>
          <a
            href={contact.whatsappDigits ? `https://wa.me/${contact.whatsappDigits}` : "#contact"}
            className="flex items-center gap-1.5 rounded-full bg-forest-dark px-4 py-1.5 text-xs font-medium ring-1 ring-white/20 hover:bg-forest-light"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 text-[#4ade80]" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
