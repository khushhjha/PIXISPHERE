'use client';

import { usePhotographerStore } from '@/lib/store';
import { Search, Filter } from 'lucide-react';
import { useState, useEffect } from 'react';

const STYLES = ['Outdoor', 'Studio', 'Candid', 'Traditional', 'Indoor'];
const CITIES = ['Bengaluru', 'Delhi', 'Mumbai', 'Hyderabad'];

export default function FilterSidebar() {
  const { filters, setFilters } = usePhotographerStore();
  const [searchInput, setSearchInput] = useState(filters.search);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      setFilters({ search: searchInput });
    }, 300);
    return () => clearTimeout(timer);
  }, [searchInput, setFilters]);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl shadow-2xl border border-yellow-500">
      <div className="flex items-center mb-6 pb-4 border-b border-yellow-500">
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-2 mr-3">
          <Filter className="w-5 h-5 text-black" />
        </div>
        <h2 className="text-xl font-bold text-yellow-400">Filters</h2>
      </div>

      {/* Search */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-yellow-400 mb-2">Search</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Name, location, or tag..."
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-yellow-500 rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-yellow-300 placeholder-yellow-500"
          />
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-yellow-400 mb-2">Price Range</label>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="20000"
            step="1000"
            value={filters.priceRange[1]}
            onChange={(e) => setFilters({ 
              priceRange: [filters.priceRange[0], parseInt(e.target.value)] 
            })}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-yellow-300">
            <span>₹0</span>
            <span>₹{filters.priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-yellow-400 mb-2">Minimum Rating</label>
        <select
          value={filters.minRating}
          onChange={(e) => setFilters({ minRating: parseFloat(e.target.value) })}
          className="w-full p-2 bg-gray-800 border border-yellow-500 rounded-md focus:ring-2 focus:ring-yellow-400 text-yellow-300"
        >
          <option value={0}>Any Rating</option>
          <option value={3}>3+ Stars</option>
          <option value={4}>4+ Stars</option>
          <option value={4.5}>4.5+ Stars</option>
        </select>
      </div>

      {/* Styles */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-yellow-400 mb-2">Photography Styles</label>
        <div className="space-y-2">
          {STYLES.map((style) => (
            <label key={style} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.selectedStyles.includes(style)}
                onChange={(e) => {
                  const newStyles = e.target.checked
                    ? [...filters.selectedStyles, style]
                    : filters.selectedStyles.filter(s => s !== style);
                  setFilters({ selectedStyles: newStyles });
                }}
                className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-yellow-300">{style}</span>
            </label>
          ))}
        </div>
      </div>

      {/* City */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-yellow-400 mb-2">City</label>
        <select
          value={filters.selectedCity}
          onChange={(e) => setFilters({ selectedCity: e.target.value })}
          className="w-full p-2 bg-gray-800 border border-yellow-500 rounded-md focus:ring-2 focus:ring-yellow-400 text-yellow-300"
        >
          <option value="">All Cities</option>
          {CITIES.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      {/* Sort */}
      <div>
        <label className="block text-sm font-medium text-yellow-400 mb-2">Sort By</label>
        <select
          value={filters.sortBy}
          onChange={(e) => setFilters({ sortBy: e.target.value as any })}
          className="w-full p-2 bg-gray-800 border border-yellow-500 rounded-md focus:ring-2 focus:ring-yellow-400 text-yellow-300"
        >
          <option value="rating-desc">Rating: High to Low</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="recent">Recently Added</option>
        </select>
      </div>
    </div>
  );
}