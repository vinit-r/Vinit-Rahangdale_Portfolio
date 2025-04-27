/** @type {import('tailwindcss').Config} */
export default {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  },
  theme: {
    extend: {
      fontFamily: {
        Noople: ["Noopla", "sans-serif"],
        Courgette: ["Kaushan Script", "cursive"], 
        // Courgette: ["italic", "sans-serif"],
        MoonWalk: ["MoonWalk", "sans-serif"],
      },
      colors: {
        blackCover: "rgba(0,0,0,0.4)",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        moveUpDown: {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
      animation: {
        slideUp: "slideUp 0.5s ease-out",
        moveUpDown: "moveUpDown 3s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require('taos/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
};
