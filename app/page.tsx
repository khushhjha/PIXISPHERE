'use client';

import { useEffect, useState } from 'react';
import { usePhotographerStore } from '@/lib/store';
import { fetchPhotographers } from '@/lib/api';
import PhotographerCard from '@/components/PhotographerCard';
import FilterSidebar from '@/components/FilterSidebar';
import { Loader2 } from 'lucide-react';

export default function HomePage() {
  const { 
    filteredPhotographers, 
    loading, 
    setPhotographers, 
    setLoading 
  } = usePhotographerStore();
  
  const [displayCount, setDisplayCount] = useState(6);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPhotographers = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchPhotographers();
        console.log('Setting photographers:', data);
        setPhotographers(data);
      } catch (error) {
        console.error('Failed to fetch photographers:', error);
        setError(error instanceof Error ? error.message : 'Failed to load photographers');
      } finally {
        setLoading(false);
      }
    };

    loadPhotographers();
  }, [setPhotographers, setLoading]);

  const displayedPhotographers = filteredPhotographers.slice(0, displayCount);
  const hasMore = displayCount < filteredPhotographers.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
          Professional Photography Services
        </h1>
        <p className="text-yellow-200 text-lg max-w-2xl mx-auto">
          Connect with expert photographers specializing in maternity, newborn, wedding, and lifestyle photography across India
        </p>
      </div>

      {/* Smart Suggestion Strip */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 border border-yellow-300 rounded-xl p-6 mb-8 shadow-2xl">
        <div className="flex items-center">
          <div className="bg-black rounded-full p-3 mr-4">
            <span className="text-yellow-400 font-bold text-sm">✨ AI</span>
          </div>
          <div>
            <p className="text-black font-semibold text-lg">Smart Recommendation</p>
            <p className="text-gray-800">
              🎯 Top-rated outdoor maternity photographers in Bengaluru • Starting from ₹10,000
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-1/4">
          <FilterSidebar />
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="w-8 h-8 animate-spin text-yellow-400" />
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-400 text-lg mb-2">Error loading photographers</p>
              <p className="text-yellow-300 text-sm">{error}</p>
              <p className="text-yellow-400 text-sm mt-4">Make sure the API server is running on http://localhost:3001</p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <p className="text-yellow-300 font-medium">
                  {filteredPhotographers.length} professional photographers available
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {displayedPhotographers.map((photographer) => (
                  <PhotographerCard 
                    key={photographer.id} 
                    photographer={photographer} 
                  />
                ))}
              </div>

              {displayedPhotographers.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-yellow-300 text-lg">No photographers found matching your criteria</p>
                  <p className="text-yellow-400 text-sm mt-2">Try adjusting your filters</p>
                </div>
              )}

              {hasMore && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setDisplayCount(prev => prev + 6)}
                    className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-3 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all font-bold shadow-lg"
                  >
                    Load More Photographers
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}