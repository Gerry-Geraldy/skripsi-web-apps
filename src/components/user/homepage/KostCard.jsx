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
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const KostCard = ({ kosts }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={`w-4 h-4 md:w-5 md:h-5 ${
            i <= rating ? "text-primary" : "text-gray-400"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <section className="overflow-x-auto flex w-full">
      <div className="flex flex-row gap-5 justify-center items-center mx-auto">
        {kosts.map((kost, index) => (
          <Link to={`/user/kost/${kost.id}`} key={index} className="w-80 rounded-none flex-shrink-0">
            <Card className="w-full rounded-none flex-shrink-0">
              <CardHeader color="blue-gray" className="relative rounded-none w-full mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                  className="h-56 object-cover rounded-none w-full"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {kost.name}
                </Typography>
                <div className="flex flex-col gap-2">
                  <Typography className="flex items-center gap-3 font-semibold text-[11px]">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="h-3 w-3 sm:w-4 sm:h-4 md:w-6 md:h-6"
                    />
                    {kost.bed}
                  </Typography>
                  <Typography className="flex items-center gap-3 font-semibold text-[11px]">
                    <FontAwesomeIcon
                      icon={faCar}
                      className="h-3 w-3 sm:w-4 sm:h-4 md:w-6 md:h-6"
                    />
                    {kost.parking ? "Parking Lot Available" : "No Parking Lot"}
                  </Typography>
                  <Typography className="flex items-center gap-3 font-semibold text-[11px]">
                    <FontAwesomeIcon
                      icon={faUserGroup}
                      className=" h-3 w-3 sm:w-4 sm:h-4 md:w-6 md:h-6"
                    />
                    {kost.size}
                  </Typography>
                </div>
              </CardBody>
              <CardFooter className="border-t-gray-200 flex flex-row justify-between items-center border border-t-1">
                <div className="flex flex-col gap-3 mt-2 lg:mt-1">
                 <div className="flex ">{renderStars(kost.rating)}</div>
                  <p>{kost.review} review</p>
                </div>
                <div className="flex flex-col gap-1">
                  <h5 className="text-[15px] sm:text-[16px] font-volkhovBold text-priceColor">
                    Rp.{kost.price}
                  </h5>
                  <p>{kost.day}</p>
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
      id: PropTypes.number.isRequired, // Tambahkan id sebagai properti wajib
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
