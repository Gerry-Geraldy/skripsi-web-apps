import { Typography } from "@material-tailwind/react";
import {
  Jumbotron,
  PopularRegion,
  BannerKost,
  BannerApp,
  PopularKost,
  NewsCard,
} from "../../components/user/homepage";
import { Footer } from "../../components/layouts";
import {
  KostByRegion,
  NewKost,
} from "../../components/user/homepage/FilterKostCard";

const Homepage = () => {
  return (
    <section className="grid-cols-2 h-full">
      <Jumbotron />
      <div className="w-full mb-10">
        <Typography
          variant="h1"
          className="text-center mt-10 mb-5 text-[30px] md:text-[50px]"
        >
          Explore Popular Region
        </Typography>
        <Typography
          variant="small"
          className="font-medium mx-auto text-center w-full max-w-[250px] md:max-w-[450px] text-gray-600"
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit
        </Typography>
      </div>
      <PopularRegion />
      <NewKost />
      <BannerKost />
      <div className="mt-[200px] lg:mt-16 ">
        <KostByRegion />
        <BannerApp />
        <PopularKost />
        <NewsCard />
      </div>
      <Footer />
    </section>
  );
};

export default Homepage;
