import { Typography, Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cardItems } from "../../../constant/homepageContent";
const SearchCard = () => {
  return (
    <div className="relative lg:flex justify-center bottom-11 w-[70%] mx-auto rounded-2xl bg-white px-5 py-5 items-center shadow-lg shadow-orange-100 hidden">
      <div className="flex flex-row items-center gap-[60px]">
        {cardItems.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex flex-row gap-2 items-center">
              <FontAwesomeIcon
                icon={item.icon}
                className="h-6 w-6 text-primary"
              />
              <Typography>
                <p className="text-[14px] font-mulishExtraBold">{item.title}</p>
              </Typography>
            </div>
            <p className="ml-7 text-[13px] text-gray-500 font-mulishSemiBold italic">
              {item.description}
            </p>
          </div>
        ))}
        <Button className="rounded-full px-10 py-4 bg-yellow-700 shadow-md shadow-blue-gray-100">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchCard;
