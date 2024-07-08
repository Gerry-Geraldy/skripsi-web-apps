/* eslint-disable react/no-unescaped-entities */
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const AboutDescription = () => {
  return (
    <div className="flex justify-center mt-10 px-4 ">
      <Card className="w-full max-w-5xl transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl ">
        <CardBody className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 p-6 border border-gray-300 dark:border-none rounded-lg bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 from-orange-50 to-white ">
          <div className="lg:w-1/3">
            <Typography variant="small" className="uppercase font-medium text-primary mb-2 font-mulishSemiBold">
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
              Know About Us
            </Typography>
            <Typography variant="h3" color="blue-gray" className="font-bold text-primary font-volkhovBold">
              We Make Finding and Managing Kosts Easy
            </Typography>
          </div>
          <div className="lg:w-1/2">
            <Typography className="text-gray-700 dark:text-white font-mulishSemiBold text-[12px] md:text-[14px]">
              MariKost is a comprehensive platform designed to streamline the management and search of boarding houses. Whether you're looking for a cozy place to stay or managing a property, MariKost provides the tools and features you need for a seamless experience. Our mission is to make finding and managing kosts simple, efficient, and hassle-free. Join us and experience a new way of kost management today!
            </Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default AboutDescription;
