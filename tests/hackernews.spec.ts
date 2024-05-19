import { expect, test } from "@playwright/test"; // ^1.30.0
import fs from "fs";
import path from "path";

test("gets content of the first 10 a tags within titleline spans from Hacker News", async ({
page,
}) => {
await page.goto("https://news.ycombinator.com/news");

const locators = page.locator("span.titleline a");
const articleCount: number = await locators.count();
const articleContent: Array<any> = [];

for (let i = 0; i < Math.min(articleCount, 10); i++) {
const textContent = await locators.nth(i).textContent();
articleContent.push(textContent);
}

const __dirname: string = "article-list";
const dirPath: string = path.resolve(__dirname, "../article-list");
const filePath: string = path.join(dirPath, "article.csv");
const csvContent: string = articleContent
.map((articleContent) => `"${articleContent}"`)
.join("\n");

if (!fs.existsSync(dirPath)) {
fs.mkdirSync(dirPath, { recursive: true });
}

fs.writeFileSync(filePath, csvContent, "utf8");
console.log(`Data has been written to ${filePath}`);

expect(articleContent.length).toBe(10);
});
