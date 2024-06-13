import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { commentsData } from "../../../constant/detailKostContent";

const Comments = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg w-[90%] mx-auto mt-10">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Customer Review</h2>
        <div className="flex items-center">
          <span className="text-4xl font-bold text-primary">4.30</span>
          <span className="ml-2 text-gray-600">854 Reviews</span>
        </div>
        <div className="flex items-center mt-2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                className={`h-9 w-9 ${i < 4 ? "text-primary" : "text-gray-300"}`}
              />
            ))}
        </div>
      </div>
      <div className="space-y-4">
        {commentsData.map((comment) => (
          <div key={comment.id} className="flex gap-4 p-4 border-t">
            <img
              src={comment.avatar}
              alt={comment.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center">
                <h3 className="text-lg font-semibold">{comment.name}</h3>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="ml-2 text-blue-500"
                />
              </div>
              <p className="text-gray-600 text-sm">{comment.date}</p>
              <div className="flex items-center mt-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className={`h-4 w-4 ${i < comment.rating ? "text-primary" : "text-gray-300"}`}
                    />
                  ))}
              </div>
              <p className="mt-2 text-gray-700">{comment.comment}</p>
              <div className="mt-2 flex items-center text-sm">
                <span className="text-gray-500 mr-2">Helpful?</span>
                <button className="text-green-500 font-semibold">Yes</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
