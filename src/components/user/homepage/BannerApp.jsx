import { Button } from "@material-tailwind/react";
import { region1 } from "../../../../public";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons/faMobile";
import { useMaterialTailwindController } from "../../../context";
import useThemeSwitcherConfig from "../../../utils/themeSwitcherConfig";

const BannerApp = () => {
  const [controller] = useMaterialTailwindController();
  const { themeColor, tritanopiaColor, protanopiaColor, deuteranopiaColor } =
    controller;

  const { currentButtonColor } = useThemeSwitcherConfig(
    themeColor,
    tritanopiaColor,
    protanopiaColor,
    deuteranopiaColor
  );
  return (
    <section className="relative mt-14 h-[600px] p-4 flex items-center justify-center bg-gray-200">
      <img
        src={region1}
        alt="Mobile App Banner"
        className="absolute inset-0 w-full h-full object-cover object-center blur-sm"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="flex flex-col lg:flex-row relative justify-center items-center gap-5">
        <div className="flex">
          <img
            src={region1}
            alt="Apps"
            className="h-[200px] lg:h-[400px] w-[120px] lg:w-[250px] object-cover rounded-xl"
          />
          <img
            src={region1}
            alt="Apps"
            className="h-[200px] lg:h-[400px] w-[120px] lg:w-[250px] object-cover mt-10 right-8 relative rounded-xl"
          />
        </div>
        <div className="relative  flex flex-col item-center text-center lg:text-left lg:items-start text-white">
          <h2 className="text-4xl font-bold mb-4 text-center lg:text-left">
            Jasa Tukang Mobile App
          </h2>
          <p className="max-w-md mb-8 text-center lg:text-left text-[12px] sm:text-[14px]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="flex space-x-4 mx-auto lg:mx-0">
            <Button className={`${currentButtonColor}  text-[10px] sm:text-[12px] px-4 py-2  sm:px-6 sm:py-4 rounded-full shadow-md flex flex-row gap-1 items-center bg`}>
              <FontAwesomeIcon icon={faApple} className="w-5 h-5 smw-6 sm:h-6 " />
              Download for iOS
            </Button>
            <Button className={`${currentButtonColor}  text-[10px] sm:text-[12px] px-4 py-2  sm:px-6 sm:py-4 rounded-full shadow-md flex flex-row gap-1 items-center`}>
              <FontAwesomeIcon icon={faMobile} className="w-5 h-5 smw-6 sm:h-6" />
              Download for Android
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerApp;
