module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "gray-dark": "#414047",
        "gray-medium": "#33373B",
        "gray-light": "#6F6E73",
        "gray-placeholder": "#BEBEC2",
        "blue-dark": "#587BE0",
        "indigo-dark": "#885FFF",
        "gray-platform": "#F5F5F5"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
