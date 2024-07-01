import { Typography } from "@material-tailwind/react";
import { teamMembers } from "../../../constant/aboutContent";

const TeamMembers = () => {


  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <Typography variant="h1" className="text-center mb-10 font-volkhovBold dark:text-white">
          Our Team
        </Typography>
        <div className="flex flex-row justify-center gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] rounded-full mx-auto mb-4 object-cover"
              />
              <Typography variant="h6" className="dark:text-white text-headingBlack">{member.name}</Typography>
              <Typography className="text-gray-600 dark:text-white">
                {member.position}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers
