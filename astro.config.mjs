// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

const isDev = process.env.NODE_ENV === "development";
const isPreview = process.argv.includes("preview");
const isGHPages = process.env.GITHUB_ACTIONS === "true"; // Автоопределение GitHub Actions

// https://astro.build/config
export default defineConfig({
    site: "https://web22des.github.io",
    base: isDev || isPreview || !isGHPages ? "/" : "/astro-template_v-02/",
    trailingSlash: "always",
    output: "static", // Явно указываем статический режим
    integrations: [mdx(), sitemap()],
});
