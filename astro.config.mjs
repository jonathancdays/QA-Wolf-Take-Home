import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import htmx from "astro-htmx";

// https://astro.build/config
export default defineConfig({
site: "https://example.com",
integrations: [htmx(), mdx(), sitemap(), tailwind()],
output: "server",
});
