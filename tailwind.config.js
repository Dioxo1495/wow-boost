/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./docs/.vitepress/**/*.{html,js,md,vue}",
    "./docs/**/*.{html,js,md,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
