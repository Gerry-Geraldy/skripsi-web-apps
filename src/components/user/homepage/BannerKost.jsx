import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faStar,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { banner1 } from "../../../../public"; // adjust this import if needed
import { kosts } from "../../../constant/infoKostContent";
import { useEffect, useState } from "react";
import { useMaterialTailwindController } from "../../../context";
import useThemeSwitcherConfig from "../../../utils/themeSwitcherConfig";

const BannerKost = () => {
  const [controller] = useMaterialTailwindController();
  const { themeColor, tritanopiaColor, protanopiaColor, deuteranopiaColor } =
    controller;

  const { currentButtonColor } = useThemeSwitcherConfig(
    themeColor,
    tritanopiaColor,
    protanopiaColor,
    deuteranopiaColor
  );
  const [kostData, setKostData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = kosts.find((kost) => kost.name === "Kost Tukad Pancoran");
      setKostData(data);
    };

    fetchData();
  }, []);

  if (!kostData) {
    return <div>Loading...</div>; // Optionally, add a loading state
  }

  return (
    <section className="relative mt-24 shadow-sm dark:shadow-none h-[450px] w-full">
      <div className="relative h-[820px] lg:h-full w-full">
        <img
          src={banner1}
          alt="banner kost"
          className="h-full w-full object-cover bg-center blur-sm"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col lg:flex-row items-center justify-center p-6 h-full">
          <div className="p-3">
            <img
              src={kostData.image}
              alt={kostData.name}
              className="w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] object-cover rounded-full"
            />
          </div>
          <div className="ml-8 mt-4 text-white flex flex-col gap-3">
            <div className="bg-blue-200 text-white p-2 rounded-full text-sm inline-block w-[50%] lg:w-[30%] text-center">
              <p className="font-bold text-headingBlack font-mulishExtraBold">
                TRENDING NOW
              </p>
            </div>
            <h2 className="text-4xl font-volkhovBold text-white">
              {kostData.name}
            </h2>
            <div className="flex flex-row items-start gap-2 ">
              <div className="flex">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mr-2 w-6 h-6"
                />
                <span className="mr-2 font-mulishSemiBold text-[12px] sm:text-[14px]">
                  {kostData.region}
                </span>
              </div>
              <div className="flex items-start">
                <FontAwesomeIcon
                  icon={faStar}
                  className="w-4 sm:w-5 h-4 sm:h-5 text-primary"
                />
                <span className="font-mulishSemiBold text-[12px] sm:text-[14px]">
                  ({kostData.review} reviews)
                </span>
              </div>
            </div>
            <p className="mt-2 max-w-lg text-justify lg:text-left font-mulishSemiBold text-[12px] sm:text-[14px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="flex flex-row justify-start items-center gap-6">
              <button
                className={`${currentButtonColor} mt-4  px-8 py-3 rounded-full shadow-md hover:shadow-md  text-center text-[12px] sm:text-[14px] font-semibold`}
                aria-label="Book Now"
              >
                Book Now
              </button>
              <div className="mt-4 flex space-x-2">
                <button
                  className="p-2 w-12 h-12 rounded-full shadow-lg bg-white bg-opacity-40 flex items-center justify-center hover:bg-white hover:bg-opacity-100 hover:text-headingBlack"
                  aria-label="Add to Favorites"
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                <button
                  className="p-2 w-12 h-12 rounded-full shadow-lg bg-white bg-opacity-40 flex items-center justify-center hover:bg-white hover:bg-opacity-100 hover:text-headingBlack"
                  aria-label="Share"
                >
                  <FontAwesomeIcon icon={faShare} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerKost;
