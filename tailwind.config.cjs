/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          100: "#e9e5f3",
          200: "#d4cbe7",
          300: "#beb1da",
          400: "#a997ce",
          500: "#937dc2",
          600: "#76649b",
          700: "#584b74",
          800: "#3b324e",
          900: "#1d1927",
        },
        secondary: {
          100: "#f4e7f4",
          200: "#e8d0e8",
          300: "#ddb8dd",
          400: "#d1a1d1",
          500: "#c689c6",
          600: "#9e6e9e",
          700: "#775277",
          800: "#4f374f",
          900: "#281b28",
        },
        tertiary: {
          100: "#ffeef9",
          200: "#ffddf3",
          300: "#ffcded",
          400: "#ffbce7",
          500: "#ffabe1",
          600: "#cc89b4",
          700: "#996787",
          800: "#66445a",
          900: "#33222d",
        },
        quaternary: {
          100: "#fffafd",
          200: "#fff5fc",
          300: "#fff0fa",
          400: "#ffebf9",
          500: "#ffe6f7",
          600: "#ccb8c6",
          700: "#998a94",
          800: "#665c63",
          900: "#332e31",
        },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("tailwindcss-radix")(),
  ],
};
