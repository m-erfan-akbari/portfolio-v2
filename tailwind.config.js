/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xl: { max: "1200px" },
      lg: { max: "979px" },
      md: { max: "768px" },
      sm: { max: "480px" },
      portrait: {
        raw: "(orientation: portrait)",
      },
      landscape: {
        raw: "(orientation: landscape)",
      },
    },
  },
  plugins: [],
};
