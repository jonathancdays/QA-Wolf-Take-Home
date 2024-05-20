import type { APIRoute } from "astro";
import { exec } from "child_process";
import fs from "fs";
import path from "path";

export const post: APIRoute = async () => {
return new Promise((resolve, reject) => {
exec("bun playwright test ../../tests/hackernews.spec.ts", (error) => {
if (error) {
console.error(`exec error: ${error}`);
return resolve(new Response("Failed to run test", { status: 500 }));
}

const filePath = path.resolve("article-list/articles.json");
const articles = JSON.parse(fs.readFileSync(filePath, "utf8"));

resolve(
new Response(JSON.stringify(articles), {
headers: {
"Content-Type": "application/json",
},
}),
);
});
});
};
