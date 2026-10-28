# Mauli Social Welfare Trust Old Age Home — website

Next.js 14 (App Router) · TypeScript · Tailwind CSS

    npm install
    npm run dev      # http://localhost:3000

- All editable content (contact, facilities, gallery, stats, testimonials): `src/data/site.ts`
- Placeholders are written as `[LIKE THIS]` — replace once verified.
- Sample testimonials show in dev only; in production set `NEXT_PUBLIC_SHOW_SAMPLE_TESTIMONIALS=true` to show them.
- Enquiry form validates but is not connected to a backend: implement `submitEnquiry` in `src/lib/enquiry.ts`.
- Images in `public/images/` are crops of the mockup used as temporary placeholders.

## Demo mode
`DEMO_MODE` (in `src/data/site.ts`) is ON by default and fills the site with clearly-labelled SAMPLE data
(contact details, stats, testimonials, daily routine, admission steps, FAQ, extra gallery photos).
Before launch run/build with `NEXT_PUBLIC_DEMO_MODE=false` (e.g. in `.env.local`) to remove all demo content.
