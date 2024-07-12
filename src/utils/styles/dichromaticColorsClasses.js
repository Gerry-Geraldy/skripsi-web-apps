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
          button: "bg-trinatopiaGreenBg text-trinatopiaGreenTxt",
          icon: "text-trinatopiaGreenTxt",
          hoverBg: "hover:bg-trinatopiaGreenBg hover:text-trinatopiaGreenTxt",
          hoverText: "hover:text-trinatopiaGreenTxt",
        },
      },
      {
        name: "Black",
        classNames: {
          button: "bg-trinatopiaBlackBg text-black",
          icon: "text-black",
          hoverBg: "hover:bg-trinatopiaBlackBg",
          hoverText: "hover:text-gray-800",
        },
      },
      {
        name: "White",
        classNames: {
          button: "bg-white",
          icon: "text-white",
          hoverBg: "hover:bg-gray-100",
          hoverText: "hover:text-gray-100",
        },
      },
    ],
  },
  {
    type: "Deuteranopia",
    colors: [
      {
        name: "Blue",
        classNames: {
          button: "bg-blue-500",
          icon: "text-blue-500",
          hoverBg: "hover:bg-blue-600",
          hoverText: "hover:text-blue-600",
        },
      },
      {
        name: "Yellow",
        classNames: {
          button: "bg-yellow-500",
          icon: "text-yellow-500",
          hoverBg: "hover:bg-yellow-600",
          hoverText: "hover:text-yellow-600",
        },
      },
      {
        name: "Black",
        classNames: {
          button: "bg-black",
          icon: "text-black",
          hoverBg: "hover:bg-gray-800",
          hoverText: "hover:text-gray-800",
        },
      },
      {
        name: "White",
        classNames: {
          button: "bg-white",
          icon: "text-white",
          hoverBg: "hover:bg-gray-100",
          hoverText: "hover:text-gray-100",
        },
      },
    ],
  },
  {
    type: "Protanopia",
    colors: [
      {
        name: "Blue",
        classNames: {
          button: "bg-blue-500",
          icon: "text-blue-500",
          hoverBg: "hover:bg-blue-600",
          hoverText: "hover:text-blue-600",
        },
      },
      {
        name: "Yellow",
        classNames: {
          button: "bg-yellow-500",
          icon: "text-yellow-500",
          hoverBg: "hover:bg-yellow-600",
          hoverText: "hover:text-yellow-600",
        },
      },
      {
        name: "Black",
        classNames: {
          button: "bg-black",
          icon: "text-black",
          hoverBg: "hover:bg-gray-800",
          hoverText: "hover:text-gray-800",
        },
      },
      {
        name: "White",
        classNames: {
          button: "bg-white",
          icon: "text-white",
          hoverBg: "hover:bg-gray-100",
          hoverText: "hover:text-gray-100",
        },
      },
    ],
  },
];

export default dichromaticColors;
