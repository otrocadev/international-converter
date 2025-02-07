/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkblue: '#021d40',
        navyblue: '#1d4571',
        midblue: '#2a537e',
        slategray: '#92a8be',
        softgray: '#d9e2e8',
        lightgray: '#f0f4f8',
      },
    },
  },
  plugins: [],
}
