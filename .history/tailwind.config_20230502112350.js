/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnightblue: "#290d64",
        white: "#fff",
        gray: {
          "100": "#001026",
          "200": "rgba(255, 255, 255, 0.5)",
          "300": "rgba(255, 255, 255, 0.2)",
        },
        snow: "#fff5f5",
        darkgray: "#adadad",
        black: "#000",
        steelblue: "rgba(37, 102, 163, 0.2)",
      },
      fontFamily: {
        poppins: "Poppins",
        "public-sans": "'Public Sans'",
      },
      borderRadius: {
        "11xl": "30px",
        xl: "20px",
        "3xs": "10px",
      },
    },
    fontSize: {
      lg: "18px",
      mini: "15px",
      xl: "20px",
      sm: "14px",
      xs: "12px",
      "3xs": "10px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
