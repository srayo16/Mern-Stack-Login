/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ff0000",

          "secondary": "#EF9FBC",

          "accent": "#EEAF3A",

          "neutral": "#291334",

          "base-100": "#FAF7F5",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#9c2a2a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],

}
