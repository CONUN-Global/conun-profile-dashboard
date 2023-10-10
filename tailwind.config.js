/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT'
export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-blue': '#0001AE',
        'custom-grey': '#9D9D9D',
        'secondary-blue': '#f4f6ff',
        'custom-black': '#292929',
        'light-grey': '#dedede'
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
})
