/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        'primary': '#4D4D4D',
        'secondary': '#4CAF4F',
        'ash': '#717171',
        'ashTwo': '#18191F',
        'shad': '0px 2px 4px 0px rgba(171, 190, 209, 0.20)',
        'shad2': '0px 8px 16px 0px rgba(171, 190, 209, 0.40)'
      },
      maxWidth: {
        'container': '1144px',
      },
    },
  },
  plugins: [],
}

