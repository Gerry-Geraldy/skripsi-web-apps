import { Button } from "@material-tailwind/react";
import { newsArticles } from "../../../constant/homepageContent";
import AnimatedText from "../../../utils/hooks/animatedText";

const NewsCard = () => {
  return (
    <section className="my-10 px-5 w-[90%] mx-auto">
      <AnimatedText>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-3">
          <div>
            <h2 className="text-3xl font-volkhovBold dark:text-white">
              Latest News
            </h2>
            <p className="text-gray-600 mt-2 max-w-md font-mulishSemiBold dark:text-gray-300 text-[12px] sm:text-[14px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit
            </p>
          </div>
          <Button className="bg-gray-800 text-white px-6 py-4 lg:px-8 lg:py-5 rounded-md shadow-lg hover:bg-gray-900">
            View All Posts
          </Button>
        </div>
      </AnimatedText>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {newsArticles.slice(0, 4).map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 transform transition duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-600 dark:text-white">
                {article.author}
              </p>
              <h3 className="text-lg font-bold mt-2 dark:text-gray-300">
                {article.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsCard;
