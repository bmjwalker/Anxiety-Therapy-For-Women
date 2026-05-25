import { ExternalLink, Phone, Download, Smartphone, Heart } from "lucide-react";
import { ArrowRight } from "lucide-react";

const mentalHealthOrgs = [
  {
    name: "Anxiety & Depression Association of America",
    abbr: "ADAA",
    description: "Evidence-based resources, therapist directory, and online communities.",
    url: "https://adaa.org",
  },
  {
    name: "National Institute of Mental Health",
    abbr: "NIMH",
    description: "Research-backed information on anxiety disorders, treatment, and statistics.",
    url: "https://www.nimh.nih.gov",
  },
  {
    name: "National Alliance on Mental Illness",
    abbr: "NAMI",
    description: "Education, advocacy, and support groups for individuals and families.",
    url: "https://www.nami.org",
  },
  {
    name: "Centers for Disease Control and Prevention",
    abbr: "CDC",
    description: "Public health resources on mental health, stress, and well-being.",
    url: "https://www.cdc.gov/mentalhealth",
  },
];

const apps = [
  {
    name: "Calm",
    description: "Guided meditation, sleep stories, and breathing exercises.",
  },
  {
    name: "Sanvello",
    description: "CBT-based tools for managing stress and anxiety.",
  },
  {
    name: "MindShift CBT",
    description: "Evidence-based anxiety management strategies.",
  },
  {
    name: "Self-Help Anxiety Management",
    description: "Identify triggers and develop personalized coping strategies.",
  },
  {
    name: "Panic Relief",
    description: "Evidence-based techniques for panic attack management.",
  },
];

const selfCareItems = [
  "Regular physical movement and exercise",
  "Deep breathing and breath-work practices",
  "Mindfulness and daily meditation",
  "Prioritizing restful sleep (7–9 hours)",
  "Consistent, nourishing nutrition",
  "Setting and honoring personal boundaries",
];

export default function Resources() {
  return (
    <section id="resources" className="bg-white section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-dusty" />
          <span className="text-xs tracking-widest uppercase text-dusty font-medium">
            Resources
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <h2
            className="text-4xl md:text-5xl font-light text-dark max-w-xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Free tools &amp; resources to{" "}
            <span className="italic text-brand">support your journey</span>
          </h2>
          <a
            href="https://w48bpx2y2ic.typeform.com/to/G8yK8j8J"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-brand text-brand text-sm font-medium hover:bg-brand-muted transition-colors shrink-0"
          >
            Take the 2-Min Burnout Quiz
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Crisis Support */}
          <div className="p-8 rounded-2xl bg-dusty-light border border-dusty col-span-1 lg:col-span-2">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-dusty/20 flex items-center justify-center shrink-0">
                <Phone size={22} className="text-dusty-dark" />
              </div>
              <div>
                <h3
                  className="text-2xl font-medium text-dark mb-2"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  Crisis Support — Available 24/7
                </h3>
                <p className="text-sm text-dark/70 mb-3">
                  If you or someone you know is in crisis, please reach out immediately.
                </p>
                <a
                  href="tel:988"
                  className="inline-flex items-center gap-2 text-lg font-medium text-dusty-dark hover:text-brand transition-colors"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  988 Suicide &amp; Crisis Lifeline — Call or Text <strong>988</strong>
                </a>
              </div>
            </div>
          </div>

          {/* Mental Health Organizations */}
          <div className="p-8 rounded-2xl bg-cream border border-cream-dark">
            <div className="flex items-center gap-3 mb-6">
              <Heart size={20} className="text-brand" />
              <h3
                className="text-2xl font-medium text-dark"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Mental Health Organizations
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              {mentalHealthOrgs.map((org) => (
                <a
                  key={org.abbr}
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-sm font-semibold text-brand group-hover:text-brand-dark transition-colors">
                        {org.abbr}
                      </span>
                      <ExternalLink size={12} className="text-sage" />
                    </div>
                    <p className="text-xs text-dark/60">{org.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Recommended Apps */}
          <div className="p-8 rounded-2xl bg-mist-light border border-mist">
            <div className="flex items-center gap-3 mb-6">
              <Smartphone size={20} className="text-brand" />
              <h3
                className="text-2xl font-medium text-dark"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Recommended Apps
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              {apps.map((app) => (
                <div key={app.name} className="border-b border-mist last:border-0 pb-3 last:pb-0">
                  <p className="text-sm font-semibold text-brand mb-0.5">{app.name}</p>
                  <p className="text-xs text-dark/60">{app.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Self-Care Practices */}
          <div className="p-8 rounded-2xl bg-sage-muted border border-sage-light">
            <div className="flex items-center gap-3 mb-6">
              <Heart size={20} className="text-brand" />
              <h3
                className="text-2xl font-medium text-dark"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Self-Care Foundations
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {selfCareItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-dark/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-dusty mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Free Download */}
          <div className="p-8 rounded-2xl bg-brand text-cream flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-cream/20 flex items-center justify-center">
              <Download size={22} className="text-cream" />
            </div>
            <div>
              <h3
                className="text-2xl font-medium text-cream mb-2"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Free Download
              </h3>
              <p className="text-base font-medium text-dusty-light mb-1">
                Burnout Reflection Guide
              </p>
              <p className="text-sm text-cream/70 mb-6">
                A guided workbook to help you identify burnout patterns, understand your triggers,
                and take your first steps toward recovery — at no cost.
              </p>
              <a
                href="https://fabulous-teacher-7023.kit.com/db3a6274d6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cream text-brand text-sm font-medium hover:bg-cream-dark transition-colors"
              >
                <Download size={14} />
                Get Your Free Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
