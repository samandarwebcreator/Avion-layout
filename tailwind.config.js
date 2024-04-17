/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      body: ["Satoshi-Regular"],
      display: ["ClashDisplay-Regular", "ClashDisplay-Medium"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "20px",
      },
      screens: {
        DEFAULT: "1240px",
        lg: "1386px",
      },
    },
    extend: {
      colors: {
        "button-brand": "#F9F9F9",
        "primary-100": "#726E8D",
        "blue-500": "#2A254B",
        "link-color": "rgba(249, 249, 249, 0.15)",
      },
    },
  },
  plugins: [],
};
