import dichromaticColors from "./styles/dichromaticColorsClasses";
import {
  iconColorClasses,
  buttonColorClasses,
  hoverBgColorClasses,
  hoverTextColorClasses,
} from "./styles/themeColorClasses";

const useThemeSwitcherConfig = (
  themeColor,
  tritanopiaColor,
  protanopiaColor,
  deuteranopiaColor
) => {
  // Helper function to get classes for a given type of color blindness
  const getColorClasses = (type) => {
    const colorType = dichromaticColors.find((color) => color.type === type);
    if (!colorType) return {};
    return colorType.colors.reduce((acc, color) => {
      acc[color.name.toLowerCase()] = color.classNames;
      return acc;
    }, {});
  };

  const tritanopiaClasses = getColorClasses("Tritanopia");
  const protanopiaClasses = getColorClasses("Protanopia");
  const deuteranopiaClasses = getColorClasses("Deuteranopia");

  // Function to get current classes based on the given conditions
  const getCurrentClasses = (color, classes) => {
    const colorClass = classes[color.toLowerCase()];
    return colorClass
      ? {
          icon: colorClass.icon,
          button: colorClass.button,
          hoverBg: colorClass.hoverBg,
          hoverText: colorClass.hoverText,
        }
      : {};
  };

  // Determine the current classes based on the given conditions
  let currentClasses = {
    icon: iconColorClasses[themeColor],
    button: buttonColorClasses[themeColor],
    hoverBg: hoverBgColorClasses[themeColor],
    hoverText: hoverTextColorClasses[themeColor],
  };

  if (tritanopiaColor) {
    currentClasses = getCurrentClasses(tritanopiaColor, tritanopiaClasses);
  } else if (protanopiaColor) {
    currentClasses = getCurrentClasses(protanopiaColor, protanopiaClasses);
  } else if (deuteranopiaColor) {
    currentClasses = getCurrentClasses(deuteranopiaColor, deuteranopiaClasses);
  }

  return {
    currentIconColor: currentClasses.icon,
    currentButtonColor: currentClasses.button,
    currentHoverBgColor: currentClasses.hoverBg,
    currentHoverTextColor: currentClasses.hoverText,
  };
};

export default useThemeSwitcherConfig;
