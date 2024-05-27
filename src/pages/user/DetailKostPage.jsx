import { useParams } from "react-router-dom";
import { kosts } from "../../constant/infoKostContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";

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
            i <= rating ? "text-orange-400" : "text-gray-400"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <section className="w-[90%] p-4 mt-[100px] lg:mt-[150px] mx-auto">
      <h1 className="text-5xl font-bold">{kost.name}</h1>
      <div className="flex flex-row gap-2 mt-[20px] lg:mt-[50px]">
        <p className="flex gap-2 items-center text-gray-600">
          <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5" />
          {kost.region} <span className="text-2xl"> | </span>
        </p>
        <p className="flex items-center gap-1 text-gray-600">
          <div className="flex ">{renderStars(kost.rating)}</div>
          <p>( {kost.review} review )</p>
        </p>
      </div>
      <div className="mt-[20px] lg:mt-[30px]">
        <img
          src={kost.image}
          alt={kost.name}
          className="w-full h-auto my-4 rounded-sm"
        />
        <div className="flex space-x-2 overflow-x-auto">
          {kost.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`img-${index}`}
              className="w-32 h-32 object-cover rounded-sm"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-5 p-10">
        <div className="flex flex-col border border-white border-b-gray-300 pb-10">
          <h2 className="text-xl font-semibold">Room Specifications</h2>
          <ul>
            <li>{kost.bed}</li>
            <li>{kost.parking ? "Parking Available" : "No Parking"}</li>
            <li>{kost.size}</li>
          </ul>
        </div>
        <div className="flex flex-col border border-white border-b-gray-300 pb-10">
          <h2 className="text-xl font-semibold mt-4">What Is Included</h2>
          <div className="flex flex-row justify-start gap-20">
            <div className="flex flex-wrap">
              {kost.includes.map((item, index) => (
                <div key={index} className="w-full lg:w-1/2">
                  <ul>
                    <li>{item}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4">Safety</h2>
          <ul>
            {kost.safety.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4">Additional Information</h2>
          <div>
            <h3 className="font-bold">House Rules:</h3>
            <ul>
              {kost.additionalInfo.houseRules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
            <h3 className="font-bold">Nearby Places:</h3>
            <ul>
              {kost.additionalInfo.nearbyPlaces.map((place, index) => (
                <li key={index}>{place}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4">Meeting Point Address</h2>
          <p>{kost.meetingPoint}</p>
        </div>
      </div>
    </section>
  );
};

export default DetailKostPage;
