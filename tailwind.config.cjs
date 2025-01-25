const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      // sans: ["Inter", "Arial", "sans-serif"],
      sans: ["Poppins", "Arial", "sans-serif"],
      serif: ["Noto Serif", "Georgia", "Times New Roman", "Times", "serif"],
    },
    fontSize: {
      xs: "clamp(0.6944rem, 0.6762rem + 0.0456vi, 0.72rem)",
      sm: "clamp(0.8333rem, 0.7857rem + 0.119vi, 0.9rem)",
      base: "clamp(1rem, 0.9107rem + 0.2232vi, 1.125rem)",
      lg: "clamp(1.2rem, 1.0527rem + 0.3683vi, 1.4063rem)",
      xl: "clamp(1.44rem, 1.213rem + 0.5675vi, 1.7578rem)",
      "2xl": "clamp(1.728rem, 1.3928rem + 0.838vi, 2.1973rem)",
      "3xl": "clamp(2.0736rem, 1.5929rem + 1.2018vi, 2.7466rem)",
      "4xl": "clamp(2.4883rem, 1.8134rem + 1.6873vi, 3.4332rem)",
      "5xl": "clamp(2.986rem, 2.0534rem + 2.3313vi, 4.2915rem)",
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animated"),
  ],
};
