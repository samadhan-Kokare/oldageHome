import { contact, organization } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-forest py-6 text-[13px] text-white/80">
      <div className="container-x flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
        <p>
          © {new Date().getFullYear()} {organization.name}. All rights reserved.
        </p>
        <p>{contact.email}</p>
      </div>
    </footer>
  );
}
