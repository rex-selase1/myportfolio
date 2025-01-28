/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway", "san-serif"],
        Quicksand: ["Quicksand", "san-serif"],
        DMSans : ["DM Sans" , "san-serif"],
       MonaSans : ["Mona Sans" , "san-serif"],
        Poppins : ['Poppins', 'cursive']
      },
    },
  },
  plugins: [],
};
