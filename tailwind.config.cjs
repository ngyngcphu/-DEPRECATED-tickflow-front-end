/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      'archivo': ['Archivo', 'sans-serif'],
    },
    fontSize: {
      sm: ['1rem', {
        lineHeight: '1.25rem',
      }],
      lg: ['1.125rem', {
        lineHeight: '1.75rem'
      }],
      xl: ['1.25rem', {
        lineHeight: '1.75rem'
      }],
      '2xl': ['1.5rem', {
        lineHeight: '2rem'
      }],
      '3xl': ['1.875rem', {
        lineHeight: '2.25rem'
      }]
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
