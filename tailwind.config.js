/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        header: 'calc(100% - 40px)'
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'footer-brands': 'repeat(3, 60px)'
      },
      boxShadow: {
        'footer-channel': '0 1px 1px rgba(0,0,0,0.2)'
      },
      transitionDuration: {
        2000: '2000ms'
      }
    }
  },
  plugins: []
}
