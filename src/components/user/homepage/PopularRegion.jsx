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
            <Button
              key={index}
              variant="outlined"
              className="focus:bg-blue-gray-900 focus:text-white rounded-full px-8 py-4 w-[120px] text-center "
              onClick={() => handleRegionSelect(region)}
            >
              {region.name}
            </Button>
          ))}
        </div>
        <div className="flex flex-col">
          <div className="relative flex flex-col">
            <img
              src={selectedRegion.image}
              alt={selectedRegion.name}
              className=" h-[350px] md:h-[450px] object-cover bg-center w-[90%] mx-auto"
            />
            <div className="p-8 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[250px] w-[85%] bg-white shadow-xl shadow-gray-200 mx-auto relative bottom-16 rounded-md">
              <div className="flex flex-col">
                <Typography className="font-bold font-sans text-[45px] lg:text-[60px] ">
                  {selectedRegion.name}
                </Typography>
                <Typography variant="small" className="max-w-[300px]">
                  {selectedRegion.description}
                </Typography>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-3">
                  <Popover>
                    <PopoverHandler>
                      <Button
                        variant="text"
                        className="shadow-blue-gray-200 shadow-sm flex items-center gap-3 text-purple-500"
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
                        className="shadow-blue-gray-200 shadow-sm flex items-center gap-3 text-green-500"
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
                        className="shadow-blue-gray-200 shadow-sm flex items-center gap-3 text-orange-500"
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
                        className="shadow-blue-gray-200 shadow-sm flex items-center gap-3 text-red-500"
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
                        className="shadow-blue-gray-200 shadow-sm flex items-center gap-3 text-blue-500"
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
