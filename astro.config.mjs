import { defineConfig } from "astro/config";
import customCodeTheme from "./src/misc/code-theme.json";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "ignore",
  integrations: [mdx()],
  markdown: {
    shikiConfig: { theme: customCodeTheme },
  },
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    format: "file",
  },
});
