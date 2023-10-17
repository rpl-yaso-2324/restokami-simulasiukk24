/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ["Quicksand", "sans-serif"]
      },
      colors: {
        pink: {
          200: '#ADADAD',
          400: '#FF9191',
        },
      },
    },
  },
  plugins: [],
}

