/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#DC2626',
          'red-dark': '#991B1B',
          pink: '#F87171',
        },
      },
      backgroundImage: {
        'gradient-red-pink': 'linear-gradient(180deg, #DC2626 0%, #F87171 50%, #DC2626 100%)',
      },
    },
  },
  plugins: [],
}
