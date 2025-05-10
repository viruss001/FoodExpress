import React, { useState, useContext } from 'react';
import Context from '../../Context/context';

function Filter() {
  const {  setResponseData, originalData ,responseData} = useContext(Context);
  const [filters, setFilters] = useState({
    foodType: '',
    priceRange: '',
    sortOption: ''
  });

  const applyFilters = () => {
      let filtered = [...originalData];
    
    // Apply food type filter
    if (filters.foodType) {
      filtered = filtered.filter(item => 
        filters.foodType === 'veg' ? item.veg : !item.veg
      );
    }

    // Apply price range filter
    if (filters.priceRange) {
      filtered = filtered.filter(item => {
        if (filters.priceRange === 'lt-300') return item.price < 300;
        if (filters.priceRange === '300-600') return item.price >= 300 && item.price <= 600;
        return true;
      });
    }

    // Apply sorting
    if (filters.sortOption) {
      filtered.sort((a, b) => {
        if (filters.sortOption === 'price-asc') return a.price - b.price;
        if (filters.sortOption === 'price-desc') return b.price - a.price;
        if (filters.sortOption === 'rating-desc') return parseFloat(b.Rating) - parseFloat(a.Rating);
        return 0;
      });
    }

    setResponseData(filtered);
    document.getElementById('filter-modal').close();
  };

  const resetFilters = () => {
    setFilters({
      foodType: '',
      priceRange: '',
      sortOption: ''
    });
    setResponseData([...originalData]);
    document.getElementById('filter-modal').close();
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex justify-center items-center gap-2 p-4">
      {/* Filter Button & Modal */}
      <button 
        className="btn btn-dash" 
        onClick={() => document.getElementById('filter-modal').showModal()}
        aria-label="Open filters"
      >
        Filters
      </button>
      
      <dialog id="filter-modal" className="modal">
        <div className="modal-box">
          <form method="dialog" className="absolute top-2 right-2">
            <button className="btn btn-circle btn-sm" aria-label="Close filters">✕</button>
          </form>
          <h3 className="text-xl font-bold mb-6">Filter Options</h3>
          
          {/* Food Type Filter */}
          <div className="mb-8">
            <h4 className="font-semibold mb-3">Food Type</h4>
            <div className="join">
              {['', 'veg', 'non-veg'].map((type) => (
                <React.Fragment key={type || 'all'}>
                  <input
                    type="radio"
                    name="foodType"
                    id={type || 'all'}
                    className="hidden"
                    value={type}
                    checked={filters.foodType === type}
                    onChange={handleFilterChange}
                  />
                  <label
                    htmlFor={type || 'all'}
                    className={`join-item btn ${filters.foodType === type ? 'btn-primary' : ''}`}
                  >
                    {type === 'veg' ? 'Veg' : type === 'non-veg' ? 'Non-Veg' : 'All'}
                  </label>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="mb-8">
            <h4 className="font-semibold mb-3">Price Range</h4>
            <div className="join">
              {['', 'lt-300', '300-600'].map((range) => (
                <React.Fragment key={range || 'all-prices'}>
                  <input
                    type="radio"
                    name="priceRange"
                    id={range || 'all-prices'}
                    className="hidden"
                    value={range}
                    checked={filters.priceRange === range}
                    onChange={handleFilterChange}
                  />
                  <label
                    htmlFor={range || 'all-prices'}
                    className={`join-item btn ${filters.priceRange === range ? 'btn-primary' : ''}`}
                  >
                    {!range ? 'All Prices' : range === 'lt-300' ? '< ₹300' : '₹300 - ₹600'}
                  </label>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="modal-action flex gap-2">
            <button 
              type="button" 
              className="btn btn-outline" 
              onClick={resetFilters}
            >
              Reset All
            </button>
            <button 
              type="button" 
              className="btn btn-primary" 
              onClick={applyFilters}
            >
              Apply Filters
            </button>
          </div>
        </div>
      </dialog>

      {/* Sort Dropdown */}
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-dash">
          Sort By
        </div>
        <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-10">
          {[
            { value: 'price-asc', label: 'Price: Low to High' },
            { value: 'price-desc', label: 'Price: High to Low' },
            { value: 'rating-desc', label: 'Rating: High to Low' }
          ].map((option) => (
            <li key={option.value}>
              <label className="label cursor-pointer">
                <span className="label-text">{option.label}</span>
                <input 
                  type="radio" 
                  name="sortOption"
                  value={option.value}
                  checked={filters.sortOption === option.value}
                  onChange={() => setFilters(prev => ({ ...prev, sortOption: option.value })
                
                )}
                 
                  className="radio radio-primary"
                />
              </label>
            </li>
          ))}
          <li>
            <button 
              className="btn btn-ghost btn-sm w-full"
              onClick={() => setFilters(prev => ({ ...prev, sortOption: '' }))}
            >
              Clear Sort
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Filter;