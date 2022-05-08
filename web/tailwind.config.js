module.exports = {
  content: ['./public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8257E6',
        }
      },
      borderRadius: {
        md: '4px',
      }    
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
};
