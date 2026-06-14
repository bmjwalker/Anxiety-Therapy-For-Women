"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Programs", href: "/#programs" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faqs" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-sm"
          : "bg-cream/80 backdrop-blur-sm"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/transparent-logo.png"
              alt="Jennifer Walker LCSW logo"
              width={52}
              height={52}
              className="object-contain mix-blend-multiply"
            />
            <span
              className="text-xl md:text-2xl font-medium text-brand whitespace-nowrap"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Jennifer Walker, LCSW
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-dark/85 hover:text-brand transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}

            {/* Social icons */}
            <div className="hidden md:flex items-center gap-3">
              <a href="https://www.facebook.com/profile.php?id=100073222913867" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200" style={{ color: "#4A7C7E" }} onMouseEnter={e => (e.currentTarget.style.color = "#C4897B")} onMouseLeave={e => (e.currentTarget.style.color = "#4A7C7E")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/clarityforhpwomen/" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200" style={{ color: "#4A7C7E" }} onMouseEnter={e => (e.currentTarget.style.color = "#C4897B")} onMouseLeave={e => (e.currentTarget.style.color = "#4A7C7E")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@HighPerformingWomen" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200" style={{ color: "#4A7C7E" }} onMouseEnter={e => (e.currentTarget.style.color = "#C4897B")} onMouseLeave={e => (e.currentTarget.style.color = "#4A7C7E")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                  <polygon fill="white" points="9.545 15.568 15.818 12 9.545 8.432 9.545 15.568"/>
                </svg>
              </a>
              <a href="https://www.pinterest.com/jenniferwalkerlcsw/" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200" style={{ color: "#4A7C7E" }} onMouseEnter={e => (e.currentTarget.style.color = "#C4897B")} onMouseLeave={e => (e.currentTarget.style.color = "#4A7C7E")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </a>
            </div>

            <a
              href="https://jennifer-walker7285.clientsecure.me/sign-in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary ml-2 px-5 py-2 rounded-md text-sm"
            >
              Book Free Consult
            </a>
          </nav>

          {/* Mobile: always-visible Book button + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="https://jennifer-walker7285.clientsecure.me/sign-in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-4 py-1.5 rounded-md text-xs"
            >
              Book Free Consult
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-brand"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-cream-dark">
          <div className="section-container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-2 text-base text-dark/80 hover:text-brand transition-colors border-b border-cream-dark last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://jennifer-walker7285.clientsecure.me/sign-in"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-3 px-5 py-3 rounded-md text-sm w-full justify-center"
            >
              Book Free Consult
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
