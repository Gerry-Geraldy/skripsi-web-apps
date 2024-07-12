import PropTypes from "prop-types";
import {
  faBed,
  faCar,
  faUserGroup,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useMaterialTailwindController } from "../../../context";
import useThemeSwitcherConfig from "../../../utils/themeSwitcherConfig";
import useAnimateCard from "../../../utils/hooks/useAnimateCard";

const KostCard = ({ kosts }) => {
  const [controller] = useMaterialTailwindController();
  const { themeColor, tritanopiaColor, protanopiaColor, deuteranopiaColor } =
    controller;
  const cardRefs = useAnimateCard();

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
          className={`w-3 h-3 md:w-4 md:h-4 ${
            i <= rating ? "text-primary" : "text-gray-400"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <section className="overflow-x-auto flex w-full p-10 items-center">
      <div className="flex flex-row gap-3 justify-center items-center mx-auto ">
        {kosts.map((kost, index) => (
          <Link
            to={`/user/kost/${kost.id}`}
            key={index}
            className="w-64 rounded-none flex-shrink-0 transition-transform duration-300 hover:-translate-y-1"
          >
            <Card
              className="w-full flex-shrink-0 dark:bg-gray-800 "
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <CardHeader
                color="blue-gray"
                className="relative rounded-none w-full mx-auto"
              >
                <img
                  src={kost.image}
                  alt={kost.name}
                  className=" h-48 object-cover bg-cover rounded-none w-full "
                />
              </CardHeader>
              <CardBody>
                <h2 className="text-xl mb-2 dark:text-white">{kost.name}</h2>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 font-semibold text-[11px] dark:text-gray-300">
                    <FontAwesomeIcon
                      icon={faBed}
                      className={`h-3 w-3 sm:w-5 sm:h-5 ${currentIconColor}`}
                    />
                    {kost.bed}
                  </div>
                  <div className="flex items-center gap-3 font-semibold text-[11px] dark:text-gray-300">
                    <FontAwesomeIcon
                      icon={faCar}
                      className={`h-3 w-3 sm:w-5 sm:h-5 ${currentIconColor}`}
                    />
                    {kost.parking ? "Parking Lot Available" : "No Parking Lot"}
                  </div>
                  <div className="flex items-center gap-3 font-semibold text-[11px] dark:text-gray-300">
                    <FontAwesomeIcon
                      icon={faUserGroup}
                      className={`h-3 w-3 sm:w-5 sm:h-5 ${currentIconColor}`}
                    />
                    {kost.size}
                  </div>
                </div>
              </CardBody>
              <CardFooter className="border-t-gray-200 dark:border-gray-900 flex flex-row justify-between items-center border border-t-1 dark:text-white">
                <div className="flex flex-col gap-3">
                  <div className="flex">{renderStars(kost.rating)}</div>
                  <p className="text-[12px] sm:text-[14px]">
                    {kost.review} review
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-green-900 dark:text-white">
                    Rp.{kost.price}
                  </h3>
                  <p className="text-[12px] sm:text-[14px]">{kost.day}</p>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

KostCard.propTypes = {
  kosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      bed: PropTypes.string.isRequired,
      parking: PropTypes.bool.isRequired,
      size: PropTypes.string.isRequired,
      review: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      price: PropTypes.string.isRequired,
      day: PropTypes.string.isRequired,
      region: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default KostCard;
