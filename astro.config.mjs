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
  output: "hybrid",
});
