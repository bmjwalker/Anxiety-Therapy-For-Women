import { readFileSync, writeFileSync } from 'fs';

const scraped = JSON.parse(readFileSync('scraped-posts.json', 'utf8'));

// Titles exactly as they appear in rawArchivedPosts in lib/archived-posts.ts
const archivedTitles = [
  "Why High-Performing Women Say What Others Want to Hear (And What's Really Happening Beneath the Surface)",
  `The Science of Burnout: What the Research Actually Says (And Why You're Not Just "Tired")`,
  "High-Functioning Burnout in Women: Why You're Exhausted Even If You're Still Showing Up",
  "ADHD High Performers — Why You're Not Meant to Be “Disciplined” (And Why That's Your Superpower)",
  "Why High-Performing Women Overthink (and How to Break the Cycle)",
  "Anxiety Therapy Near Me",
  "What Teachers Really Need This Year: Support, Stability, and Space to Breathe",
  "Burnout Is Costing You More Than You Thing: How to Protect Your Team and Your Bottom Line",
  "Finding Safety Within: Navigating Anxiety and Burnout in the Digital Self-Help Age",
  "The Hidden Cost of Perfectionism: How to Recognize and Reclaim Your Power",
  "Codependence in Disguise: How High-Performing Women Lose Themselves in Success, Service, and Survival",
  "How to Escape Career Stagnation and Toxic Workplaces This Summer",
  "Perfectionism & Anxiety in High-Performing Women: Signs, Solutions & Self-Compassion Strategies",
  "Thriving Through Uncertainty: How High-Performing Women Can Build Resilience in Chaotic Times",
  "Welcome to 2025: A New Year for Growth, Balance, and Mental Well-Being",
  "How to Choose the Right Health Insurance for Mental Health Coverage During Open Enrollment",
  "Create The Life You Deserve",
  "Are You Using the Right Criteria to Measure Your Self-Worth?",
  "Top 10 Benefits of a Daily Walk",
  "Burnout Recovery Tips for High-Achieving Women: 5 Ways to Start Feeling Okay Again",
  "Develop Greater Confidence With These Easy, Everyday Habits",
  "Change Your Perspective to Change Your Life",
  "How to Get Unstuck: A Therapist's Guide for High-Achieving Women in Life Transitions",
  "Are You a Highly Sensitive Person?",
  "How High-Achieving Women Can Unlock Inner Mental Strength During Stress & Burnout",
];

function normalize(t) {
  return t
    .toLowerCase()
    .replace(/['‘’]/g, "'")
    .replace(/["“”„‟]/g, '"')
    .replace(/[–—]/g, '-')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Build a map: normalizedTitle -> scraped post
const scrapedMap = new Map();
for (const post of scraped) {
  scrapedMap.set(normalize(post.title), post);
}

// Match each archived title to a scraped post
const matched = [];
const unmatched = [];

for (const title of archivedTitles) {
  const norm = normalize(title);
  let found = scrapedMap.get(norm);

  // Fuzzy fallback: try substring match
  if (!found) {
    const normWords = norm.split(' ').filter(Boolean);
    for (const [key, val] of scrapedMap.entries()) {
      const keyWords = key.split(' ').filter(Boolean);
      const overlap = normWords.filter(w => keyWords.includes(w)).length;
      if (overlap >= Math.min(normWords.length, keyWords.length) * 0.8) {
        found = val;
        console.warn(`Fuzzy match: "${title}" -> "${val.title}"`);
        break;
      }
    }
  }

  if (found) {
    matched.push({ archivedTitle: title, scraped: found });
  } else {
    unmatched.push(title);
    console.error(`NO MATCH: "${title}" (normalized: "${norm}")`);
  }
}

console.log(`\nMatched: ${matched.length}/${archivedTitles.length}`);
if (unmatched.length) {
  console.log('Unmatched:', unmatched);
  process.exit(1);
}

// Emit the content mapping for inspection
const mapping = matched.map(({ archivedTitle, scraped }) => ({
  archivedTitle,
  scrapedTitle: scraped.title,
  date: scraped.date,
  paragraphs: scraped.content.length,
  firstParagraph: scraped.content[0]?.substring(0, 80),
}));
writeFileSync('content-mapping.json', JSON.stringify(mapping, null, 2));
console.log('\nWrote content-mapping.json for review');

// --- Content cleanup ---
const SIGN_OFFS = [
  /^jennifer walker,?\s*lcsw\.?$/i,
  /^jennifer w\.?$/i,
  /^slay queen,?$/i,
  /^be well,?$/i,
  /^warm regards,?$/i,
  /^continued success,?$/i,
  /^to your continued success,?$/i,
  /^with love and authenticity,?$/i,
  /^co-dependently,?$/i,
  /^compassionately(?: curious)?,?$/i,
  /^with continued compassionate curiosity,?$/i,
  /^breaking cycles,?$/i,
  /^safe living,?$/i,
  /^—jennifer walker/i,
  /^therapist\.\s*educator\.\s*consultant\.?$/i,
];

const STALE_CTAS = [
  /^to chat\s*[-–]+\s*schedule/i,
  /^ready to start feeling more like yourself/i,
  /^let[''']s connect.*book/i,
  /^spots are limited/i,
  /^book a (?:free )?support session/i,
  /^explore more insights/i,
  /^schedule a free 15.minute chat/i,
  /^if you are a high.achieving woman who is tired of performing/i,
  /^if you[''']re a high.achieving woman who feels driven/i,
];

const BARE_RESOURCE_LINKS = [
  /^co-dependents anonymous official site$/i,
  /^the attachment project$/i,
  /^psych central$/i,
  /^how to be more present\s*[–-]\s*headspace$/i,
  /^radical acceptance\s*[–-]\s*tara brach$/i,
  /^quest behavioral health$/i,
  /^oxford \(optum\)$/i,
  /^united healthcare \(optum\)$/i,
];

function cleanContent(blocks) {
  const filtered = blocks.filter(block => {
    if (block.startsWith('## ')) return true;
    const t = block.trim();
    for (const re of [...SIGN_OFFS, ...STALE_CTAS, ...BARE_RESOURCE_LINKS]) {
      if (re.test(t)) return false;
    }
    return true;
  });

  // Strip trailing sign-off run: remove from the end while the last block
  // matches a sign-off or is a very short non-heading closer.
  const TRAILING = [
    ...SIGN_OFFS,
    /^ready to (?:take|start|chat)/i,
    /^if you(?:'re| are) ready/i,
  ];
  let end = filtered.length;
  while (end > 1) {
    const last = filtered[end - 1].trim();
    if (!last.startsWith('## ') && TRAILING.some(re => re.test(last))) {
      end--;
    } else {
      break;
    }
  }
  return filtered.slice(0, end);
}

// Build the content lookup: archivedTitle -> content[]
const contentByTitle = new Map(
  matched.map(({ archivedTitle, scraped }) => [archivedTitle, cleanContent(scraped.content)])
);

// --- Generate updated lib/archived-posts.ts ---
function escapeStr(s) {
  // Escape backticks and ${} for template literals
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function contentBlock(title) {
  const lines = contentByTitle.get(title) || [];
  const items = lines.map(l => `    \`${escapeStr(l)}\`,`).join('\n');
  return `    content: [\n${items}\n    ],`;
}

const summaries = {
  "Why High-Performing Women Say What Others Want to Hear (And What's Really Happening Beneath the Surface)": "This archived article is now hosted within the new site so the old domain can be retired without breaking access to the original content.",
  [`The Science of Burnout: What the Research Actually Says (And Why You're Not Just "Tired")`]: "A legacy article on burnout research, recovery, and why exhaustion is often more complex than simple tiredness.",
  "High-Functioning Burnout in Women: Why You're Exhausted Even If You're Still Showing Up": "A legacy article on the hidden toll of high-functioning burnout and why high achievers often feel depleted long before they admit it.",
  "ADHD High Performers — Why You're Not Meant to Be “Disciplined” (And Why That's Your Superpower)": "A legacy article exploring ADHD, productivity, and reframing discipline as a strength rather than a requirement.",
  "Why High-Performing Women Overthink (and How to Break the Cycle)": "A legacy article on rumination, perfectionism, and practical ways to interrupt the overthinking loop.",
  "Anxiety Therapy Near Me": "A legacy article focused on what to look for in therapy support when anxiety feels overwhelming and hard to manage alone.",
  "What Teachers Really Need This Year: Support, Stability, and Space to Breathe": "A legacy article exploring teacher burnout, sustainability, and the need for support in demanding work environments.",
  "Burnout Is Costing You More Than You Thing: How to Protect Your Team and Your Bottom Line": "A legacy article on burnout’s organizational impact and why protecting energy matters for performance and wellbeing.",
  "Finding Safety Within: Navigating Anxiety and Burnout in the Digital Self-Help Age": "A legacy article on finding calm and grounding in a digital world filled with constant input and comparison.",
  "The Hidden Cost of Perfectionism: How to Recognize and Reclaim Your Power": "A legacy article on perfectionism, self-worth, and how to reclaim your energy from impossible standards.",
  "Codependence in Disguise: How High-Performing Women Lose Themselves in Success, Service, and Survival": "A legacy article on the subtle patterns that keep high-achieving women over-giving, over-functioning, and disconnected from their own needs.",
  "How to Escape Career Stagnation and Toxic Workplaces This Summer": "A legacy article on burnout, career stagnation, and choosing better boundaries in work and leadership environments.",
  "Perfectionism & Anxiety in High-Performing Women: Signs, Solutions & Self-Compassion Strategies": "A legacy article on how perfectionism and anxiety show up in high-achieving women and how compassion changes the pattern.",
  "Thriving Through Uncertainty: How High-Performing Women Can Build Resilience in Chaotic Times": "A legacy article on resilience, adaptability, and building steadiness while life feels unpredictable.",
  "Welcome to 2025: A New Year for Growth, Balance, and Mental Well-Being": "A legacy article on renewal, habits, and setting an intentional foundation for the year ahead.",
  "How to Choose the Right Health Insurance for Mental Health Coverage During Open Enrollment": "A legacy article on understanding mental-health coverage when choosing insurance during open enrollment.",
  "Create The Life You Deserve": "A legacy article on reclaiming direction, self-trust, and the courage to design a more aligned life.",
  "Are You Using the Right Criteria to Measure Your Self-Worth?": "A legacy article on self-worth, identity, and changing the standards you use to evaluate yourself.",
  "Top 10 Benefits of a Daily Walk": "A legacy article on walking, nervous-system regulation, and the simple benefits of movement for mental wellbeing.",
  "Burnout Recovery Tips for High-Achieving Women: 5 Ways to Start Feeling Okay Again": "A legacy article on practical first steps to recover from burnout without pretending you are fine.",
  "Develop Greater Confidence With These Easy, Everyday Habits": "A legacy article on confidence-building habits that make self-trust feel more accessible in daily life.",
  "Change Your Perspective to Change Your Life": "A legacy article on how a shift in perspective can create real change in mindset and behavior.",
  "How to Get Unstuck: A Therapist's Guide for High-Achieving Women in Life Transitions": "A legacy article on moving from stuckness to clarity during difficult life transitions.",
  "Are You a Highly Sensitive Person?": "A legacy article on sensitivity, emotional overwhelm, and why understanding your nervous system matters.",
  "How High-Achieving Women Can Unlock Inner Mental Strength During Stress & Burnout": "A legacy article on rebuilding mental strength, resilience, and steadiness through stress and burnout.",
};

function titleLiteral(t) {
  // Use double-quoted JS string, escaping double quotes and backslashes
  return JSON.stringify(t);
}

const posts = archivedTitles.map(title => {
  const summary = summaries[title] || 'A legacy article preserved from the previous site.';
  return `  {
    title: ${titleLiteral(title)},
    slug: slugify(${titleLiteral(title)}),
    category: "Archived Insights",
    date: "Archived from previous site",
    readTime: "Article",
    excerpt: "A previous-site archive post preserved here for easy access.",
    summary: ${titleLiteral(summary)},
${contentBlock(title)}
  }`;
});

const tsOutput = `export type ArchivedPost = {
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  summary: string;
  content: string[];
};

export function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\\u0300-\\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

const rawArchivedPosts: ArchivedPost[] = [
${posts.join(',\n')}
];

export const archivedPosts: ArchivedPost[] = rawArchivedPosts;

export function getArchivedPostBySlug(slug: string) {
  return archivedPosts.find((post) => post.slug === slug);
}
`;

writeFileSync('lib/archived-posts.ts', tsOutput);
console.log('\nWrote updated lib/archived-posts.ts');
