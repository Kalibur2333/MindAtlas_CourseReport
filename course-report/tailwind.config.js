/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',  // Ensure Tailwind scans your React files
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#8BC34A',  // Add mindatlas green color
      },
    },
  },
  plugins: [],
}

