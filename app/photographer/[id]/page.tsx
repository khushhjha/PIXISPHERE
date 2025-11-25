'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchPhotographer } from '@/lib/api';
import { Photographer } from '@/types';
import InquiryModal from '@/components/InquiryModal';
import { Star, MapPin, Camera, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function PhotographerProfile() {
  const params = useParams();
  const [photographer, setPhotographer] = useState<Photographer | null>(null);
  const [loading, setLoading] = useState(true);
  const [showInquiry, setShowInquiry] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const loadPhotographer = async () => {
      try {
        const id = parseInt(params.id as string);
        const data = await fetchPhotographer(id);
        setPhotographer(data);
      } catch (error) {
        console.error('Failed to fetch photographer:', error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      loadPhotographer();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  if (!photographer) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Photographer Not Found</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← Back to Photographers
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === photographer.portfolio.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? photographer.portfolio.length - 1 : prev - 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Link 
        href="/" 
        className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Photographers
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Gallery */}
        <div>
          <div className="relative bg-gray-200 rounded-lg overflow-hidden mb-4" style={{ aspectRatio: '4/3' }}>
            <img 
              src={`https://picsum.photos/800/600?random=${photographer.id + currentImageIndex + 10}`}
              alt={`${photographer.name} portfolio ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkdhbGxlcnkgSW1hZ2U8L3RleHQ+Cjwvc3ZnPgo=';
              }}
            />
            
            {photographer.portfolio.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-4 gap-2">
            {photographer.portfolio.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`aspect-square bg-gray-200 rounded-md overflow-hidden border-2 ${
                  currentImageIndex === index ? 'border-blue-500' : 'border-transparent'
                }`}
              >
                <img 
                  src={`https://picsum.photos/150/150?random=${photographer.id + index + 20}`}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltZzwvdGV4dD4KPC9zdmc+Cg==';
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Details */}
        <div>
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-lg p-8 border border-yellow-500">
            <h1 className="text-3xl font-bold text-yellow-400 mb-4">{photographer.name}</h1>
            
            <div className="flex items-center text-yellow-300 mb-4">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{photographer.location}</span>
            </div>

            <div className="flex items-center mb-4">
              <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
              <span className="font-medium text-lg text-yellow-300">{photographer.rating}</span>
              <span className="text-yellow-200 ml-2">({photographer.reviews.length} reviews)</span>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-bold text-yellow-400">₹{photographer.price.toLocaleString()}</span>
              <span className="text-yellow-300 ml-2">starting price</span>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-yellow-400 mb-2">Styles</h3>
              <div className="flex flex-wrap gap-2">
                {photographer.styles.map((style) => (
                  <span key={style} className="px-3 py-1 bg-yellow-500 text-black rounded-full text-sm font-medium">
                    {style}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-yellow-400 mb-2">Specialties</h3>
              <div className="flex flex-wrap gap-2">
                {photographer.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-yellow-400 mb-2">About</h3>
              <p className="text-yellow-200">{photographer.bio}</p>
            </div>

            <button
              onClick={() => setShowInquiry(true)}
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-4 px-6 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              📞 Send Inquiry
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-yellow-400 mb-6">Reviews</h2>
        <div className="space-y-6">
          {photographer.reviews.map((review, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-lg p-6 border border-yellow-500">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-yellow-400">{review.name}</h4>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-yellow-300 text-sm">{review.date}</span>
              </div>
              <p className="text-yellow-200">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={showInquiry}
        onClose={() => setShowInquiry(false)}
        photographerName={photographer.name}
      />
    </div>
  );
}