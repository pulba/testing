/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      josefin: ["Josefin Sans Variable", "sans-serif"],
      montecarlo: ["MonteCarlo", "cursive"],
      nautigal: ["The Nautigal", "cursive"],
      poppins: ["Poppins", "sans-serif"],
      haviland: ["Mr De Haviland", "cursive"],
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    }
  },
  plugins: [],
};
