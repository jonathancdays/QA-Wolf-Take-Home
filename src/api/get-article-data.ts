import type { APIRoute } from "astro";
import fs from "fs";
import path from "path";

export const get: APIRoute = async () => {
const filePath = path.resolve("../../article-list/article.csv");

if (!fs.existsSync(filePath)) {
return new Response("CSV file not found", { status: 404 });
}

const csvContent = fs.readFileSync(filePath, "utf8");

return new Response(csvContent, {
headers: {
"Content-Type": "text/csv",
"Content-Disposition": 'attachment; filename="article.csv"',
},
});
};
