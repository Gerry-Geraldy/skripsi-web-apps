import {
  faBed,
  faCar,
  faStar,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useMaterialTailwindController } from "../../../context";
import useThemeSwitcherConfig from "../../../utils/themeSwitcherConfig";

const CardFilter = ({ kost }) => {
  const [controller] = useMaterialTailwindController();
  const { themeColor, tritanopiaColor, protanopiaColor, deuteranopiaColor } =
    controller;

  const { currentIconColor } = useThemeSwitcherConfig(
    themeColor,
    tritanopiaColor,
    protanopiaColor,
    deuteranopiaColor
  );
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={`h-4 w-4 ${
            i <= rating ? "text-primary" : "text-gray-400"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <Link to={`/user/kost/${kost.id}`}>
      <div className="border dark:border-none gap-2 rounded-sm flex flex-col lg:flex-row w-full items-start md:items-center bg-white dark:bg-gray-800 shadow-sm shadow-gray-200 dark:shadow-none hover:scale-105 transform transition-transform duration-100">
        <div className="w-full lg:w-[30%] ">
          <img
            src={kost.image}
            alt={kost.name}
            className="w-full h-60 md:h-36 mb-4 md:mb-0 mr-0 md:mr-4 object-cover transition-opacity duration-100 hover:opacity-80"
          />
        </div>
        <div className="flex justify-between items-center w-full p-4">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row item-center gap-2 ">
              <p className="self-center">{renderStars(kost.rating)}</p>
              <span className="text-[14px] dark:text-white">|</span>
              <p className="text-[12px] sm:text-[14px] text-gray-500 dark:text-white">
                ( {kost.review} reviews )
              </p>
            </div>
            <h2 className="text-xl font-semibold dark:text-white">
              {kost.name}
            </h2>
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
              <Typography className="flex items-center gap-1 font-semibold text-[11px] text-gray-500 dark:text-gray-300">
                <FontAwesomeIcon
                  icon={faBed}
                  className={`h-3 w-3 sm:w-5 sm:h-5 ${currentIconColor}`}
                />
                {kost.bed}
              </Typography>
              <Typography className="flex items-center gap-1 font-semibold text-[11px] text-gray-500 dark:text-gray-300">
                <FontAwesomeIcon
                  icon={faCar}
                  className={`h-3 w-3 sm:w-5 sm:h-5 ${currentIconColor}`}
                />
                {kost.parking ? "Parking Lot Available" : "No Parking Lot"}
              </Typography>
              <Typography className="flex items-center gap-1 font-semibold text-[11px] text-gray-500 dark:text-gray-300">
                <FontAwesomeIcon
                  icon={faUserGroup}
                  className={`h-3 w-3 sm:w-5 sm:h-5 ${currentIconColor}`}
                />
                {kost.size}
              </Typography>
            </div>
          </div>
          <div className="self-end lg:self-auto">
            <p className="text-xl text-green-600 font-semibold">
              Rp.{kost.price}
            </p>
            <p className="text-md text-gray-600 font-normal">{kost.day}</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 hover:opacity-50"></div>
      </div>
    </Link>
  );
};

CardFilter.propTypes = {
  kost: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    bed: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    parking: PropTypes.bool.isRequired,
    size: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardFilter;
