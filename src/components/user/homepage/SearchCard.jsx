// SearchCard.jsx
import { Typography, Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cardItems } from "../../../constant/homepageContent";
import { useMaterialTailwindController } from "../../../context";
import useThemeSwitcherConfig from "../../../utils/themeSwitcherConfig";
import AnimatedText from "../../../utils/hooks/animatedText";

const SearchCard = () => {
  const [controller] = useMaterialTailwindController();
  const { themeColor, tritanopiaColor, protanopiaColor, deuteranopiaColor } =
    controller;

  const { currentIconColor, currentButtonColor } = useThemeSwitcherConfig(
    themeColor,
    tritanopiaColor,
    protanopiaColor,
    deuteranopiaColor
  );
  return (
    <AnimatedText>
      <div
        className={`lg:flex justify-center  w-[70%] mx-auto rounded-2xl px-5 py-5 items-center shadow-lg hidden bg-white dark:bg-gray-800`}
      >
        <div className="flex flex-row items-center gap-[60px]">
          {cardItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex flex-row gap-2 items-center">
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`h-6 w-6 ${currentIconColor}`}
                />
                <Typography>
                  <p className="text-[14px] font-mulishExtraBold dark:text-white">
                    {item.title}
                  </p>
                </Typography>
              </div>
              <p className="ml-7 text-[13px] text-gray-500 font-mulishSemiBold italic dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
          <Button
            className={`rounded-full px-10 py-4 shadow-md dark:shadow-none shadow-blue-gray-100 ${currentButtonColor}`}
          >
            Search
          </Button>
        </div>
      </div>
    </AnimatedText>
  );
};

export default SearchCard;
