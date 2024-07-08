import { Button } from "@material-tailwind/react";
import { kosts } from "../../../constant/infoKostContent";
import { Link } from "react-router-dom";
import AnimatedText from "../../../utils/hooks/animatedText";

const PopularKost = () => {
  return (
    <section className="my-10 px-5 w-[90%] mx-auto">
      <AnimatedText>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-3">
          <div>
            <h2 className="text-4xl font-bold font-volkhovBold text-left text-headingBlack dark:text-white">
              Popular Kost
            </h2>

            <p className="text-gray-500 mt-2 w-full max-w-md text-left dark:text-gray-300 text-[12px] sm:text-[14px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <Button className="bg-gray-800 text-white px-6 py-4 lg:px-8 lg:py-5 rounded-md shadow-lg hover:bg-gray-900 ">
            View All Kost
          </Button>
        </div>
      </AnimatedText>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kosts.map((kost, index) => (
          <Link
            to={`/user/kost/${kost.id}`}
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg lg:h-[290px] lg:w-[255px] w-full h-[90px] group"
          >
            <img
              src={kost.image}
              alt={kost.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-70"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-white p-4">
              <h3 className="text-xl font-bold">{kost.name}</h3>
              <p className="text-sm">{kost.region}</p>
              <p className="text-sm">
                {kost.price} {kost.day}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularKost;
