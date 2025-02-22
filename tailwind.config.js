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
        'foreground': 'var(--foreground)',
      },
      colors: {
        'light': {
          'primary': 'var(--primary)',
          'secondary': 'var(--secondary)',
        },
        'dark': {
          'primary': 'var(--primary)',
          'secondary': 'var(--secondary)',
        },
        accent: 'var(--accent)',
      },
    },
  },
  plugins: [],
}