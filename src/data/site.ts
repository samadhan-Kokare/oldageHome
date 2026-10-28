/**
 * CENTRAL SITE DATA
 * ---------------------------------------------------------------------------
 * Every editable piece of organization content lives in this file.
 * Anything wrapped in [SQUARE BRACKETS] is a placeholder that has NOT been
 * verified by the organization. Replace it once confirmed.
 *
 * Content flagged `sample: true` is proposed copy only — do not publish
 * claims (medical services, 24/7 care, ratings, etc.) until confirmed.
 */

/**
 * DEMO MODE — fills the site with clearly-labelled sample content so it looks
 * complete in client demos. Everything shown in demo mode is INVENTED.
 * Turn it off before launch: set NEXT_PUBLIC_DEMO_MODE=false (or change the
 * default below). With demo mode off, only [PLACEHOLDER] values are shown.
 */
export const DEMO_MODE = process.env.NEXT_PUBLIC_DEMO_MODE !== "false";

export const DEMO = {
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  email: "info@example.org",
  address: "Plot No. 00, Sample Garden Road, Sector 00",
  cityLine: "Navi Mumbai, Maharashtra 400000",
  hours: "Visiting hours: 10:00 AM – 6:00 PM (sample)",
} as const;

export const PLACEHOLDER = {
  phone: "[PHONE NUMBER]",
  whatsapp: "[WHATSAPP NUMBER]",
  email: "[OFFICIAL EMAIL]",
  address: "[FULL ADDRESS]",
  cityLine: "[CITY, STATE, PIN CODE]",
  hours: "[OPENING HOURS]",
} as const;

export const organization = {
  name: "Mauli Social Welfare Trust Old Age Home",
  shortName: "Mauli Social Welfare Trust",
  subName: "Old Age Home",
  tagline: "A Caring Home for a Happier Tomorrow",
  heroText:
    "Mauli Social Welfare Trust Old Age Home provides a safe, respectful and caring environment for senior citizens to live a healthy and peaceful life.",
  aboutText:
    "Mauli Social Welfare Trust Old Age Home is dedicated to the care and well-being of senior citizens. Our aim is to provide a comfortable, respectful and family-like environment where every resident can live with dignity, independence and happiness.",
  bandTitle: "A Place to Live with Dignity, Care and Companionship",
  bandText:
    "We believe in creating a warm and supportive community where every senior citizen feels valued, respected and at home.",
  quote: "A home where every senior citizen is valued, cared for and respected.",
} as const;

/** Contact details — keep as placeholders until confirmed. */
const pick = (k: keyof typeof PLACEHOLDER): string => (DEMO_MODE ? DEMO[k] : PLACEHOLDER[k]);

export const contact = {
  phone: pick("phone"),
  whatsapp: pick("whatsapp"),
  email: pick("email"),
  address: pick("address"),
  cityLine: pick("cityLine"),
  hours: pick("hours"),
  /** Digits only (e.g. "919812345678"). Leave empty until verified (links stay disabled). */
  phoneDigits: "",
  whatsappDigits: "",
  /** Google Maps share / directions URL. Leave empty until verified. */
  mapsUrl: "",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Facilities", href: "#facilities" },
  { label: "Life at Mauli", href: "#gallery" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

/** Icon keys are resolved in components/FeatureStrip.tsx */
export const highlights = [
  { icon: "shield", label: "Safe & Secure Environment" },
  { icon: "home", label: "Comfortable Living Spaces" },
  { icon: "meals", label: "Healthy & Nutritious Meals" },
  { icon: "care", label: "Care & Wellbeing Support" },
  { icon: "social", label: "Social & Recreational Activities" },
  { icon: "staff", label: "Caring Staff" },
] as const;

export type Facility = {
  title: string;
  description: string;
  image: string;
  /** true = proposed sample copy, not yet confirmed by the organization */
  sample: boolean;
};

export const facilities: Facility[] = [
  {
    title: "Comfortable Rooms",
    description: "Clean, well-ventilated and peaceful living spaces.",
    image: "/images/f-rooms.jpg",
    sample: true,
  },
  {
    title: "Nutritious Meals",
    description: "Healthy and balanced meals prepared with care.",
    image: "/images/f-meals.jpg",
    sample: true,
  },
  {
    title: "Care & Wellbeing",
    description: DEMO_MODE
      ? "Regular health check-ups and caring support for everyday needs. (demo text)"
      : "[Details of care and health support to be confirmed by the organization.]",
    image: "/images/f-medical.jpg",
    sample: true,
  },
  {
    title: "Recreational Activities",
    description: "Social, cultural and engaging activities for mental well-being.",
    image: "/images/f-recreation.jpg",
    sample: true,
  },
  {
    title: "Safe & Peaceful Environment",
    description: "A calm and secure place to live with peace of mind.",
    image: "/images/f-safe.jpg",
    sample: true,
  },
  {
    title: "Caring Staff",
    description: DEMO_MODE
      ? "Friendly, trained staff who look after every resident with respect. (demo text)"
      : "[Staff details and availability to be confirmed by the organization.]",
    image: "/images/f-staff.jpg",
    sample: true,
  },
];

export const gallery = [
  { src: "/images/g1.jpg", alt: "Residents doing group yoga (placeholder image)" },
  { src: "/images/g2.jpg", alt: "Residents enjoying an activity together (placeholder image)" },
  { src: "/images/g3.jpg", alt: "Residents relaxing in the garden (placeholder image)" },
  { src: "/images/g4.jpg", alt: "Common dining area (placeholder image)" },
  ...(DEMO_MODE
    ? [
        { src: "/images/f-recreation.jpg", alt: "Friends chatting together (demo image)" },
        { src: "/images/f-safe.jpg", alt: "Peaceful garden pathway (demo image)" },
        { src: "/images/f-rooms.jpg", alt: "Comfortable resident room (demo image)" },
        { src: "/images/f-meals.jpg", alt: "Freshly prepared meal (demo image)" },
      ]
    : []),
];

/**
 * Statistics band. Values are `null` until verified — never invent numbers.
 * When a value is provided it is displayed instead of the placeholder.
 */
export const stats = [
  { icon: "rating", value: (DEMO_MODE ? "4.9" : null) as string | null, label: "Google Rating", note: "[Rating & review count to be verified]" },
  { icon: "years", value: (DEMO_MODE ? "10+" : null) as string | null, label: "Years of Service", note: "" },
  { icon: "residents", value: (DEMO_MODE ? "50+" : null) as string | null, label: "Happy Residents", note: "" },
  { icon: "staff", value: (DEMO_MODE ? "25+" : null) as string | null, label: "Caring Staff Members", note: "" },
];

/**
 * SAMPLE testimonials — for development only.
 * They are hidden in production builds unless
 * NEXT_PUBLIC_SHOW_SAMPLE_TESTIMONIALS=true is set.
 * Replace with authentic, permission-granted reviews, then set `isSample: false`.
 */
export const testimonials = [
  {
    quote: "A very caring and well-maintained home. The staff is supportive and the environment is peaceful.",
    author: "Demo Family Member",
    isSample: true,
  },
  {
    quote: "We visit often and always find our mother smiling. The meals, the garden and the warmth of the team make it feel like family.",
    author: "Demo Family Member",
    isSample: true,
  },
  {
    quote: "Clean rooms, a calm atmosphere and kind people. It gave our whole family real peace of mind.",
    author: "Demo Family Member",
    isSample: true,
  },
  {
    quote: "The daily activities keep my father engaged and cheerful. We are grateful for the respect shown to every resident.",
    author: "Demo Family Member",
    isSample: true,
  },
  {
    quote: "Admission was simple and the team answered every question patiently. Highly recommended for a dignified stay.",
    author: "Demo Family Member",
    isSample: true,
  },
];

export const showTestimonials =
  DEMO_MODE ||
  process.env.NODE_ENV !== "production" ||
  process.env.NEXT_PUBLIC_SHOW_SAMPLE_TESTIMONIALS === "true";

export const images = {
  hero: "/images/hero.jpg",
  about: "/images/about.jpg",
  testimonial: "/images/testimonial.jpg",
  admission: "/images/admission.jpg",
};

/** Demo-only sections (rendered only when DEMO_MODE is true). All content is sample text. */
export const dailyLife = [
  { icon: "sun", time: "6:30 AM", title: "Morning Prayer & Walk", text: "A gentle start to the day with prayer and a stroll in the garden." },
  { icon: "coffee", time: "8:00 AM", title: "Breakfast", text: "A warm, wholesome breakfast enjoyed together in the dining hall." },
  { icon: "yoga", time: "10:30 AM", title: "Yoga & Light Exercise", text: "Easy stretching and breathing sessions suited for every age." },
  { icon: "utensils", time: "1:00 PM", title: "Lunch & Rest", text: "A balanced lunch followed by quiet rest time in comfortable rooms." },
  { icon: "music", time: "4:30 PM", title: "Games, Music & Satsang", text: "Carrom, bhajans, storytelling and conversations with friends." },
  { icon: "moon", time: "8:00 PM", title: "Dinner & Good Night", text: "A light dinner and a peaceful evening before a restful sleep." },
];

export const admissionSteps = [
  { title: "Get in Touch", text: "Call us or fill in the enquiry form to share your requirements." },
  { title: "Visit the Home", text: "Walk through the rooms, garden and dining area and meet our team." },
  { title: "Complete Formalities", text: "Share the basic documents and understand the guidelines." },
  { title: "Welcome Home", text: "Your loved one settles into a warm and friendly community." },
];

export const faqs = [
  { q: "Can family members visit residents?", a: "Yes. Families are welcome during visiting hours. (Demo answer — confirm actual timings.)" },
  { q: "What kind of meals are served?", a: "Simple, nutritious vegetarian meals prepared fresh each day. (Demo answer.)" },
  { q: "How do I begin the admission process?", a: "Send us an enquiry using the form above or call us, and our team will guide you. (Demo answer.)" },
  { q: "Are visits to see the home allowed before admission?", a: "Yes, we encourage a visit so that you can see the environment for yourself. (Demo answer.)" },
  { q: "What items should a resident bring?", a: "Personal clothing, regular medicines and a few cherished belongings. (Demo answer.)" },
];
