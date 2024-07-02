import { useState } from 'react';
import { kosts } from '../../constant/infoKostContent'; 
import CardFilter from '../../components/user/filter/CardFilter';
import SideBarFilter from '../../components/user/filter/SideBarFilter';

const PopularKost = () => {
  const [filters, setFilters] = useState({
    price: "",
    includes: []
  });

  // Mendapatkan semua opsi includes dari kosts
  const includesOptions = kosts.flatMap(kost => kost.includes).filter((v, i, a) => a.findIndex(t => (t.name === v.name)) === i);

  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => setShowFilters(!showFilters);

  const filteredKosts = kosts.filter(kost => {
    if (filters.price && parseInt(kost.price.replace(/[^0-9]/g, ''), 10) > filters.price) {
      return false;
    }

    if (filters.includes && filters.includes.length > 0) {
      return filters.includes.every(include => 
        kost.includes?.some(item => item.name === include)
      );
    }

    return true;
  });

  return (
    <div className="flex flex-col md:flex-row p-4 bg-gray-100 dark:bg-gray-900">
      <SideBarFilter
        filters={filters}
        setFilters={setFilters}
        includesOptions={includesOptions}
        isVisible={showFilters}
        toggleVisibility={toggleFilters}
      />
      <section className="mt-4 md:mt-[60px] ml-0 md:ml-4 flex flex-col space-y-4 w-full md:w-[90%]">
        {filteredKosts.map(kost => (
          <CardFilter key={kost.id} kost={kost} />
        ))}
      </section>
    </div>
  );
};

export default PopularKost;
