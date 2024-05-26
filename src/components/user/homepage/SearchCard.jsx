import { Typography, Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const SearchCard = () => {
  return (
    <div className="relative lg:flex justify-center bottom-11 w-[70%] mx-auto rounded-2xl bg-white px-5 py-5 items-center shadow-md shadow-blue-gray-200 hidden ">
      <div className="flex flex-row items-center gap-[60px]">
        <div className="flex flex-col">
          <div className="flex flex-row gap-2 items-center">
            <FontAwesomeIcon icon={faLocationDot} className="h-6 w-6" />
            <Typography>
              <p>Location</p>
            </Typography>
          </div>
          <p className="ml-7">Search For Boarding House</p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-2 items-center">
            <FontAwesomeIcon icon={faLocationDot} className="h-6 w-6" />
            <Typography>
              <p>Location</p>
            </Typography>
          </div>
          <p className="ml-7">Search For Boarding House</p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-2 items-center">
            <FontAwesomeIcon icon={faLocationDot} className="h-6 w-6" />
            <Typography>
              <p>Location</p>
            </Typography>
          </div>
          <p className="ml-7">Search For Boarding House</p>
        </div>
        <Button  className="rounded-full px-10 py-4 bg-yellow-700 shadow-md shadow-blue-gray-100 ">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchCard;
