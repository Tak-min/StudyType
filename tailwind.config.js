/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'Hiragino Sans',
          'Yu Gothic',
          'Meiryo',
          'sans-serif',
        ],
      },
      boxShadow: {
        glow: '0 24px 80px rgba(31, 41, 55, 0.14)',
        card: '0 18px 55px rgba(15, 23, 42, 0.13)',
      },
    },
  },
  plugins: [],
}
