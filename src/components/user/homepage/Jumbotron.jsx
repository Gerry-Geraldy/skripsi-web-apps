// Jumbotron.jsx
import { Carousel, Typography } from "@material-tailwind/react";
import { jumbotronData } from "../../../constant/homepageContent";
import SearchCard from "./SearchCard";

const Jumbotron = () => {
  return (
    <section className="">
      <Carousel className=" ">
        {jumbotronData.map((item, index) => (
          <div key={index} className="relative h-full w-full">
                  <div className="absolute inset-0 bg-black opacity-30 z-0 w-fullh-[450px] md:h-[750px]"></div>
            <img
              src={item.image}
              alt={`image ${index + 1}`}
              className=" h-[450px] md:h-[750px] w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center ">
              <div className="w-3/4 text-center flex flex-col  md:w-2/4 ">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-9 mt-4  text-3xl  lg:text-5xl"
                >
                  {item.heading}
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="text-justify md:text-center mb-12 opacity-80 text-[12px] md:text-[14px] lg:text[18px] max-w-[180px] md:max-w-[650px] mx-auto lg-text-sm"
                >
                  {item.content}
                </Typography>
              </div>
            </div>
            <SearchCard />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Jumbotron;
