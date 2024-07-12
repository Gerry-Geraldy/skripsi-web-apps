// Jumbotron.jsx
import { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { jumbotronData } from "../../../constant/homepageContent";
import AnimatedText from "../../../utils/hooks/animatedText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Jumbotron = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === jumbotronData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? jumbotronData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative">
      <div className="relative h-[450px] md:h-[750px] w-full overflow-hidden">
        {jumbotronData.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black opacity-50 z-0 w-full h-full"></div>
            <img
              src={item.image}
              alt={`image ${index + 1}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center">
              <AnimatedText>
                <div className="w-3/4 text-center flex flex-col md:w-full items-center mx-auto mt-5">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-9 mt-4 text-3xl lg:text-5xl font-volkhovBold"
                  >
                    {item.heading}
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="text-justify md:text-center mb-12 opacity-80 text-[12px] md:text-[14px] lg:text-[18px] max-w-[180px] md:max-w-[650px] mx-auto lg:text-sm font-mulishSemiBold"
                  >
                    {item.content}
                  </Typography>
                </div>
              </AnimatedText>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 hover:bg-black bg-opacity-50 text-white p-2"
        onClick={goToPrevSlide}
        aria-label="Previous Slide"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 hover:bg-black bg-opacity-50 text-white p-2"
        onClick={goToNextSlide}
        aria-label="Next Slide"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </section>
  );
};

export default Jumbotron;
