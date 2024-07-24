// src/widgets/layout/dichromaticColors.js

export const dichromaticColors = [
  {
    type: "Tritanopia",
    colors: [
      {
        name: "Red",
        classNames: {
          button: "bg-trinatopiaRedBg text-trinatopiaRedTxt",
          icon: "text-trinatopiaRedTxt",
          hoverBg: "hover:bg-trinatopiaRedBg",
          hoverText: "hover:text-trinatopiaRedTxt",
        },
      },
      {
        name: "Green",
        classNames: {
          button: "bg-trinatopiaBlueBg text-trinatopiaBlueTxt",
          icon: "text-trinatopiaBlueTxt",
          hoverBg: "hover:bg-trinatopiaBlueBg hover:text-trinatopiaBlueTxt",
          hoverText: "hover:text-trinatopiaBlueTxt",
        },
      },
      {
        name: "Black",
        classNames: {
          button: "bg-trinatopiaBlackBg text-trinatopiaBlackTxt",
          icon: "text-trinatopiaBlackTxt",
          hoverBg: "hover:bg-trinatopiaBlackBg",
          hoverText: "hover:text-trinatopiaBlackTxt",
        },
      },
    ],
  },
  {
    type: "Deuteranopia",
    colors: [
      {
        name: "Yellow",
        classNames: {
          button: "bg-deuteranopiaOrangeBg text-deuteranopiaOrangeTxt",
          icon: "text-deuteranopiaOrangeTxt",
          hoverBg: "hover:bg-deuteranopiaOrangeBg",
          hoverText: "hover:text-deuteranopiaOrangeTxt",
        },
      },
      {
        name: "Blue",
        classNames: {
          button: "bg-deuteranopiaBlueBg text-deuteranopiaBlueTxt",
          icon: "text-deuteranopiaBlueTxt",
          hoverBg: "hover:bg-deuteranopiaBlueBg",
          hoverText: "hover:text-deuteranopiaBlueTxt",
        },
      },
      {
        name: "Black",
        classNames: {
          button: "bg-deuteranopiaBlackBg text-deuteranopiaBlackTxt",
          icon: "text-deuteranopiaBlackTxt",
          hoverBg: "hover:bg-deuteranopiaBlackBg",
          hoverText: "hover:text-deuteranopiaBlackTxt",
        },
      },
    ],
  },
  {
    type: "Protanopia",
    colors: [
      {
        name: "Yellow",
        classNames: {
          button: "bg-protanopiaYellowBg text-protanopiaYellowTxt",
          icon: "text-protanopiaYellowTxt",
          hoverBg: "hover:bg-protanopiaYellowBg",
          hoverText: "hover:text-protanopiaYellowTxt",
        },
      },
      {
        name: "Blue",
        classNames: {
          button: "bg-protanopiaBlueBg text-protanopiaBlueTxt",
          icon: "text-protanopiaBlueTxt",
          hoverBg: "hover:bg-protanopiaBlueBg",
          hoverText: "hover:text-protanopiaBlueTxt",
        },
      },
      {
        name: "Black",
        classNames: {
          button: "bg-protanopiaBlackBg text-protanopiaBlackTxt",
          icon: "text-protanopiaBlackTxt",
          hoverBg: "hover:bg-protanopiaBlackBg",
          hoverText: "hover:text-protanopiaBlackTxt",
        },
      },
    ],
  },
];

export default dichromaticColors;
