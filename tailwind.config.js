/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        KaushanScript: ["Kaushan Script", "cursive"],
        Montserrat: ["Montserrat", "sans-serif"],
        VarelaRound: ["Varela Round", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#87A2F9",
          secondary: "#E090DF",
          accent: "#e03535",
          neutral: "#3d4451",
          "base-100": "black",
        },
      },
      "dark",
      "cupcake",
    ],
  },
};
