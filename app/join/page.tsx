'use client';

import { useState } from 'react';
import Link from 'next/link';
import { User, Mail, Phone, MapPin, Camera, Lock, Eye, EyeOff } from 'lucide-react';

interface JoinFormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  specialties: string[];
  portfolio: string;
  password: string;
  confirmPassword: string;
}

export default function JoinPage() {
  const [formData, setFormData] = useState<JoinFormData>({
    name: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    specialties: [],
    portfolio: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const specialtyOptions = ['Maternity', 'Newborn', 'Wedding', 'Birthday', 'Portrait', 'Family', 'Event'];

  const handleSpecialtyChange = (specialty: string) => {
    const newSpecialties = formData.specialties.includes(specialty)
      ? formData.specialties.filter(s => s !== specialty)
      : [...formData.specialties, specialty];
    setFormData({ ...formData, specialties: newSpecialties });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert('Thank you for joining! Your application will be reviewed within 24 hours.');
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl shadow-2xl p-8 border border-yellow-300">
          <div className="text-center mb-8">
            <div className="bg-black rounded-full p-3 w-fit mx-auto mb-4">
              <Camera className="text-yellow-400 w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-black">Join as Photographer</h2>
            <p className="text-gray-800 mt-2">Share your talent with customers across India</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-yellow-600 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-yellow-600 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-yellow-600 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">Location *</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-yellow-600 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="City, State"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Years of Experience *</label>
              <select
                required
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                className="w-full p-3 bg-white border border-yellow-600 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="">Select experience</option>
                <option value="0-1">0-1 years</option>
                <option value="2-5">2-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Photography Specialties *</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {specialtyOptions.map((specialty) => (
                  <label key={specialty} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.specialties.includes(specialty)}
                      onChange={() => handleSpecialtyChange(specialty)}
                      className="mr-2 rounded border-yellow-600 text-black focus:ring-black"
                    />
                    <span className="text-sm text-gray-800">{specialty}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Portfolio Website/Instagram</label>
              <input
                type="url"
                value={formData.portfolio}
                onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                className="w-full p-3 bg-white border border-yellow-600 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="https://your-portfolio.com or @instagram"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Password *</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-10 pr-12 py-3 bg-white border border-yellow-600 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Create password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">Confirm Password *</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full pl-10 pr-12 py-3 bg-white border border-yellow-600 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Confirm password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <input type="checkbox" required className="mr-2 rounded border-yellow-600 text-black focus:ring-black" />
              <span className="text-sm text-gray-800">
                I agree to the <a href="#" className="text-black hover:text-gray-800 font-medium">Terms of Service</a> and <a href="#" className="text-black hover:text-gray-800 font-medium">Privacy Policy</a>
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-yellow-400 py-3 px-4 rounded-lg hover:bg-gray-900 transition-all font-bold"
            >
              Submit Application
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-800">
              Already have an account?{' '}
              <Link href="/signin" className="text-black hover:text-gray-800 font-bold">
                Sign In
              </Link>
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link 
            href="/"
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}