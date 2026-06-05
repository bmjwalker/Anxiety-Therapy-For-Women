import * as cheerio from 'cheerio';

const BASE_URL = 'https://anxietytherapyforwomen.com';

// Inspect the blog index page structure to find post links
const res = await fetch(`${BASE_URL}/blog`);
const html = await res.text();
const $ = cheerio.load(html);

console.log('--- Blog index page structure ---');
console.log('Looking for blog post cards/listings...');

// Look for elements that contain both a title and a link
const articleSelectors = ['.blog-post', '.post-card', '.post-item', '[class*="blog"]', 'article', '.col-sm-12', '.post-listing'];
for (const sel of articleSelectors) {
  const els = $(sel);
  if (els.length) {
    console.log(`\nFound ${els.length} elements matching: ${sel}`);
    els.slice(0, 2).each((i, el) => {
      const text = $(el).text().trim().substring(0, 100);
      const cls = $(el).attr('class') || '';
      console.log(`  [${i}] class="${cls}" text="${text}"`);
    });
  }
}

console.log('\n\n--- Looking at .app-wrapper ---');
const app = $('.app-wrapper').first();
console.log($.html(app).substring(0, 2000));

console.log('\n\n--- Full links with text content ---');
$('a[href]').each((_, el) => {
  const href = $(el).attr('href') || '';
  const text = $(el).text().trim();
  // Only show links that look like blog posts (long slugs, has text)
  if (href.startsWith('/') && href.length > 10 && !href.startsWith('/blog') && !href.includes('#') && text.length > 10) {
    console.log(`  href="${href}" text="${text.substring(0, 60)}"`);
  }
});
