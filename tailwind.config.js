/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-blue': '#0001AE',
        'custom-grey': '#9D9D9D',
        'secondary-blue': '#f4f6ff',
        'custom-black': '#292929'
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
