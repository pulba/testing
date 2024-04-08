/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

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
  
  plugins: [
    plugin(function ({ addVariant }) {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant('current', '&.active')
    })
  ]
};
