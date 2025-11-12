/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#2d9d4b',
          600: '#22863f',
          700: '#1d7a3a',
          800: '#15543a',
          900: '#0f3d2b',
        },
        dark: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#0f1419',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 5px 20px rgba(0, 0, 0, 0.08)',
        'md-soft': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'lg-soft': '0 15px 50px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
