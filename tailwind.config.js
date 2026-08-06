/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#EEF0FF',
          100: '#E0E4FF',
          300: '#ABB2FF',
          400: '#7C83FF',
          500: '#5B5FEF',
          600: '#4547C9',
          700: '#3638A0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}