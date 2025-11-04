'use client';

import { Photographer } from '@/types';
import { Star, MapPin } from 'lucide-react';
import Link from 'next/link';

interface PhotographerCardProps {
  photographer: Photographer;
}

export default function PhotographerCard({ photographer }: PhotographerCardProps) {
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
        
        <Link 
          href={`/photographer/${photographer.id}`}
          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-3 px-4 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 text-center block font-bold shadow-lg hover:shadow-yellow-500/30"
        >
          View Profile 👑
        </Link>
      </div>
    </div>
  );
}