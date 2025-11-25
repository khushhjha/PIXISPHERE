'use client';

import { useState } from 'react';
import { Photographer } from '@/types';
import { Star, MapPin, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import InquiryModal from './InquiryModal';

interface PhotographerCardProps {
  photographer: Photographer;
}

export default function PhotographerCard({ photographer }: PhotographerCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-2xl overflow-hidden hover:shadow-yellow-500/20 hover:-translate-y-1 transition-all duration-300 border border-yellow-500">
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img 
          src={`https://picsum.photos/400/300?random=${photographer.id}`}
          alt={photographer.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pgo8L3N2Zz4K';
          }}
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-yellow-400 mb-2">{photographer.name}</h3>
        
        <div className="flex items-center text-yellow-300 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{photographer.location}</span>
        </div>
        
        <div className="flex items-center mb-2">
          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
          <span className="text-sm font-medium text-yellow-300">{photographer.rating}</span>
        </div>
        
        <div className="mb-3">
          <span className="text-lg font-bold text-yellow-400">₹{photographer.price.toLocaleString()}</span>
          <span className="text-sm text-yellow-300 ml-1">starting</span>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {photographer.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="px-2 py-1 bg-yellow-500 text-black text-xs rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2">
          <Link 
            href={`/photographer/${photographer.id}`}
            className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-2 px-3 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 text-center block font-bold text-sm shadow-lg"
          >
            View Profile
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-bold text-sm shadow-lg flex items-center justify-center gap-1"
          >
            <MessageCircle className="w-4 h-4" />
            Inquire
          </button>
        </div>
      </div>
      
      <InquiryModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        photographerName={photographer.name}
      />
    </div>
  );
}