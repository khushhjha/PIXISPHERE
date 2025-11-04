'use client';

import Link from 'next/link';
import { Camera, Heart, Baby, PartyPopper, Users } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Heart,
      title: "Maternity Photography",
      description: "Capture the beautiful journey of motherhood with artistic maternity shoots",
      price: "Starting from ₹8,000",
      features: ["Outdoor & Studio Options", "Multiple Outfit Changes", "Partner Inclusion", "Digital Gallery"]
    },
    {
      icon: Baby,
      title: "Newborn Photography",
      description: "Precious moments with your little one in safe, comfortable sessions",
      price: "Starting from ₹12,000",
      features: ["Props & Accessories", "Safety First Approach", "Family Portraits", "Custom Albums"]
    },
    {
      icon: Camera,
      title: "Wedding Photography",
      description: "Complete wedding coverage from ceremonies to celebrations",
      price: "Starting from ₹25,000",
      features: ["Full Day Coverage", "Candid & Traditional", "Pre-wedding Shoots", "Same Day Highlights"]
    },
    {
      icon: PartyPopper,
      title: "Birthday Photography",
      description: "Fun and vibrant birthday party photography for all ages",
      price: "Starting from ₹5,000",
      features: ["Event Coverage", "Cake Smash Sessions", "Group Photos", "Instant Prints"]
    },
    {
      icon: Users,
      title: "Family Portraits",
      description: "Beautiful family portraits that capture your bond and love",
      price: "Starting from ₹6,000",
      features: ["Indoor & Outdoor", "Multiple Generations", "Pet Inclusion", "Seasonal Themes"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
          Photography Services
        </h1>
        <p className="text-yellow-200 text-lg max-w-3xl mx-auto">
          Elite photography services tailored to capture your most precious moments with luxury and expertise
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div key={index} className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl shadow-2xl p-6 hover:shadow-yellow-500/30 transition-all border border-yellow-300">
              <div className="bg-black rounded-lg p-3 w-fit mb-4">
                <IconComponent className="w-6 h-6 text-yellow-400" />
              </div>
              
              <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
              <p className="text-gray-800 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <span className="text-2xl font-bold text-black">{service.price}</span>
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-800">
                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                href="/"
                className="w-full bg-black text-yellow-400 py-2 px-4 rounded-lg hover:bg-gray-900 transition-all text-center block font-bold"
              >
                Find Photographers
              </Link>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <Link 
          href="/"
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium"
        >
          ← Back to Browse Photographers
        </Link>
      </div>
    </div>
  );
}