import { useState } from "react";


const BookingSidebar = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [guests, setGuests] = useState(1);

  const handleBooking = () => {
    // Handle booking logic here
    alert("Booking confirmed!");
  };

  return (
    <div className="p-4 border rounded-md shadow-lg bg-white w-full">
      <h2 className="text-xl font-semibold mb-4">Booking</h2>
      <div className="mb-4">
        <label className="block text-gray-700">From</label>
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">To</label>
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">No. Of Guest</label>
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value={1}>1 adult</option>
          <option value={2}>2 adults</option>
          <option value={3}>3 adults</option>
          <option value={4}>4 adults</option>
        </select>
      </div>
      <div className="mb-4">
        <p className="text-xl font-semibold text-gray-700">Subtotal</p>
        <p className="text-3xl font-bold text-yellow-500">$78.90</p>
      </div>
      <button
        onClick={handleBooking}
        className="w-full bg-yellow-500 text-white p-2 rounded-md font-semibold hover:bg-yellow-600"
      >
        Confirm Booking
      </button>
      <div className="flex flex-col gap-2 mt-4">
        <button className="w-full border p-2 rounded-md text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-100">
          <span>Chat The Owner</span>
        </button>
        <button className="w-full border p-2 rounded-md text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-100">
          <span>Share The Activity</span>
        </button>
      </div>
    </div>
  );
};

export default BookingSidebar;
