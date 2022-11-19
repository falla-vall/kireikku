/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "cetacean-blue": {
          100: "#d0ccdc",
          200: "#a199b9",
          300: "#736696",
          400: "#443373",
          500: "#150050",
          600: "#110040",
          700: "#0d0030",
          800: "#080020",
          900: "#040010",
        },
        "deep-violet": {
          100: "#d9cce3",
          200: "#b299c6",
          300: "#8c66aa",
          400: "#65338d",
          500: "#3f0071",
          600: "#32005a",
          700: "#260044",
          800: "#19002d",
          900: "#0d0017",
        },
        "electric-pink": {
          100: "#fed3e4",
          200: "#fda8c8",
          300: "#fd7cad",
          400: "#fc5191",
          500: "#fb2576",
          600: "#c91e5e",
          700: "#971647",
          800: "#640f2f",
          900: "#320718",
        },
      },
    },
  },
  plugins: [],
};
