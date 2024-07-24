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
      trinatopiaRedBg: "#FCF3F3",
      trinatopiaRedTxt: "#A71111",
      trinatopiaBlueBg: "#E8F7FC",
      trinatopiaBlueTxt: "#0D5977",
      trinatopiaBlackBg: "#FFFFFF",
      trinatopiaBlackTxt: "#000000",

      //Deuteranopia
      deuteranopiaOrangeBg: "#FFD280",
      deuteranopiaOrangeTxt: "#5C3C00",
      deuteranopiaBlueBg: "#8DCEFC",
      deuteranopiaBlueTxt: "#04395E",
      deuteranopiaBlackBg: "#FFFFFF",
      deuteranopiaBlackTxt: "#000000",

      //Protanopia
      protanopiaYellowBg: "#FFDB29",
      protanopiaYellowTxt: "#524000",
      protanopiaBlueBg: "#C1C3E6",
      protanopiaBlueTxt: "#2C2F6D",
      protanopiaBlackBg: "#FFFFFF",
      protanopiaBlackTxt: "#000000",
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
