/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'teal': '#0AADAD',
        'teal-light': '#1ABFBF',
        'dark-bg': '#0B0F11',
        'dark-card': '#111719',
        'dark-accent': '#161D20',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'teal-glow': '0 0 20px rgba(10, 173, 173, 0.5)',
        'teal-glow-lg': '0 0 40px rgba(10, 173, 173, 0.3)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(10, 173, 173, 0.5), 0 0 40px rgba(10, 173, 173, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(10, 173, 173, 0.8), 0 0 60px rgba(10, 173, 173, 0.3)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
