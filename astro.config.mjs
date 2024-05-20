import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import htmx from "astro-htmx";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [htmx(), mdx(), sitemap(), tailwind()],
  output: "server",
  adapter: netlify()
});