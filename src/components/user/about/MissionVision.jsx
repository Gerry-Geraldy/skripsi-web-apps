import { Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faEye } from "@fortawesome/free-solid-svg-icons";

const MissionVision = () => {
  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <Typography variant="h4" className="text-center mb-10 text-blue-600 font-volkhovBold">
          Our Mission & Vision
        </Typography>
        <div className="flex flex-wrap justify-around max-w-5xl mx-auto">
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-t-4 border-blue-600">
              <div className="flex justify-center mb-4">
                <FontAwesomeIcon icon={faBullseye} className="text-blue-600 text-3xl" />
              </div>
              <Typography variant="h5" className="mb-4 text-center text-blue-600 font-volkhovBold">
                Our Mission
              </Typography>
              <Typography className="text-gray-700 dark:text-white text-center font-mulishSemiBold">
                To provide a seamless experience for finding and managing boarding houses. We aim to make the process simple, efficient, and hassle-free.
              </Typography>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-t-4 border-green-600">
              <div className="flex justify-center mb-4">
                <FontAwesomeIcon icon={faEye} className="text-green-600 text-3xl" />
              </div>
              <Typography variant="h5" className="mb-4 text-center text-green-600 font-volkhovBold">
                Our Vision
              </Typography>
              <Typography className="text-gray-700 dark:text-white text-center font-mulishSemiBold">
                To become the leading platform in boarding house management, known for our innovation, customer satisfaction, and reliability.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
