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
            <p className="text-sm text-cream/70 mb-6 leading-relaxed">
              Anxiety therapy and burnout recovery for high-performing professional women.
            </p>
            <div className="flex flex-col gap-3 text-sm text-cream/80">
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
            <h4 className="text-sm font-semibold tracking-widest uppercase text-cream/50 mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {[
                { label: "About Jennifer", href: "#about" },
                { label: "Therapy Services", href: "#services" },
                { label: "Programs", href: "#programs" },
                { label: "Resources", href: "#resources" },
                { label: "FAQ", href: "#faq" },
                { label: "Blog", href: "#blog" },
                { label: "Client Portal", href: "https://jennifer-walker7285.clientsecure.me/sign-in" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-dusty transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-cream/50 mb-5">
              Specialties
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-cream/70">
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

        {/* Bottom row */}
        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Jennifer Walker, LCSW. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://docs.google.com/document/d/1AQAlkk_GdG8_KuELe0mYxQ-ZNC6DSLGtw2P6U2dzMc8/copy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream/80 transition-colors"
            >
              Good Faith Estimate
            </a>
            <a
              href="https://docs.google.com/document/d/1mgeMWbyORkTue8EirFxavZMbFfQW68gbWOJxBCL60Q0/copy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream/80 transition-colors"
            >
              Website Disclaimer
            </a>
            <a
              href="https://jennifer-walker7285.clientsecure.me/sign-in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream/80 transition-colors"
            >
              Client Portal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
