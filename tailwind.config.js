 /** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
   theme: {
     extend: {
      fontFamily: {
         bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
         roboto: ['"Outfit"', 'sans-serif'],
      },
     },
   },
   plugins: [],
 }