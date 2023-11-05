/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#E6FFFA",
          100: "#B2F7F6",
          200: "#81EDED",
          300: "#4EE3E3",
          400: "#2FD69E",
          500: "#29B88E",
          600: "#239A7E",
          700: "#1E7C6E",
          800: "#185E5E",
          900: "#12404E",
        },
      },
      fontSize: {
        h1: "3rem", // 48px
        h2: "2.25rem", // 36px
        h3: "1.875rem", // 30px
        h4: "1.5rem", // 24px
        h5: "1.25rem", // 20px
        h6: "1rem", // 16px
      },
    },
  },
  plugins: [],
};
