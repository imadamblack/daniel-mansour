/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          1: "#592EF2",
          2: "#F20544",
          3: "#F2622E",
          4: "#43b2bc",
          5: "#37AC1A",
          6: "#fef0d5",
        },
      },
      container: {
        center: true,
        padding: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
  },
  plugins: [],
};
