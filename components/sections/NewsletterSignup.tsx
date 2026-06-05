"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

// Kit (ConvertKit) public landing page — email is pre-filled via query param
// To switch to a direct API submission, POST to:
//   https://api.convertkit.com/v3/forms/{FORM_ID}/subscribe
//   with body: { api_key: "YOUR_PUBLIC_API_KEY", email }
const KIT_LANDING_URL = "https://fabulous-teacher-7023.kit.com/c2bd48329f";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    // Pre-fill email on the Kit landing page and open it
    const url = `${KIT_LANDING_URL}?email=${encodeURIComponent(email.trim())}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-cream/80 text-sm text-center py-2">
        ✓ Check your inbox — we just opened the signup page with your email pre-filled!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="flex-1 px-5 py-3 rounded-full bg-white/15 border border-cream/30 text-cream placeholder:text-cream/50 text-sm focus:outline-none focus:ring-2 focus:ring-cream/40 focus:bg-white/20 transition-colors"
      />
      <button
        type="submit"
        className="btn-primary px-6 py-3 text-sm"
      >
        Subscribe
        <ArrowRight size={14} />
      </button>
    </form>
  );
}
