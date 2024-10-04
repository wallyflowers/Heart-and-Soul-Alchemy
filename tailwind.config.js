/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'light-abstract': "url('soul-orb.webp')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        // Modify the bumblebee theme from daisyui
        bumblebee: {
          ...require("daisyui/src/theming/themes")["pastel"],
          "fontFamily": "RobotoSlab-Light",
        },
      },
    ],
  },
}

