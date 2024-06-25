/* eslint-disable no-undef */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      priceColor: "#7BBCB0",
      headingBlack: "#1C2B38",
      primary: "#FEB81C",
    },
    extend: {
      fontFamily: {
        volkhovBold: ["Volkhov Bold"],
        mulishSemiBold: ["Mulish SemiBold", "sans-serif"],
        mulishExtraBold: ["Mulish ExtraBold", "sans-serif"],
        mulishBold: ["Mulish Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
});
