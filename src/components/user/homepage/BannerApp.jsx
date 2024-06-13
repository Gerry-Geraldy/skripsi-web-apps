import { Button } from "@material-tailwind/react";
import { region1 } from "../../../../public";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons/faMobile";

const BannerApp = () => {
  return (
    <section className="relative mt-14 h-[500px] flex items-center justify-center bg-gray-200">
      <img
        src={region1}
        alt="Mobile App Banner"
        className="absolute inset-0 w-full h-full object-cover object-center blur-sm"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="flex flex-col lg:flex-row relative justify-center items-center gap-5">
        <div className="flex">
          <img
            src={region1}
            alt="Apps"
            className="h-[200px] lg:h-[400px] w-[120px] lg:w-[250px] object-cover rounded-xl"
          />
          <img
            src={region1}
            alt="Apps"
            className="h-[200px] lg:h-[400px] w-[120px] lg:w-[250px] object-cover mt-10 right-8 relative rounded-xl"
          />
        </div>
        <div className="relative  flex flex-col item-center text-center lg:text-left lg:items-start text-white">
          <h2 className="text-4xl font-bold mb-4 text-center lg:text-left">
            Jasa Tukang Mobile App
          </h2>
          <p className="max-w-md mb-8 text-center lg:text-left">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="flex space-x-4 mx-auto lg:mx-0">
            <Button className="bg-primary text-white px-6 py-4 rounded-full shadow-md hover:bg-orange-700 shadow-primary hover:shadow-md hover:shadow-orange-800 flex flex-row gap-2 items-center">
              <FontAwesomeIcon icon={faApple} className="w-7 h-7 " />
              Download for iOS
            </Button>
            <Button className="bg-primary text-white px-6 py-4 rounded-full shadow-md hover:bg-orange-700 shadow-primary hover:shadow-md hover:shadow-orange-800 flex flex-row gap-2 items-center">
              <FontAwesomeIcon icon={faMobile} className="w-7 h-7" />
              Download for Android
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerApp;
