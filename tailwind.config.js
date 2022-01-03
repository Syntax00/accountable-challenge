module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        lightShadow: "1px 5px 63px -10px rgba(0,0,0,0.05)",
      },
      colors: {
        primary: "#6317C2",
        secondary: "#222222",
      },
      transitionProperty: {
        width: "width",
        padding: "padding",
      },
    },
  },
  plugins: [],
};
