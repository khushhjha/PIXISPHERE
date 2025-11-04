'use client';

import Link from 'next/link';
import { Users, Award, Camera, Heart } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Professional Photographers" },
    { number: "10,000+", label: "Happy Customers" },
    { number: "25+", label: "Cities Covered" },
    { number: "50,000+", label: "Moments Captured" }
  ];

  const values = [
    {
      icon: Camera,
      title: "Quality First",
      description: "We partner only with verified professional photographers who meet our high standards"
    },
    {
      icon: Heart,
      title: "Memorable Moments",
      description: "Every photograph tells a story, and we ensure yours is captured beautifully"
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Your satisfaction is our priority, from booking to final delivery"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Award-winning photographers and consistently high-quality service delivery"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-6">
          About Pixisphere
        </h1>
        <p className="text-yellow-200 text-lg max-w-4xl mx-auto leading-relaxed">
          Pixisphere is India's premier photography platform that connects customers with professional photographers 
          for life's most precious moments. Founded in 2020, we've revolutionized how people find and book 
          professional photography services across the country.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2">
              {stat.number}
            </div>
            <div className="text-yellow-300 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Mission Section */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl p-8 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Our Mission</h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            To make professional photography accessible to everyone by creating a trusted platform where 
            customers can easily discover, compare, and book the perfect photographer for their special occasions. 
            We believe every moment deserves to be captured beautifully.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">Why Choose Pixisphere</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl shadow-2xl p-6 border border-yellow-300">
                <div className="bg-black rounded-lg p-3 w-fit mb-4">
                  <IconComponent className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{value.title}</h3>
                <p className="text-gray-800">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl shadow-2xl p-8 mb-12 border border-yellow-300">
        <h2 className="text-3xl font-bold text-center text-black mb-8">Our Story</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-800 mb-6 leading-relaxed">
            Pixisphere was born from a simple vision: finding the perfect photographer should be an elegant experience. 
            Our founders, passionate about photography and technology, noticed the gap between talented photographers 
            and customers who needed their services.
          </p>
          <p className="text-gray-800 mb-6 leading-relaxed">
            Today, we're proud to be the bridge that connects families, couples, and individuals with skilled 
            photographers who understand the importance of capturing life's precious moments. From intimate 
            maternity shoots to grand wedding celebrations, we ensure every story is told through beautiful imagery.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Join thousands of satisfied customers who have found their perfect photographer through Pixisphere. 
            Your moments are precious, and we're here to help you preserve them forever.
          </p>
        </div>
      </div>

      <div className="text-center">
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