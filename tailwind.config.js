/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: ".5rem",
        sm: "1rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
