/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        display: ["Atkinson Hyperlegible", "sans-serif"],
      },
      fontSize: {
        h1: "4.25rem",
        h1_m: "3.5rem",
        h1_s: "1.8rem",

        h3: "1.7rem",
        h3_m: "1.4rem",
        h3_s: "1.2rem",

        h2: "2.5rem",
        h3_m: "1.8rem",
        h3_s: "1.4rem",

        knap: "2rem",
        knap_m: "1.8rem",
        knap_s: "1rem",

        p: "1.3rem",
        p_m: "1rem",
        p_s: "0.9rem",
      },
      colors: {
        header: "rgba(49, 44, 55, 1)",
        background: "rgba(243, 243, 243, 1)",
        grey: "rgba(109, 109, 109, 1)",
        white: "rgba(223, 223, 223, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
