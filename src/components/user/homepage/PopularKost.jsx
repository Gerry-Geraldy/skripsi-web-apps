import { Button } from "@material-tailwind/react";
import { kostImages } from "../../../constant/homepageContent";

const PopularKost = () => {
  return (
    <section className="my-10 px-5 w-[90%] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-3">
        <div>
          <h2 className="text-4xl font-bold font-volkhovBold text-left text-headingBlack">
            Popular Kost
          </h2>
          <p className="text-gray-500 mt-2 w-full max-w-md text-left">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <Button className="bg-gray-800 text-white px-6 py-4 lg:px-8 lg:py-5 rounded-md shadow-lg hover:bg-gray-900">
          View All Kost
        </Button>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kostImages.map((kost) => (
          <div
            key={kost.id}
            className="rounded-lg overflow-hidden shadow-lg lg:h-[300px] lg:w-[265px] w-full h-[90px]"
          >
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt={kost.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularKost;
