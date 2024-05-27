import { expect, test } from "@playwright/test";
import fs from "fs";
import path from "path";

test("gets content and URLs of the first 10 a tags within titleline spans from Hacker News", async ({
  page,
}) => {
  await page.goto("https://news.ycombinator.com/news");

  const locators = page.locator("span.titleline a");
  const articleCount: number = await locators.count();
  const articles: Array<{ title: string | null; url: string | null }> = [];
  const articleContent: Array<any> = [];

  for (let i = 0; i < Math.min(articleCount, 10); i++) {
    const title = await locators.nth(i).textContent();
    const url = await locators.nth(i).getAttribute("href");
    const textContent = await locators.nth(i).textContent();

    articles.push({ title, url });
    articleContent.push(textContent);
  }

  const __dirname: string = "article-list";
  const dirPath: string = path.resolve(__dirname, "../article-list");

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const jsonFilePath: string = path.join(dirPath, "articles.json");
  fs.writeFileSync(jsonFilePath, JSON.stringify(articles, null, 2), "utf8");
  console.log(`JSON data has been written to ${jsonFilePath}`);

  const csvFilePath: string = path.join(dirPath, "article.csv");
  const csvContent: string = articleContent
    .map((content) => `"${content}"`)
    .join("\n");
  fs.writeFileSync(csvFilePath, csvContent, "utf8");
  console.log(`CSV data has been written to ${csvFilePath}`);

  expect(articles.length).toBe(10);
  expect(articleContent.length).toBe(10);
});
