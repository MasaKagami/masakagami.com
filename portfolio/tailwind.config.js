/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths to match your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Use 'Inter' as your default sans font
        roboto: ['Roboto', 'sans-serif'], // Add Roboto as another option
        charm: ['charm', 'sans-serif'], // Add your custom font
      },
    },
  },
  plugins: [require("daisyui")],
};

