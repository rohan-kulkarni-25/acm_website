module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1350px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "750px" },
      //
    },
    extend: {
      colors: {
        "cornflower-blue": {
          DEFAULT: "#5479F7",
          50: "#FFFFFF",
          100: "#F0F3FE",
          200: "#C9D5FC",
          300: "#A2B6FB",
          400: "#7B98F9",
          500: "#5479F7",
          600: "#1E4FF4",
          700: "#0A37D1",
          800: "#07299B",
          900: "#051B66",
        },
      },
    },
  },
  plugins: [],
};
