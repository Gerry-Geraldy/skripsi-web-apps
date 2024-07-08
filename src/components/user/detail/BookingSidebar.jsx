import PropTypes from "prop-types";
import { useMaterialTailwindController } from "../../../context";
import useThemeSwitcherConfig from "../../../utils/themeSwitcherConfig";

const BookingSidebar = ({ price }) => {
  const [controller] = useMaterialTailwindController();
  const { themeColor, tritanopiaColor, protanopiaColor, deuteranopiaColor } =
    controller;

  const { currentButtonColor, currentHoverBgColor } = useThemeSwitcherConfig(
    themeColor,
    tritanopiaColor,
    protanopiaColor,
    deuteranopiaColor
  );
  const handleBooking = () => {
    // Handle booking logic here
    alert("Booking confirmed!");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 border-t rounded-t-md shadow-lg bg-white w-full lg:static z-10 dark:bg-gray-800">
      <div className="mb-4">
        <p className="text-xl font-semibold text-gray-700 dark:text-white">
          Subtotal
        </p>
        <p className="text-3xl font-bold text-priceColor dark:text-green-500">
          {price}
        </p>
      </div>
      <button
        onClick={handleBooking}
        className={`w-full text-white p-2 rounded-md font-semibold  text-[12px] sm:text-[14px] ${currentButtonColor} ${currentHoverBgColor}`}
      >
        Ajukan Sewa
      </button>
      <div className="flex flex-col gap-2 mt-4">
        <button className="w-full border p-2 rounded-md text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-100 text-[12px] sm:text-[14px]">
          <span>Tanya Pemilik</span>
        </button>
      </div>
    </div>
  );
};

BookingSidebar.propTypes = {
  price: PropTypes.string.isRequired,
};

export default BookingSidebar;
