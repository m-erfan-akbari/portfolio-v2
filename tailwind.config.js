/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xl: { max: '1200px' },
      lg: { max: '979px' },
      md: { max: '768px' },
      sm: { max: '480px' },
      portrait: {
        raw: '(orientation: portrait)',
      },
      landscape: {
        raw: '(orientation: landscape)',
      },
    },
    extend: {
      keyframes: {
        bounceArrow: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0) rotate(-45deg)',
          },
          '40%': { transform: 'translateY(10px) rotate(-45deg)' },
          '60%': { transform: 'translateY(5px) rotate(-45deg)' },
        },
        fadeText: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        bounce: 'bounceArrow 2s infinite',
        fade: 'fadeText 2s infinite',
      },
    },
  },
  plugins: [],
}
