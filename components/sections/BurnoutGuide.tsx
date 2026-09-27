import { Download } from "lucide-react";

export const BURNOUT_GUIDE_URL = "https://fabulous-teacher-7023.kit.com/db3a6274d6";

// Shared Burnout Reflection Guide content (icon, heading, description, button).
// Each page supplies its own outer container: a card on the homepage,
// a full-width section on /resources.
export default function BurnoutGuideContent({
  headingLevel = "h3",
  heading = "Free Download",
  showSubtitle = true,
}: {
  headingLevel?: "h2" | "h3";
  heading?: string;
  showSubtitle?: boolean;
}) {
  const Heading = headingLevel;

  return (
    <>
      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
        <Download size={22} className="text-white" />
      </div>
      <div>
        <Heading
          className={`text-2xl font-medium text-white ${showSubtitle ? "mb-1" : "mb-3"}`}
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          {heading}
        </Heading>
        {showSubtitle && (
          <p className="text-base font-medium mb-3" style={{ color: "#C4897B" }}>
            Burnout Reflection Guide
          </p>
        )}
        <p className="text-sm text-white/85 mb-6 leading-relaxed">
          A guided workbook to help you identify burnout patterns, understand your triggers,
          and take your first steps toward recovery — at no cost.
        </p>
        <a
          href={BURNOUT_GUIDE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors hover:bg-white/90"
          style={{ backgroundColor: "#FFFFFF", color: "#2D5F61" }}
        >
          <Download size={14} />
          Get Your Free Guide
        </a>
      </div>
    </>
  );
}
