/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f6f7f9',
          100: '#eceff3',
          200: '#d5dbe3',
          300: '#aeb9c7',
          400: '#7f8ea4',
          500: '#5d6e87',
          600: '#485669',
          700: '#3a4655',
          800: '#333d49',
          900: '#1f2630',
          950: '#141921',
        },
        accent: {
          50: '#f0f7ff',
          100: '#dcecff',
          200: '#bedcff',
          300: '#8ec4ff',
          400: '#599fff',
          500: '#347bff',
          600: '#1d5cf5',
          700: '#1547e1',
          800: '#1739b6',
          900: '#1a358f',
          950: '#152158',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Noto Serif TC"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Noto Sans TC"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'grow-x': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'line-drop': {
          '0%': { transform: 'scaleY(0)', opacity: '0' },
          '100%': { transform: 'scaleY(1)', opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 1s ease-out both',
        'grow-x': 'grow-x 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
        'line-drop': 'line-drop 0.8s ease-out both',
      },
    },
  },
  plugins: [],
};
