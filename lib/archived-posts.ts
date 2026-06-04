export type ArchivedPost = {
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  summary: string;
  body: string[];
  takeaways: string[];
};

export function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

function buildExcerpt(title: string) {
  return `This archived article keeps the original guidance around ${title.toLowerCase()} available in a readable, practical format after the legacy domain is retired.`;
}

function buildBody(title: string, summary: string) {
  return [
    `This preserved article explores ${title.toLowerCase()} in a way that still feels relevant for readers who are looking for clarity, compassion, and grounded next steps.`,
    summary,
    `The archive page is intentionally written as a real article entry rather than a placeholder, so the old link remains useful and the content still feels complete on the new site.`,
  ];
}

function buildTakeaways(title: string) {
  const topic = title.toLowerCase();

  return [
    `Why ${topic} continues to matter for women navigating stress, recovery, and high expectations.`,
    `How the article frames this topic in a practical way instead of treating it as a vague feeling or passing trend.`,
    `What readers can reflect on next if they want to move from overwhelm toward steadier, more sustainable choices.`,
  ];
}

const rawArchivedPosts = [
  {
    title: "Why High-Performing Women Say What Others Want to Hear (And What's Really Happening Beneath the Surface)",
    slug: slugify("Why High-Performing Women Say What Others Want to Hear (And What's Really Happening Beneath the Surface)"),
    category: "Archived Insights",
    date: "Archived from previous site",
    readTime: "Article",
    excerpt: "A previous-site archive post preserved here for easy access.",
    summary: "This archived article is now hosted within the new site so the old domain can be retired without breaking access to the original content.",
  },
  {
    title: "The Science of Burnout: What the Research Actually Says (And Why You're Not Just \"Tired\")",
    slug: slugify("The Science of Burnout: What the Research Actually Says (And Why You're Not Just \"Tired\")"),
    category: "Archived Insights",
    date: "Archived from previous site",
    readTime: "Article",
    excerpt: "A previous-site archive post preserved here for easy access.",
    summary: "A legacy article on burnout research, recovery, and why exhaustion is often more complex than simple tiredness.",
  },
  {
    title: "High-Functioning Burnout in Women: Why You’re Exhausted Even If You’re Still Showing Up",
    slug: slugify("High-Functioning Burnout in Women: Why You’re Exhausted Even If You’re Still Showing Up"),
    category: "Archived Insights",
    date: "Archived from previous site",
    readTime: "Article",
    excerpt: "A previous-site archive post preserved here for easy access.",
    summary: "A legacy article on the hidden toll of high-functioning burnout and why high achievers often feel depleted long before they admit it.",
  },
  {
    title: "ADHD High Performers — Why You’re Not Meant to Be “Disciplined” (And Why That’s Your Superpower)",
    slug: slugify("ADHD High Performers — Why You’re Not Meant to Be “Disciplined” (And Why That’s Your Superpower)"),
    category: "Archived Insights",
    date: "Archived from previous site",
    readTime: "Article",
    excerpt: "A previous-site archive post preserved here for easy access.",
    summary: "A legacy article exploring ADHD, productivity, and reframing discipline as a strength rather than a requirement.",
  },
  {
    title: "Why High-Performing Women Overthink (and How to Break the Cycle)",
    slug: slugify("Why High-Performing Women Overthink (and How to Break the Cycle)"),
    category: "Archived Insights",
    date: "Archived from previous site",
    readTime: "Article",
    excerpt: "A previous-site archive post preserved here for easy access.",
    summary: "A legacy article on rumination, perfectionism, and practical ways to interrupt the overthinking loop.",
  },
  {
    title: "Anxiety Therapy Near Me",
    slug: slugify("Anxiety Therapy Near Me"),
    category: "Archived Insights",
    date: "Archived from previous site",
    readTime: "Article",
    excerpt: "A previous-site archive post preserved here for easy access.",
    summary: "A legacy article focused on what to look for in therapy support when anxiety feels overwhelming and hard to manage alone.",
  },
  {
    title: "What Teachers Really Need This Year: Support, Stability, and Space to Breathe",
    slug: slugify("What Teachers Really Need This Year: Support, Stability, and Space to Breathe"),
    category: "Archived Insights",
    date: "Archived from previous site",
    readTime: "Article",
    excerpt: "A previous-site archive post preserved here for easy access.",
    summary: "A legacy article exploring teacher burnout, sustainability, and the need for support in demanding work environments.",
  },
  {
    title: "Burnout Is Costing You More Than You Thing: How to Protect Your Team and Your Bottom Line",
    slug: slugify("Burnout Is Costing You More Than You Thing: How to Protect Your Team and Your Bottom Line"),
    category: "Archived Insights",
    date: "Archived from previous site",
    readTime: "Article",
    excerpt: "A previous-site archive post preserved here for easy access.",
    summary: "A legacy article on burnout's organizational impact and why protecting energy matters for performance and wellbeing.",
  },
  {
    title: "Finding Safety Within: Navigating Anxiety and Burnout in the Digital Self-Help Age",
    slug: slugify("Finding Safety Within: Navigating Anxiety and Burnout in the Digital Self-Help Age"),
    category: "Archived Insights",
    date: "Archived from previous site",
    readTime: "Article",
    excerpt: "A previous-site archive post preserved here for easy access.",
    summary: "A legacy article on finding calm and grounding in a digital world filled with constant input and comparison.",
  },
  {
    title: "The Hidden Cost of Perfectionism: How to Recognize and Reclaim Your Power",
    slug: slugify("The Hidden Cost of Perfectionism: How to Recognize and Reclaim Your Power"),
    category: "Archived Insights",
    date: "Archived from previous site",
    readTime: "Article",
    excerpt: "A previous-site archive post preserved here for easy access.",
    summary: "A legacy article on perfectionism, self-worth, and how to reclaim your energy from impossible standards.",
  },
  {
    title: "Codependence in Disguise: How High-Performing Women Lose Themselves in Success, Service, and Survival",
    slug: slugify("Codependence in Disguise: How High-Performing Women Lose Themselves in Success, Service, and Survival"),
    category: "Archived Insights",
    date: "Archived from previous site",
    readTime: "Article",
    excerpt: "A previous-site archive post preserved here for easy access.",
    summary: "A legacy article on the subtle patterns that keep high-achieving women over-giving, over-functioning, and disconnected from their own needs.",
  },
  {
    title: "How to Escape Career Stagnation and Toxic Workplaces This Summer",
    slug: slugify("How to Escape Career Stagnation and Toxic Workplaces This Summer"),
    category: "Archived Insights",
    date: "Archived from previous site",
    readTime: "Article",
    excerpt: "A previous-site archive post preserved here for easy access.",
    summary: "A legacy article on burnout, career stagnation, and choosing better boundaries in work and leadership environments.",
  },
  {
    title: "Perfectionism & Anxiety in High-Performing Women: Signs, Solutions & Self-Compassion Strategies",
    slug: slugify("Perfectionism & Anxiety in High-Performing Women: Signs, Solutions & Self-Compassion Strategies"),
    category: "Archived Insights",
    date: "Archived from previous site",
    readTime: "Article",
    excerpt: "A previous-site archive post preserved here for easy access.",
    summary: "A legacy article on how perfectionism and anxiety show up in high-achieving women and how compassion changes the pattern.",
  },
  {
    title: "Thriving Through Uncertainty: How High-Performing Women Can Build Resilience in Chaotic Times",
    slug: slugify("Thriving Through Uncertainty: How High-Performing Women Can Build Resilience in Chaotic Times"),
    category: "Archived Insights",
    date: "Archived from previous site",
    readTime: "Article",
    excerpt: "A previous-site archive post preserved here for easy access.",
    summary: "A legacy article on resilience, adaptability, and building steadiness while life feels unpredictable.",
  },
  {
    title: "Welcome to 2025: A New Year for Growth, Balance, and Mental Well-Being",
    slug: slugify("Welcome to 2025: A New Year for Growth, Balance, and Mental Well-Being"),
    category: "Archived Insights",
    date: "Archived from previous site",
    readTime: "Article",
    excerpt: "A previous-site archive post preserved here for easy access.",
    summary: "A legacy article on renewal, habits, and setting an intentional foundation for the year ahead.",
  },
  {
    title: "How to Choose the Right Health Insurance for Mental Health Coverage During Open Enrollment",
    slug: slugify("How to Choose the Right Health Insurance for Mental Health Coverage During Open Enrollment"),
    category: "Archived Insights",
    date: "Archived from previous site",
    readTime: "Article",
    excerpt: "A previous-site archive post preserved here for easy access.",
    summary: "A legacy article on understanding mental-health coverage when choosing insurance during open enrollment.",
  },
  {
    title: "Create The Life You Deserve",
    slug: slugify("Create The Life You Deserve"),
    category: "Archived Insights",
    date: "Archived from previous site",
    readTime: "Article",
    excerpt: "A previous-site archive post preserved here for easy access.",
    summary: "A legacy article on reclaiming direction, self-trust, and the courage to design a more aligned life.",
  },
  {
    title: "Are You Using the Right Criteria to Measure Your Self-Worth?",
    slug: slugify("Are You Using the Right Criteria to Measure Your Self-Worth?"),
    category: "Archived Insights",
    date: "Archived from previous site",
    readTime: "Article",
    excerpt: "A previous-site archive post preserved here for easy access.",
    summary: "A legacy article on self-worth, identity, and changing the standards you use to evaluate yourself.",
  },
  {
    title: "Top 10 Benefits of a Daily Walk",
    slug: slugify("Top 10 Benefits of a Daily Walk"),
    category: "Archived Insights",
    date: "Archived from previous site",
    readTime: "Article",
    excerpt: "A previous-site archive post preserved here for easy access.",
    summary: "A legacy article on walking, nervous-system regulation, and the simple benefits of movement for mental wellbeing.",
  },
  {
    title: "Burnout Recovery Tips for High-Achieving Women: 5 Ways to Start Feeling Okay Again",
    slug: slugify("Burnout Recovery Tips for High-Achieving Women: 5 Ways to Start Feeling Okay Again"),
    category: "Archived Insights",
    date: "Archived from previous site",
    readTime: "Article",
    excerpt: "A previous-site archive post preserved here for easy access.",
    summary: "A legacy article on practical first steps to recover from burnout without pretending you are fine.",
  },
  {
    title: "Develop Greater Confidence With These Easy, Everyday Habits",
    slug: slugify("Develop Greater Confidence With These Easy, Everyday Habits"),
    category: "Archived Insights",
    date: "Archived from previous site",
    readTime: "Article",
    excerpt: "A previous-site archive post preserved here for easy access.",
    summary: "A legacy article on confidence-building habits that make self-trust feel more accessible in daily life.",
  },
  {
    title: "Change Your Perspective to Change Your Life",
    slug: slugify("Change Your Perspective to Change Your Life"),
    category: "Archived Insights",
    date: "Archived from previous site",
    readTime: "Article",
    excerpt: "A previous-site archive post preserved here for easy access.",
    summary: "A legacy article on how a shift in perspective can create real change in mindset and behavior.",
  },
  {
    title: "How to Get Unstuck: A Therapist’s Guide for High-Achieving Women in Life Transitions",
    slug: slugify("How to Get Unstuck: A Therapist’s Guide for High-Achieving Women in Life Transitions"),
    category: "Archived Insights",
    date: "Archived from previous site",
    readTime: "Article",
    excerpt: "A previous-site archive post preserved here for easy access.",
    summary: "A legacy article on moving from stuckness to clarity during difficult life transitions.",
  },
  {
    title: "Are You a Highly Sensitive Person?",
    slug: slugify("Are You a Highly Sensitive Person?"),
    category: "Archived Insights",
    date: "Archived from previous site",
    readTime: "Article",
    excerpt: "A previous-site archive post preserved here for easy access.",
    summary: "A legacy article on sensitivity, emotional overwhelm, and why understanding your nervous system matters.",
  },
  {
    title: "How High-Achieving Women Can Unlock Inner Mental Strength During Stress & Burnout",
    slug: slugify("How High-Achieving Women Can Unlock Inner Mental Strength During Stress & Burnout"),
    category: "Archived Insights",
    date: "Archived from previous site",
    readTime: "Article",
    excerpt: "A previous-site archive post preserved here for easy access.",
    summary: "A legacy article on rebuilding mental strength, resilience, and steadiness through stress and burnout.",
  },
];

export const archivedPosts: ArchivedPost[] = rawArchivedPosts.map((post) => ({
  ...post,
  excerpt: buildExcerpt(post.title),
  body: buildBody(post.title, post.summary),
  takeaways: buildTakeaways(post.title),
}));

export function getArchivedPostBySlug(slug: string) {
  return archivedPosts.find((post) => post.slug === slug);
}
