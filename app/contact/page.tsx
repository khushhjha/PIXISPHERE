'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@pixisphere.com",
      subtext: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91-9876543210",
      subtext: "Mon-Sat, 9 AM - 7 PM IST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Koramangala, Bengaluru",
      subtext: "Karnataka, India - 560034"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Sat: 9 AM - 7 PM",
      subtext: "Sunday: 10 AM - 4 PM"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
          Contact Us
        </h1>
        <p className="text-yellow-200 text-lg max-w-3xl mx-auto">
          Have questions about our services or need help finding the perfect photographer? 
          We're here to help you capture your precious moments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-8">Get in Touch</h2>
          
          <div className="space-y-6 mb-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="flex items-start">
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-3 mr-4">
                    <IconComponent className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-yellow-400 mb-1">{info.title}</h3>
                    <p className="text-yellow-300 font-medium">{info.details}</p>
                    <p className="text-yellow-200 text-sm">{info.subtext}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* FAQ Section */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl p-6">
            <h3 className="font-bold text-black mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">How do I book a photographer?</h4>
                <p className="text-gray-700 text-sm">Browse our photographers, view their profiles, and click "Send Inquiry" to get started.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">What's included in the pricing?</h4>
                <p className="text-gray-700 text-sm">Pricing varies by photographer and premium package. Each profile shows detailed pricing information.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">Can I cancel or reschedule?</h4>
                <p className="text-gray-700 text-sm">Cancellation policies vary by photographer. Contact us for assistance with changes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl shadow-2xl p-8 border border-yellow-300">
            <h2 className="text-2xl font-bold text-black mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 bg-white border border-yellow-600 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 bg-white border border-yellow-600 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-2">Subject *</label>
                <select
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full p-3 bg-white border border-yellow-600 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="booking">Booking Assistance</option>
                  <option value="photographer">Become a Photographer</option>
                  <option value="technical">Technical Support</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-2">Message *</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 bg-white border border-yellow-600 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-yellow-400 py-3 px-6 rounded-lg hover:bg-gray-900 transition-all font-bold flex items-center justify-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
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