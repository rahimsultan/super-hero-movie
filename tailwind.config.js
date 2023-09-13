/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'body-img': "url('https://i.ibb.co/JB1y0X5/4690.jpg')",
      }
    },
  },
  plugins: [],
}
