/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontsize: {
        'h1': '2.5rem',  // Customize as you like
        'h2': '2rem',    // Customize as you like
      }
    },
  },
  plugins: [],
}

