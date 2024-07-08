import { useState } from 'react';
import PropTypes from 'prop-types';

const SideBarFilter = ({ filters, setFilters, includesOptions }) => {
  const [price, setPrice] = useState(filters.price || "");
  const [selectedIncludes, setSelectedIncludes] = useState(filters.includes || []);

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "include") {
      const newIncludes = checked
        ? [...selectedIncludes, value]
        : selectedIncludes.filter((include) => include !== value);
      setSelectedIncludes(newIncludes);
      setFilters(prevFilters => ({
        ...prevFilters,
        includes: newIncludes
      }));
    } else {
      setFilters(prevFilters => ({
        ...prevFilters,
        [name]: value
      }));
    }
  };

  return (
    <div className="w-full md:w-72 p-4 border dark:border-none rounded-md mb-4 md:mb-0 mt-[60px] bg-white dark:bg-gray-800">
      <h3 className="text-xl font-semibold mb-4 dark:text-white">Filters</h3>
      <label className="block mb-4">
        <span className="text-gray-700 dark:text-white">Price:</span>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
            handleFilterChange(e);
          }}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-none rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        />
      </label>
      <div className="block mb-4">
        <span className="text-gray-700 dark:text-white">Includes:</span>
        {includesOptions.map((include, index) => (
          <label key={index} className="block mt-1">
            <input
              type="checkbox"
              name="include"
              value={include.name}
              onChange={handleFilterChange}
              checked={selectedIncludes.includes(include.name)}
              className="mr-2 leading-tight "
            />
            <span className="text-gray-700 dark:text-white text-[12px] sm:text-[14px]">{include.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

SideBarFilter.propTypes = {
  filters: PropTypes.shape({
    price: PropTypes.number,
    includes: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  setFilters: PropTypes.func.isRequired,
  includesOptions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired
  })).isRequired,
};

export default SideBarFilter;
