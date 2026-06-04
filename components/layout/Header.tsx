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
                className="text-sm text-dark/70 hover:text-brand transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://jennifer-walker7285.clientsecure.me/sign-in"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 rounded-full bg-brand text-cream text-sm font-medium hover:bg-brand-dark transition-colors duration-200"
            >
              Book Free Consult
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-brand"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
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
              className="mt-3 px-5 py-3 rounded-full bg-brand text-cream text-center text-sm font-medium"
            >
              Book Free Consult
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
