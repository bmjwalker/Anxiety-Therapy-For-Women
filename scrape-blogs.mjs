import * as cheerio from 'cheerio';
import { writeFileSync } from 'fs';

const BASE_URL = 'https://anxietytherapyforwomen.com';
const TOTAL_PAGES = 7;

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function fetchHtml(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

async function getPostLinksFromPage(pageNum) {
  const url = pageNum === 1 ? `${BASE_URL}/blog` : `${BASE_URL}/blog?page=${pageNum}`;
  console.log(`Fetching blog index page ${pageNum}: ${url}`);
  const html = await fetchHtml(url);
  const $ = cheerio.load(html);

  const links = new Set();
  // Each blog post is wrapped in an <article> element; get its first link
  $('article').each((_, el) => {
    const href = $(el).find('a[href]').first().attr('href');
    if (href && href.startsWith('/') && !href.startsWith('/blog')) {
      links.add(href);
    }
  });
  return [...links];
}

function normalizeTitle(t) {
  return t
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[“”„‟]/g, '"')
    .replace(/[–—]/g, '-')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

async function scrapePost(path) {
  const url = `${BASE_URL}${path}`;
  console.log(`  Scraping: ${url}`);
  const html = await fetchHtml(url);
  const $ = cheerio.load(html);

  const title = $('h1.page-title').first().text().trim()
    || $('h1').first().text().trim();

  const date = $('.post-date').first().text().replace('Posted:', '').trim();

  // Extract paragraphs and headings from the article body
  const content = [];
  $('.default-page-content').find('p, h2, h3').each((_, el) => {
    const tag = el.tagName.toLowerCase();
    const text = $(el).text().trim();
    if (!text) return;
    // Skip short boilerplate lines
    if (text.length < 20 && !text.includes(' ')) return;
    if (tag === 'h2' || tag === 'h3') {
      content.push(`## ${text}`);
    } else {
      content.push(text);
    }
  });

  return { title, date, path, content };
}

async function main() {
  // 1. Collect all post links across all pages
  const allLinks = new Set();
  for (let page = 1; page <= TOTAL_PAGES; page++) {
    try {
      const links = await getPostLinksFromPage(page);
      console.log(`  Found ${links.length} posts on page ${page}`);
      links.forEach(l => allLinks.add(l));
      await sleep(600);
    } catch (e) {
      console.error(`  Error fetching page ${page}:`, e.message);
    }
  }

  console.log(`\nTotal unique post paths: ${allLinks.size}`);

  // 2. Scrape each post
  const posts = [];
  for (const path of allLinks) {
    try {
      const post = await scrapePost(path);
      posts.push(post);
      await sleep(600);
    } catch (e) {
      console.error(`  Failed to scrape ${path}:`, e.message);
    }
  }

  // 3. Write results
  writeFileSync('scraped-posts.json', JSON.stringify(posts, null, 2));
  console.log(`\nWrote ${posts.length} posts to scraped-posts.json`);

  // 4. Print summary
  console.log('\n=== SUMMARY ===');
  for (const p of posts) {
    console.log(`[${p.content.length} paragraphs] ${p.title}`);
  }
}

main().catch(console.error);
