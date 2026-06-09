import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

const faqs: { id: string; question: string; answer: ReactNode }[] = [
  {
    id: "faq-1",
    question: "Who do you work with?",
    answer:
      "Jennifer specializes in working with high-performing professional women who are experiencing anxiety, burnout, perfectionism, imposter syndrome, and major life transitions. She works with women in Georgia and Florida via telehealth.",
  },
  {
    id: "faq-2",
    question: "Do you offer telehealth sessions?",
    answer:
      "Yes! All sessions are conducted via secure telehealth, allowing you to access therapy from the comfort and privacy of your own home or office. Jennifer is licensed to provide telehealth services to residents of Georgia and Florida.",
  },
  {
    id: "faq-3",
    question: "How long is each therapy session?",
    answer:
      "Individual therapy sessions are typically 50 minutes long. Group sessions vary in length depending on the program. Sessions are held Monday through Friday by appointment.",
  },
  {
    id: "faq-4",
    question: "Do you accept insurance?",
    answer: (
      <div className="flex flex-col gap-3">
        <p>Yes — insurance is accepted for <strong className="text-dark font-medium">Georgia residents only</strong>. Jennifer is currently in-network with the following plans:</p>
        <ul className="flex flex-col gap-1.5 pl-1">
          {[
            "Carelon Behavioral Health",
            "Quest Behavioral Health",
            "Aetna (Meritain, Nippon Life Benefits, Chapman Boone, and GEHA)",
            "Anthem Blue Cross and Blue Shield of Georgia",
            "Oxford (Optum)",
            "United Healthcare (Optum)",
            "Cigna",
          ].map((plan) => (
            <li key={plan} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-dusty shrink-0 mt-1.5" />
              {plan}
            </li>
          ))}
        </ul>
        <p>Florida residents and clients not covered by the above plans are welcome as private-pay clients. FSA/HSA funds are accepted. A Good Faith Estimate is available upon request.</p>
      </div>
    ),
  },
  {
    id: "faq-5",
    question: "What can I expect from our first session?",
    answer:
      "Your first session is a collaborative intake appointment. Jennifer will ask about your background, current concerns, and goals for therapy. It's also an opportunity for you to ask questions and ensure you feel comfortable moving forward. Many clients leave the first session feeling heard and more hopeful than when they arrived.",
  },
  {
    id: "faq-6",
    question: "How do I get started?",
    answer:
      "The easiest first step is to schedule a free 15-minute consultation call. This is a no-commitment conversation to explore whether working together is the right fit. You can reach out via the contact form on this page or email jennifer directly at jennifer@anxietytherapyforwomen.com.",
  },
  {
    id: "faq-7",
    question: "Is everything I share in therapy confidential?",
    answer:
      "Yes. Confidentiality is a cornerstone of therapy. What you share in sessions remains private with very limited legal exceptions (such as imminent risk of harm). Jennifer will explain these exceptions in detail during your intake. You deserve a space where you can speak freely.",
  },
  {
    id: "faq-8",
    question: "How is therapy different from just talking to a friend?",
    answer:
      "A trusted friend offers empathy and support, which is valuable — but therapy offers something different. Jennifer brings clinical training, evidence-based tools, and an objective perspective to help you understand patterns, develop lasting coping strategies, and make meaningful, sustainable changes. You leave each session with actionable insights, not just validation.",
  },
  {
    id: "faq-9",
    question: "How long will I need to be in therapy?",
    answer:
      "The length of therapy is highly individual and depends on your goals, history, and pace of growth. Some clients find significant relief in 12–16 sessions; others benefit from longer-term support. Jennifer uses a solution-focused approach, meaning sessions are intentional and goal-oriented — not open-ended.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-dusty" />
          <span className="text-xs tracking-widest uppercase text-dusty font-medium">
            FAQ
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left column */}
          <div className="lg:col-span-1">
            <h2
              className="text-4xl md:text-5xl font-normal text-dark mb-6"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Your questions,{" "}
              <span className="italic text-brand">answered</span>
            </h2>
            <p className="text-dark/75 text-sm leading-relaxed mb-8">
              Have more questions? Jennifer is happy to answer them during your free
              15-minute consultation.
            </p>
            <a
              href="https://jennifer-walker7285.clientsecure.me/sign-in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand text-cream text-sm font-medium hover:bg-brand-dark transition-colors"
            >
              Schedule a Free Consultation
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-2">
            <Accordion className="flex flex-col gap-2">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="rounded-xl border-l-4 border-l-dusty border border-cream-dark bg-white px-6 not-last:border-b"
                >
                  <AccordionTrigger className="text-base font-medium text-dark text-left py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-sm text-dark/85 leading-relaxed pb-2">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
