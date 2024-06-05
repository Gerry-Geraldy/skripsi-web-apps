import { Typography } from "@material-tailwind/react";
import { events } from "../../../constant/aboutContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const HistoryTimeline = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <Typography variant="h4" className="text-center mb-10 text-blue-600">
          Our History
        </Typography>
        <div className="relative">
          <div className="border-l-4 border-blue-500 absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
          {events.map((event, index) => (
            <div
              key={index}
              className={`mb-8 flex justify-${
                index % 2 === 0 ? "start" : "end"
              } items-center w-full`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg relative">
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2">
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="text-blue-500 text-xl"
                    />
                  </div>
                  <Typography
                    variant="h6"
                    className="mb-2 text-blue-700 font-semibold"
                  >
                    {event.year}
                  </Typography>
                  <Typography className="text-gray-700">
                    {event.description}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;
