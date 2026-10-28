"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, organization } from "@/data/site";
import { Logo } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_14px_rgba(40,55,35,0.08)]">
      <div className="container-x flex h-[76px] items-center justify-between">
        <a href="#home" className="flex items-center gap-3" aria-label={organization.name}>
          <Logo className="h-12 w-12" />
          <span className="leading-tight">
            <span className="block font-serif text-[17px] font-semibold text-forest">
              {organization.shortName}
            </span>
            <span className="block text-sm text-ink-soft">{organization.subName}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-[14px] font-medium text-ink hover:text-forest">
              {l.label}
            </a>
          ))}
          <a href="#enquiry" className="btn-primary !py-3 !text-sm">
            Enquiry Now
          </a>
        </nav>

        <button
          className="rounded-md p-2 text-forest lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-black/5 bg-white lg:hidden" aria-label="Mobile">
          <div className="container-x flex flex-col gap-1 py-3">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] font-medium hover:bg-cream"
              >
                {l.label}
              </a>
            ))}
            <a href="#enquiry" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Enquiry Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
