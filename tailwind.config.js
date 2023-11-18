/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'headings': ['Agbalumo', 'sans-serif']
      }
    },
    screens: {
      'md': {'max': '850px'},
      'sm': {'max': '600px'},
      'lg': {'max': '1000px'}
    }
  },
  plugins: [],
}
