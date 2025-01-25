import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import astroBreakpoints from "astro-devtool-breakpoints";
import basicSsl from "@vitejs/plugin-basic-ssl";
import icon from "astro-icon";
import react from "@astrojs/react";
import storyblok from "@storyblok/astro";
import tailwind from "@astrojs/tailwind";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://www.ryanfurrer.com",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
      langs: [
        "astro",
        "css",
        "docker",
        "dockerfile",
        "elixer",
        "gql",
        "graphql",
        "html",
        "javascript",
        "js",
        "json",
        "jsx",
        "less",
        "liquid",
        "lua",
        "markdown",
        "md",
        "nginx",
        "php",
        "postcss",
        "powershell",
        "ps",
        "py",
        "python",
        "rb",
        "rs",
        "ruby",
        "rust",
        "sass",
        "scss",
        "sql",
        "svelte",
        "swift",
        "toml",
        "ts",
        "tsx",
        "typescript",
        "vue-html",
        "vue",
        "vue",
        "yaml",
        "yml",
      ],
    },
  },
  vite: {
    plugins: [basicSsl()],
    server: {
      open: "/src/pages/index.astro",
      https: true,
    },
  },
  integrations: [
    astroBreakpoints(),
    icon(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    storyblok({
      accessToken: "OvG6RltzzmQpZ8WXKtSeEwtt",
      components: {
        // Add your components here
        blogPost: "storyblok/BlogPost",
        blogPostList: "storyblok/BlogPostList",
        blogPostListFeatured: "storyblok/BlogPostListFeatured",
        page: "storyblok/Page",
      },
      apiOptions: {
        // Choose your Storyblok space region
        region: "us", // optional,  or 'eu' (default)
      },
    }),
  ],
});
