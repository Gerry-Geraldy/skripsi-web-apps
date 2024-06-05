import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faStar,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { banner1, region1 } from "../../../../public"; 

const BannerKost = () => {
  return (
    <section className="relative mt-24 shadow-sm h-[450px] w-full">
      <div className="relative h-[620px] lg:h-full w-full">
        <img
          src={banner1}
          alt="banner kost"
          className="h-full w-full object-cover bg-center blur-sm"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col lg:flex-row items-center justify-center p-8 h-full">
          <div className="p-3">
            <img
              src={region1}
              alt="Kost Ibu Made"
              className="w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] object-cover rounded-full"
            />
          </div>
          <div className="ml-8 mt-4 text-white flex flex-col gap-3">
            <div className="bg-blue-200 text-white p-2 rounded-full text-sm inline-block w-[40%] lg:w-[30%] text-center">
              <p className="font-bold text-black">TRENDING NOW</p>
            </div>
            <h2 className="text-4xl font-bold">Kost Ibu Made</h2>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                <span className="mr-2">Denpasar Bali</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faStar} className="mr-2" />
                <span>4.9 (300 reviews)</span>
              </div>
            </div>
            <p className="mt-2 max-w-lg text-justify lg:text-left">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="flex flex-row justify-start items-center gap-10">
              <button className="mt-4 bg-orange-500 px-8 py-3 rounded-full shadow-md hover:shadow-md hover:shadow-orange-800 hover:bg-orange-700 shadow-orange-400 text-center  font-semibold text-black">
                Book Now
              </button>
              <div className="mt-4 flex space-x-2">
                <button className="p-2 w-12 h-12 rounded-full shadow-lg bg-white bg-opacity-40 flex items-center justify-center hover:bg-white hover:bg-opacity-100 hover:text-black">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                <button className="p-2 w-12 h-12 rounded-full shadow-lg bg-white bg-opacity-40 flex items-center justify-center hover:bg-white hover:bg-opacity-100 hover:text-black">
                  <FontAwesomeIcon icon={faShare} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerKost;
