/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      textColor: {
        'primary': 'var(--text-primary)',
        'secondary': 'var(--text-secondary)',
      },
      backgroundColor: {
        'primary': 'var(--bg-primary)',
        'secondary': 'var(--bg-secondary)',
      },
      colors: {
        'light': {
          'primary': 'var(--light-primary)',
          'secondary': 'var(--light-secondary)',
        },
        'dark': {
          'primary': 'var(--dark-primary)',
          'secondary': 'var(--dark-secondary)',
        },
      },
    },
  },
  plugins: [],
}