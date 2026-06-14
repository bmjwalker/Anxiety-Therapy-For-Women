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
          <div className="flex items-center justify-center sm:justify-end gap-5">
            <a href="https://www.facebook.com/profile.php?id=100073222913867" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity duration-200 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/clarityforhpwomen/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity duration-200 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@HighPerformingWomen" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity duration-200 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
              </svg>
            </a>
            <a href="https://www.pinterest.com/jenniferwalkerlcsw/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity duration-200 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
              </svg>
            </a>
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
