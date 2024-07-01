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

const PopularRegion = () => {
  const [selectedRegion, setSelectedRegion] = useState(regionsContent[0]);

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };
  

  return (
    <section>
      <div className="flex flex-col">
        <div className="grid grid-cols-3 mx-auto sm:grid-cols-4  md:flex lg:flex-row gap-3 justify-center mb-10 p-4 ">
          {regionsContent.map((region, index) => (
            <button
              key={index}
              className="focus:bg-blue-gray-900 rounded-full px-8 py-4 w-[120px] font-mulishBold text-center dark:text-white text-headingBlack outline dark:outline-white dark:bg-gray-800 outline-black outline-1"
              onClick={() => handleRegionSelect(region)}
            >
              {region.name}
            </button>
          ))}
        </div>
        <div className="flex flex-col">
          <div className="relative flex flex-col">
            <img
              src={selectedRegion.image}
              alt={selectedRegion.name}
              className=" h-[350px] md:h-[450px] object-cover bg-center w-[90%] mx-auto"
            />
            <div className="p-8 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[250px] w-[85%] bg-white dark:bg-gray-800 shadow-xl dark:shadow-none shadow-gray-200 mx-auto relative bottom-16 rounded-md">
              <div className="flex flex-col ">
                <Typography className="font-volkhovBold text-[45px] lg:text-[60px] text-headingBlack dark:text-white">
                  {selectedRegion.name}
                </Typography>
                <Typography variant="small" className="max-w-[350px] font-mulishSemiBold text-[12px] text-gray-500 dark:text-white">
                  {selectedRegion.description}
                </Typography>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-3">
                  <Popover>
                    <PopoverHandler>
                      <Button
                        variant="text"
                        className="dark:shadow-none shadow-blue-gray-200 shadow-sm flex items-center gap-3 text-purple-500 font-mulishBold dark:bg-gray-900"
                      >
                        <FontAwesomeIcon icon={faBus} className="w-6 h-6" />
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
                        className="dark:shadow-none shadow-blue-gray-200 shadow-sm flex items-center gap-3 text-green-500 dark:bg-gray-900"
                      >
                        <FontAwesomeIcon icon={faEarth} className="w-6 h-6" />
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
                        className="dark:shadow-none shadow-blue-gray-200 shadow-sm flex items-center gap-3 text-orange-500 dark:bg-gray-900"
                      >
                        <FontAwesomeIcon icon={faTaxi} className="w-6 h-6" />
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
                        className="dark:shadow-none shadow-blue-gray-200 shadow-sm flex items-center gap-3 text-red-500 dark:bg-gray-900"
                      >
                        <FontAwesomeIcon
                          icon={faBriefcase}
                          className="w-6 h-6"
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
                        className=" dark:shadow-none shadow-blue-gray-200 shadow-sm flex items-center gap-3 text-blue-500 dark:bg-gray-900"
                      >
                        <FontAwesomeIcon icon={faMapLocationDot} />
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
