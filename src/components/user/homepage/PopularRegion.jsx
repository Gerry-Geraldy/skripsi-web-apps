import { useState } from "react";
import {
  Button,
  Typography,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBus,
  faEarth,
  faMapLocationDot,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

import { regionsContent } from "../../../constant/homepageContent";
import AnimatedText from "../../../utils/hooks/animatedText";

const PopularRegion = () => {
  const [selectedRegion, setSelectedRegion] = useState(regionsContent[0]);

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };

  return (
    <section>
      <div className="flex flex-col">
        <AnimatedText>
          <div className="grid grid-cols-3 md:grid-cols-1 mx-auto sm:grid-cols-4  md:flex lg:flex-row gap-3 justify-center mb-10 p-4 ">
            {regionsContent.map((region, index) => (
              <button
                key={index}
                className="focus:bg-blue-gray-900 focus:text-white rounded-full px-4 md:px-6 py-2 md:py-3 font-mulishBold text-[12px] md:text-[14px] dark:text-white text-headingBlack outline dark:outline-white dark:bg-gray-800 outline-black outline-1 transition-transform transform hover:scale-105 active:scale-95"
                onClick={() => handleRegionSelect(region)}
              >
                {region.name}
              </button>
            ))}
          </div>
        </AnimatedText>
        <div className="flex flex-col">
          <div className="relative flex flex-col">
            <img
              src={selectedRegion.image}
              alt={selectedRegion.name}
              className=" h-[350px] md:h-[450px] object-cover bg-center w-[90%] mx-auto"
            />
            <div className="p-8 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[250px] w-[85%] bg-white dark:bg-gray-800 shadow-xl dark:shadow-none shadow-gray-200 mx-auto relative bottom-16 rounded-md">
              <AnimatedText>
                <div className="flex flex-col ">
                  <Typography className="font-volkhovBold text-[45px] lg:text-[60px] text-headingBlack dark:text-white">
                    {selectedRegion.name}
                  </Typography>
                  <Typography
                    variant="small"
                    className="max-w-[350px] font-mulishSemiBold text-[12px] text-gray-500 dark:text-white"
                  >
                    {selectedRegion.description}
                  </Typography>
                </div>
              </AnimatedText>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-3">
                  <Popover>
                    <PopoverHandler>
                      <Button
                        variant="text"
                        className="dark:shadow-none shadow-blue-gray-200 shadow-sm flex items-center gap-3 text-purple-500 font-mulishBold dark:bg-gray-900 text-[10px]"
                      >
                        <FontAwesomeIcon
                          icon={faBus}
                          className="w-4 h-4 sm:w-5 sm:h-5"
                        />
                        Public Transportation
                      </Button>
                    </PopoverHandler>
                    <PopoverContent>
                      This is a very beautiful popover, show some love.
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="flex flex-row gap-3">
                  <Popover>
                    <PopoverHandler>
                      <Button
                        variant="text"
                        className="dark:shadow-none shadow-blue-gray-200 shadow-sm flex items-center gap-3 text-green-500 dark:bg-gray-900 text-[10px]"
                      >
                        <FontAwesomeIcon
                          icon={faEarth}
                          className="w-4 h-4 sm:w-5 sm:h-5"
                        />
                        Nature & Adventure
                      </Button>
                    </PopoverHandler>
                    <PopoverContent>
                      This is a very beautiful popover, show some love.
                    </PopoverContent>
                  </Popover>
                  <Popover>
                    <PopoverHandler>
                      <Button
                        variant="text"
                        className="dark:shadow-none shadow-blue-gray-200 shadow-sm flex items-center gap-3 text-orange-500 dark:bg-gray-900 text-[10px]"
                      >
                        <FontAwesomeIcon
                          icon={faTaxi}
                          className="w-4 h-4 sm:w-5 sm:h-5"
                        />
                        Private Transportation
                      </Button>
                    </PopoverHandler>
                    <PopoverContent>
                      This is a very beautiful popover, show some love.
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="flex flex-row gap-3">
                  <Popover>
                    <PopoverHandler>
                      <Button
                        variant="text"
                        className="dark:shadow-none shadow-blue-gray-200 shadow-sm flex items-center gap-3 text-red-500 dark:bg-gray-900 text-[10px]"
                      >
                        <FontAwesomeIcon
                          icon={faBriefcase}
                          className="w-4 h-4 sm:w-5 sm:h-5"
                        />
                        Bussines Tours
                      </Button>
                    </PopoverHandler>
                    <PopoverContent>
                      This is a very beautiful popover, show some love.
                    </PopoverContent>
                  </Popover>
                  <Popover>
                    <PopoverHandler>
                      <Button
                        variant="text"
                        className=" dark:shadow-none shadow-blue-gray-200 shadow-sm flex items-center gap-3 text-blue-500 dark:bg-gray-900 text-[10px]"
                      >
                        <FontAwesomeIcon
                          icon={faMapLocationDot}
                          className="w-4 h-4 sm:w-5 sm:h-5"
                        />
                        Local Visit
                      </Button>
                    </PopoverHandler>
                    <PopoverContent>
                      This is a very beautiful popover, show some love.
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularRegion;
