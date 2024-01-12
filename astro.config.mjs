import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
import customCodeTheme from "./src/misc/code-theme.json";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "ignore",
  integrations: [mdx()],
  markdown: {
    shikiConfig: { theme: customCodeTheme },
  },
  output: "hybrid",
  adapter: cloudflare(),
});
