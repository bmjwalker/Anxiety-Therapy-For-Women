import Link from "next/link";
import { Mail, Clock, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-cream/90">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Column 1 — Brand + Contact */}
          <div>
            <h3
              className="text-2xl font-medium text-cream mb-4"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Jennifer Walker, LCSW
            </h3>
            <p className="text-sm text-cream/88 mb-6 leading-relaxed">
              Anxiety therapy and burnout recovery for high-performing professional women.
            </p>
            <div className="flex flex-col gap-3 text-sm text-cream/92">
              <a
                href="mailto:jennifer@anxietytherapyforwomen.com"
                className="flex items-center gap-2 hover:text-dusty transition-colors"
              >
                <Mail size={15} />
                jennifer@anxietytherapyforwomen.com
              </a>
              <div className="flex items-center gap-2">
                <Clock size={15} />
                Monday – Friday by appointment
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                Online therapy for Georgia &amp; Florida residents
              </div>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-cream/85 mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {[
                { label: "About Jennifer", href: "/about" },
                { label: "Therapy Services", href: "/#services" },
                { label: "Programs", href: "/#programs" },
                { label: "Resources", href: "/resources" },
                { label: "FAQ", href: "/faqs" },
                { label: "Blog", href: "/blog" },
                { label: "Client Portal", href: "https://jennifer-walker7285.clientsecure.me/sign-in" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/85 hover:text-dusty transition-colors"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-cream/85 mb-5">
              Specialties
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-cream/85">
              {[
                "Anxiety & Burnout Therapy",
                "Career Clarity Therapy",
                "Life Transitions Therapy",
                "High-Performing Women Therapy",
                "DBT & CBT Approaches",
                "Telehealth (GA & FL)",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom rows */}
        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col gap-4">

          {/* Social links */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2.5">
            {[
              { label: "Facebook",  href: "https://www.facebook.com/profile.php?id=100073222913867" },
              { label: "Instagram", href: "https://www.instagram.com/clarityforhpwomen/" },
              { label: "YouTube",   href: "https://www.youtube.com/@HighPerformingWomen" },
              { label: "Pinterest", href: "https://www.pinterest.com/jenniferwalkerlcsw/" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cream/30 px-4 py-1.5 text-xs font-medium text-cream/90 hover:border-dusty hover:text-dusty transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Legal links + copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/70">
            <div className="flex flex-col gap-0.5 text-center sm:text-left">
              <p>© {new Date().getFullYear()} JK Walker, LLC. All rights reserved.</p>
              <p>Practicing as Jennifer Walker, LCSW.</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://docs.google.com/document/d/1AQAlkk_GdG8_KuELe0mYxQ-ZNC6DSLGtw2P6U2dzMc8/copy" target="_blank" rel="noopener noreferrer" className="hover:text-cream/80 transition-colors">
                Good Faith Estimate
              </a>
              <a href="https://docs.google.com/document/d/1mgeMWbyORkTue8EirFxavZMbFfQW68gbWOJxBCL60Q0/copy" target="_blank" rel="noopener noreferrer" className="hover:text-cream/80 transition-colors">
                Website Disclaimer
              </a>
              <a href="https://jennifer-walker7285.clientsecure.me/sign-in" target="_blank" rel="noopener noreferrer" className="hover:text-cream/80 transition-colors">
                Client Portal
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
