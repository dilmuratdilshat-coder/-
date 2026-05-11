/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FFFFF0',
        champagne: '#F7E7CE',
        'champagne-light': '#FBF1E0',
        'champagne-dark': '#D4A843',
        gold: {
          50: '#FDF8E8',
          100: '#F7E7CE',
          200: '#E8D5A3',
          300: '#D4B96A',
          400: '#C9A84C',
          500: '#B8941E',
          600: '#9A7B18',
          700: '#7C6213',
          800: '#5E4A0E',
          900: '#40320A',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#A3A3A3',
          400: '#737373',
          500: '#525252',
          600: '#3D3D3D',
          700: '#2E2E2E',
          800: '#1F1F1F',
          900: '#171717',
        },
        beige: {
          50: '#FDFCFA',
          100: '#FAF7F2',
          200: '#F5EFE5',
          300: '#EDE4D3',
          400: '#DDD0B8',
          500: '#C9B896',
          600: '#A89570',
          700: '#8A7555',
          800: '#6B5A42',
          900: '#4D4030',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
