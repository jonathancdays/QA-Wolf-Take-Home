import { expect, test } from "@playwright/test"; // ^1.30.0
import fs from "fs";
import path from "path";

test("gets content and URLs of the first 10 a tags within titleline spans from Hacker News", async ({
page,
}) => {
await page.goto("https://news.ycombinator.com/news");

const locators = page.locator("span.titleline a");
const articleCount: number = await locators.count();
const articles: Array<{ title: string | null; url: string | null }> = [];

for (let i = 0; i < Math.min(articleCount, 10); i++) {
const title = await locators.nth(i).textContent();
const url = await locators.nth(i).getAttribute("href");
articles.push({ title, url });
}

const __dirname: string = "article-list";
const dirPath: string = path.resolve(__dirname, "../article-list");
const filePath: string = path.join(dirPath, "articles.json");

if (!fs.existsSync(dirPath)) {
fs.mkdirSync(dirPath, { recursive: true });
}

fs.writeFileSync(filePath, JSON.stringify(articles, null, 2), "utf8");
console.log(`Data has been written to ${filePath}`);

expect(articles.length).toBe(10);
});
