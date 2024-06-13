import { useParams } from "react-router-dom";
import { kosts } from "../../constant/infoKostContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { BookingSidebar, Comments } from "../../components/user/detail";
import { NewKost } from "../../components/user/homepage/FilterKostCard";
import { Typography } from "@material-tailwind/react";
import { maps } from "../../../public";

const DetailKostPage = () => {
  const { id } = useParams();
  const kost = kosts.find((k) => k.id === parseInt(id));

  if (!kost) {
    return <div>Kost tidak ditemukan</div>;
  }
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={`h-3 w-3 sm:w-4 sm:h-4 md:w-6 md:h-6 ${
            i <= rating ? "text-primary" : "text-gray-400"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <section className="w-[90%] mx-auto flex flex-col">
      <div className="w-[90%] mt-[100px] lg:mt-[150px] mx-auto flex flex-col lg:flex-row gap-4 justify-center">
        <div className="w-full lg:w-[70%]">
          <h1 className="text-5xl font-bold">{kost.name}</h1>
          <div className="flex flex-row gap-2 mt-[20px] lg:mt-[50px]">
            <p className="flex gap-2 items-center text-gray-600">
              <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5" />
              {kost.region} <span className="text-2xl"> | </span>
            </p>
            <p className="flex items-center gap-1 text-gray-600">
              <div className="flex ">{renderStars(kost.rating)}</div>
              <p>( {kost.review} reviews )</p>
            </p>
          </div>
          <div className="mt-[20px] lg:mt-[30px]">
            <img
              src={kost.image}
              alt={kost.name}
              className="w-full h-[350px] lg:h-[550px] my-4 rounded-sm object-cover"
            />
            <div className="flex space-x-2 overflow-x-auto">
              {kost.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`img-${index}`}
                  className="w-full h-28 lg:h-36 object-cover rounded-sm"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-5 p-10">
            <div className="flex flex-col border border-white border-b-gray-300 pb-10">
              <h2 className="text-xl font-semibold">Room Specifications</h2>
              <ul className="flex flex-col gap-2">
                {kost.roomSpecifications.map((spec, index) => (
                  <li key={index} className="flex items-center gap-2 ">
                    <FontAwesomeIcon icon={spec.icon} className="w-5 h-5" />
                    {spec.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col border border-white border-b-gray-300 pb-10">
              <h2 className="text-xl font-semibold mt-4">What Is Included</h2>
              <div className="flex flex-wrap">
                {kost.includes.map((include, index) => (
                  <div
                    key={index}
                    className="w-full lg:w-1/2 flex items-center gap-2 mt-2"
                  >
                    <FontAwesomeIcon icon={include.icon} className="w-5 h-5" />
                    <span>{include.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col border border-white border-b-gray-300 pb-10">
              <h2 className="text-xl font-semibold mt-4">Safety</h2>
              <div className="flex flex-wrap">
                {kost.safety.map((item, index) => (
                  <div
                    key={index}
                    className="w-full lg:w-1/2 flex items-center gap-2 mt-2"
                  >
                    <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col border border-white border-b-gray-300 pb-10">
              <h2 className="text-xl font-semibold mt-4">
                Meeting Point Address
              </h2>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={kost.meetingPoint.icon}
                  className="w-5 h-5"
                />
                <span>{kost.meetingPoint.name}</span>
              </div>
            </div>
            <div className="flex flex-col border border-white border-b-gray-300 pb-10">
              <h2 className="text-xl font-semibold mt-4">
                Additional Information
              </h2>
              <div className="mt-2 flex flex-col gap-10">
                <div>
                  <h3 className="font-bold">House Rules:</h3>
                  <ul>
                    {kost.additionalInfo.houseRules.map((rule, index) => (
                      <li key={index} className="flex items-center gap-2 mt-2">
                        <FontAwesomeIcon icon={rule.icon} className="w-5 h-5" />
                        {rule.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold">Nearby Places:</h3>
                  <ul>
                    {kost.additionalInfo.nearbyPlaces.map((place, index) => (
                      <li key={index} className="flex items-center gap-2 mt-2">
                        <FontAwesomeIcon
                          icon={place.icon}
                          className="w-5 h-5"
                        />
                        {place.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <Typography variant="paragraph" className="text"><a href="#" className="text-green-500 underline text-[12px]">Open in Google Maps</a></Typography>
                  <img src={maps} alt="maps in google" className="object-cover h-[400px] w-full rounded-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[30%] lg:sticky top-24 h-fit mt-10 lg:mt-[135px] pt-2">
          <BookingSidebar price={`Rp ${kost.price}`} />
        </div>
      </div>
      <div className="flex flex-col gap-5 mx-auto z-0 w-[90%] pb-16 border border-white border-b-gray-300">
        <Typography variant="h3" className="mb-5"> Related kost in today </Typography>
        <NewKost />
      </div>
      <div className="flex flex-col gap-5 mx-auto z-0 w-[90%] pb-16 border border-white border-b-gray-300">
      <Typography variant="h3" className="mb-5"> Related kost in denpasar </Typography>
        <NewKost />
      </div>
     <Comments/>
    </section>
  );
};

export default DetailKostPage;
