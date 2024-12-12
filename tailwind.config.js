/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui'

export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  content: [],
  theme: {
    colors: {
      'custom-header': 'rgba(255, 255, 255, .3)'
    },
    extend: {},
  },
  plugins: [daisyui],
}
