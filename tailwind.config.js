/* eslint-disable no-undef */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    colors: {
      priceColor: "#7BBCB0",
      headingBlack: "#1C2B38",
      primary: "#FEB81C",

      //Trinatopia
      //Trinatopia Red
      trinatopiaRedBg: "#F5D6D6",
      trinatopiaRedTxt: "#A71111",
      //Trinatopia Green
      trinatopiaGreenBg: "#E3F9C3",
      trinatopiaGreenTxt: "#395A07",
      //Trinatopia Black
      trinatopiaBlackBg: "#9C9C9C"



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
