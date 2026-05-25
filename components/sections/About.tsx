import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-white section-padding">
      <div className="section-container">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-dusty" />
          <span className="text-xs tracking-widest uppercase text-dusty font-medium">
            About
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Headshot (sticky so it stays visible while reading) */}
          <div className="relative lg:sticky lg:top-28">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <Image
                src="/headshot.jpg"
                alt="Jennifer Walker, LCSW"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-brand/20 to-transparent" />
            </div>

            {/* Floating quote card */}
            <div className="absolute -bottom-6 -right-4 lg:-right-10 bg-white rounded-xl shadow-lg p-5 max-w-xs hidden sm:block">
              <p
                className="text-sm font-medium text-brand mb-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                &ldquo;Compassionate curiosity<br />is the path to change.&rdquo;
              </p>
              <p className="text-xs text-sage">— Jennifer Walker, LCSW</p>
            </div>
          </div>

          {/* Right — Bio content */}
          <div className="lg:pt-4">
            <h2
              className="text-4xl md:text-5xl font-light text-dark mb-2"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Jennifer Walker,{" "}
              <span className="italic text-brand">LCSW</span>
            </h2>
            <p className="text-base text-dusty font-medium mb-6 tracking-wide">
              The Sassy Mixed Therapist — Transition Strategist &amp; Educator
            </p>

            {/* My Journey */}
            <h3
              className="text-2xl md:text-3xl font-light text-dark mb-6"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              My <span className="italic text-brand">Journey</span>
            </h3>

            <div className="space-y-5 text-dark/70 text-base leading-relaxed">
              <p>
                Finding the right therapist is important yet can feel intimidating. I remember my
                first time picking a therapist — I was like: <em>"Where do I even start? Will they
                understand me? What if it&rsquo;s awkward? What if I don&rsquo;t like them?"</em> The process can
                feel overwhelming, especially when you&rsquo;re already navigating challenges that brought
                you to therapy in the first place. It&rsquo;s a vulnerable step, and it takes courage to
                explore this path.
              </p>

              <p>
                As a biracial woman, I&rsquo;ve navigated the intricate paths of personal identity and
                growth, shaped by experiences of belonging to multiple worlds. This perspective gives
                me a unique lens to support women in interracial relationships and those who have grown
                up as the minority in their community. While these experiences inform my work, my focus
                is on connecting with women of all backgrounds, particularly high-performing professional
                women navigating the complexities of life transitions, anxiety, identity, and self-worth.
              </p>

              <p>
                With over 20 years of diverse experience across K–12 and higher education, community
                mental health, private practice, non-profits, and corporate wellness, I bring a broad
                understanding of the unique challenges women face in different environments. My approach
                is tailored to support women grappling with toxic work or relationship dynamics, striving
                to find balance, and seeking to reclaim their confidence and sense of self.
              </p>

              <p>
                I&rsquo;m committed to creating a safe, confidential, non-judgmental space where women can
                feel seen and heard.
              </p>

              <p>
                As a successful woman, it&rsquo;s often hard to be vulnerable, but I am here to support you.
                I welcome honesty, humor, and direct communication while maintaining a compassionate
                atmosphere. My goal is to empower women to reach their full potential and navigate
                life&rsquo;s transitions with confidence.
              </p>

              <p>
                Women working with me often appreciate not only the progress made during our sessions
                but also the practical tools they gain to continue their self-discovery and growth
                between sessions.
              </p>

              <p>
                If you&rsquo;re ready to explore this journey together, I invite you to schedule a free
                15-minute consultation to see if we&rsquo;re a good fit.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="pull-quote">
              &ldquo;Compassionate curiosity is the path to change.&rdquo;
            </blockquote>

            {/* CTA */}
            <a
              href="https://jennifer-walker7285.clientsecure.me/sign-in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand text-cream text-sm font-medium hover:bg-brand-dark transition-colors duration-200"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
