"use client";

import { useState, useEffect } from "react";
import { BOOKING_URL } from "@/lib/booking";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Groups", href: "/groups" },
  { label: "Rates & Insurance", href: "/rates-insurance" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faqs" },
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
        <div className="flex items-center justify-between gap-5 h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group min-w-0 shrink md:shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element -- small static SVG; next/image doesn't optimize SVGs */}
            <img
              src="/logo-mark-jw.svg"
              alt=""
              width={52}
              height={52}
              className="object-contain shrink-0"
            />
            <span className="flex flex-col min-w-0">
              <span
                className="text-base min-[380px]:text-lg sm:text-xl md:text-2xl font-medium text-brand truncate leading-none"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Anxiety Therapy for Women
              </span>
              <span
                className="font-sans text-[11px] md:text-xs tracking-[0.04em] whitespace-nowrap leading-none mt-[2px]"
                style={{ color: "#57686B" }}
              >
                Jennifer Walker, LCSW
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden min-[1180px]:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-dark/85 hover:text-brand transition-colors duration-200 font-medium whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-4 py-2 rounded-md text-sm whitespace-nowrap"
            >
              Book Free Consult
            </a>
          </nav>

          {/* Below 1180px: hamburger, plus the Book button from 520px up */}
          <div className="min-[1180px]:hidden flex items-center gap-2 shrink-0">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-[520px]:inline-flex btn-primary px-4 py-1.5 rounded-md text-xs"
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
        <div className="min-[1180px]:hidden bg-cream border-t border-cream-dark">
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
              href={BOOKING_URL}
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
