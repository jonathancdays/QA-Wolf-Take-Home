import { expect, test } from "@playwright/test"; // ^1.30.0
import { postArticles } from "../utils/postArticles"; // Correct import path
import path from "path";

test("gets content of the first 10 a tags within titleline spans from Hacker News", async ({
page,
}) => {
await page.goto("https://news.ycombinator.com/news");

const locators = page.locator("span.titleline a");
const articleCount: number = await locators.count();
const articles: Array<{ title: string; url: string }> = [];

for (let i = 0; i < Math.min(articleCount, 10); i++) {
const title = await locators.nth(i).textContent();
const url = await locators.nth(i).getAttribute("href");
if (title && url) {
articles.push({ title, url });
}
}

// Insert articles into the database
for (const article of articles) {
await postArticles(article);
}

console.log("Articles have been inserted into the database");

expect(articles.length).toBe(10);
});
