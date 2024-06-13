import { Typography } from "@material-tailwind/react";
import {
  Jumbotron,
  PopularRegion,
  BannerKost,
  BannerApp,
  PopularKost,
  NewsCard,
} from "../../components/user/homepage";
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
          className="text-center mt-10 mb-5 text-[30px] md:text-[50px] font-volkhovBold text-headingBlack"
        >
          Explore Popular Region
        </Typography>
        <Typography
          variant="small"
          className="font-medium mx-auto text-center w-full max-w-[250px] md:max-w-[650px] text-gray-500 font-mulishSemiBold text-[16px]"
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit
        </Typography>
      </div>
      <PopularRegion />
      <NewKost />
      <BannerKost/>
      <div className="mt-[300px] lg:mt-16 ">
        <KostByRegion />
        <BannerApp />
        <PopularKost />
        <NewsCard />
      </div>
    </section>
  );
};

export default Homepage;
