import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://odontolevek.com.br",
  output: "static",
  integrations: [react(), sitemap()],
});
