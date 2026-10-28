"use client";

import Image from "next/image";
import { useState } from "react";
import { Leaf } from "lucide-react";
import { images, organization } from "@/data/site";
import {
  ENQUIRY_BACKEND_CONNECTED,
  submitEnquiry,
  validateEnquiry,
  type EnquiryErrors,
  type EnquiryValues,
} from "@/lib/enquiry";

const empty: EnquiryValues = { name: "", phone: "", email: "", message: "" };

const inputCls =
  "w-full rounded-lg border bg-white px-4 py-3 text-[14px] text-ink placeholder:text-ink-mute/70 outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20";

export default function Enquiry() {
  const [values, setValues] = useState<EnquiryValues>(empty);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [sent, setSent] = useState(false);

  const set = (k: keyof EnquiryValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validateEnquiry(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      document.getElementById(`enq-${first}`)?.focus();
      return;
    }
    setStatus("sending");
    const res = await submitEnquiry(values);
    setSent(res.sent);
    setStatus("done");
    setValues(empty);
  }

  const field = (k: keyof EnquiryValues) => ({
    id: `enq-${k}`,
    value: values[k],
    onChange: set(k),
    "aria-invalid": !!errors[k],
    "aria-describedby": errors[k] ? `enq-${k}-err` : undefined,
    className: `${inputCls} ${errors[k] ? "border-red-500" : "border-black/10"}`,
  });

  const Err = ({ k }: { k: keyof EnquiryValues }) =>
    errors[k] ? (
      <p id={`enq-${k}-err`} className="mt-1 text-xs text-red-600">
        {errors[k]}
      </p>
    ) : null;

  return (
    <section id="enquiry" className="bg-cream py-16 md:py-20">
      <div className="container-x">
        <div className="grid overflow-hidden rounded-[28px] bg-gradient-to-br from-cream-deep to-white shadow-card md:grid-cols-[0.9fr_1.1fr]">
          {/* Left: portrait + tagline */}
          <div className="relative min-h-[320px] md:min-h-[560px]">
            <div className="fade-right absolute inset-y-0 left-0 w-[58%] md:w-[57%]">
              <Image
                src={images.admission}
                alt="Smiling senior woman (placeholder image)"
                fill
                sizes="(min-width: 768px) 360px, 60vw"
                className="object-cover object-top"
              />
            </div>
            <blockquote className="absolute bottom-6 right-6 w-[48%] md:bottom-auto md:top-1/2 md:w-[40%] md:-translate-y-1/2 font-serif text-[18px] italic leading-snug text-forest md:right-8 md:text-[20px]">
              “{organization.quote}”
            </blockquote>
            <Leaf className="absolute bottom-8 right-8 h-12 w-12 text-forest/15" aria-hidden />
          </div>

          {/* Right: form */}
          <div className="bg-white/70 px-6 py-10 sm:px-10 md:py-12">
            <span className="tag-pill">Get in Touch</span>
            <h2 className="mt-4 font-serif text-[30px] font-semibold text-forest md:text-[34px]">
              Admission Enquiry
            </h2>
            <p className="mt-3 max-w-[480px] text-[14px] leading-relaxed text-ink-soft">
              If you would like to know more about our facilities or admission process, please fill in the form. We
              will get back to you shortly.
            </p>

            <form onSubmit={onSubmit} noValidate className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="enq-name" className="mb-1.5 block text-[13px] font-medium">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input type="text" autoComplete="name" placeholder="Enter your name" {...field("name")} />
                <Err k="name" />
              </div>
              <div>
                <label htmlFor="enq-phone" className="mb-1.5 block text-[13px] font-medium">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input type="tel" autoComplete="tel" placeholder="Enter your phone number" {...field("phone")} />
                <Err k="phone" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="enq-email" className="mb-1.5 block text-[13px] font-medium">
                  Email (Optional)
                </label>
                <input type="email" autoComplete="email" placeholder="Enter your email" {...field("email")} />
                <Err k="email" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="enq-message" className="mb-1.5 block text-[13px] font-medium">
                  Your Message
                </label>
                <textarea rows={3} placeholder="Please share your enquiry" {...field("message")} />
                <Err k="message" />
              </div>

              <div className="sm:col-span-2">
                <button type="submit" disabled={status === "sending"} className="btn-primary w-full !rounded-lg disabled:opacity-60">
                  {status === "sending" ? "Submitting…" : "Submit Enquiry"}
                </button>

                {status === "done" && (
                  <p role="status" className="mt-3 rounded-lg bg-pill px-4 py-3 text-[13px] text-forest">
                    {sent
                      ? "Thank you! Your enquiry has been received. We will get back to you shortly."
                      : "Form validated successfully. Backend integration is pending, so this enquiry has NOT been sent yet."}
                  </p>
                )}
                {!ENQUIRY_BACKEND_CONNECTED && (
                  <p className="mt-3 text-[11.5px] text-ink-mute">
                    Note: submissions are not yet connected to a real service (backend integration pending).
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
