/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      josefin: ["Josefin Sans Variable", "sans-serif"],
      montecarlo: ["MonteCarlo", "cursive"],
      nautigal: ["The Nautigal", "cursive"],
      poppins: ["Poppins", "sans-serif"],
      haviland: ["Mr De Haviland", "cursive"],
      great: ["Great Vibes", "cursive"],
      pacifico: ["Pacifico", "cursive"],
      dyna: ["Dynalight", "cursive"],
      alex: ["Alex Brush", "cursive"],
    },
    extend: {
      animation: {
        'zoomin': 'zoomin 3s linear',
        'zoomout': 'zoomout 4s linear',
        'fadeleft': 'fadeleft 2s linear',
        'faderight': 'faderight 2s linear',
        'fadeup': 'fadeup 2s linear',
        'fadedown': 'fadedown 2s linear',
      },
      keyframes: {
        zoomin: {
          '0%': { transform: 'scale(.5)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        zoomout: {
          '0%': { transform: 'scale(1.5)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        faderight: {
          '0%': { transform: 'translateX(-150px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeleft: {
          '0%': { transform: 'translateX(150px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeup: {
          '0%': { transform: 'translateY(150px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadedown: {
          '0%': { transform: 'translateY(-150px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        }
      }
    },
  },
  
  plugins: [
    plugin(function ({ addVariant }) {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant('current', '&.active')
    })
  ]
};
