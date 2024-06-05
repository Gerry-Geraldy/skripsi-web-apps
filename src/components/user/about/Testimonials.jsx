import { Typography } from "@material-tailwind/react";
import { testimonials } from "../../../constant/aboutContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <Typography variant="h4" className="text-center mb-10 text-orange-400">
          Testimonials
        </Typography>
        <div className="flex flex-nowrap justify-start md:justify-center overflow-x-auto space-x-6 pb-4 pl-4 md:pl-0">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white flex-shrink-0 p-6 rounded-lg shadow-lg text-center max-w-[180px] lg:max-w-xs transition-transform transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="text-orange-400 text-2xl"
                />
              </div>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-orange-500 object-cover"
              />
              <Typography className="font-semibold text-orange-400">
                {testimonial.name}
              </Typography>
              <Typography className="text-gray-700 mt-2">
                {testimonial.comment}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
