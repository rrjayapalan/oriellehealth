/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#C89B2B",
        teal: "#0D5C5C",
        turquoise: "#7DBBB2",
        ivory: "#FDF8F3",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #7DBBB2 0%, #D3E7E5 100%)",
      },
    },
  },
  plugins: [],
};
