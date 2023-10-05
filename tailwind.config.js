/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "9dvh": "9dvh",
      },
      gap: {
        "3rem": "3rem",
      },

      boxShadow: {
        buttons: "inset 0 0 15px white",
        hoverBtns: "inset 0 0 25px white",
        hoverFins: "inset 0 0 5px midnightblue",
        hoverFins2: "inset 0 0 5px white",
        input: "0 0 10px aliceblue",
        priceBox: "1px 1px 8px 1px rgba(237, 237, 255, 0.4)",
        watchList: "0 0 10px rgba(25, 25, 112, 0.5)",
        appHeader: "0 5px 5px rgba(25, 25, 112, 0.5)",
      },

      dropShadow: {
        gridderInd: "2px 2px 5px rgba(25, 25, 112, 0.5)",
        gridderBld: "2px 2px 7px rgba(25, 25, 112, 0.65)",
      },
    },
  },
  plugins: [],
};
