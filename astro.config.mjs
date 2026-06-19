// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages（プロジェクトサイト）向け設定。
// 公開URL: https://sotaro0000.github.io/portfolio/
export default defineConfig({
  site: "https://sotaro0000.github.io",
  base: "/portfolio",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
});
