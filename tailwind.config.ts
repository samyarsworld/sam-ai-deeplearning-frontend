/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          7: "#00684A",
          6: "#00A35C",
          5: "#00ED64",
          4: "#71F6BA",
          3: "#C0FAE6",
          2: "#E3FCF7",
          8: "#023430",
          50: "#30AF5B",
          90: "#292C27",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
        purple: {
          1: "#B45AF2",
          2: "#5E0C9E",
          3: "#2D0B59",
        },
      },

      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      padding: {
        sam: "100px",
      },
    },
  },
  plugins: [],
};
