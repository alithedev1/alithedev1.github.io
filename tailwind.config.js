/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#11111a', // Updated background color
        'custom-green': '#90EE90', // Light green color
        'custom-white': '#ffffff',
      },
      fontFamily: {
        'heading': ['"DM PopCap"', 'sans-serif'],
        'body': ['"Source Code Pro"', 'monospace'],
        'custom-font': ['"Courier New"', 'monospace'],
      },
    },
  },
  plugins: [],
}
