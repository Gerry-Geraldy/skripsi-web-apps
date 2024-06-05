import { Typography } from "@material-tailwind/react";
import { teamMembers } from "../../../constant/aboutContent";

const TeamMembers = () => {


  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <Typography variant="h4" className="text-center mb-10">
          Our Team
        </Typography>
        <div className="flex flex-row justify-center gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] rounded-full mx-auto mb-4 object-cover"
              />
              <Typography variant="h6">{member.name}</Typography>
              <Typography className="text-gray-600">
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
