'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  photographerName: string;
}

export default function InquiryModal({ isOpen, onClose, photographerName }: InquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Inquiry sent successfully!');
    onClose();
    setFormData({ name: '', email: '', phone: '', eventDate: '', message: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-yellow-500">
        <div className="flex justify-between items-center p-6 border-b border-yellow-500">
          <h2 className="text-xl font-semibold text-yellow-400">Send Inquiry to {photographerName}</h2>
          <button onClick={onClose} className="text-yellow-300 hover:text-yellow-400">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-yellow-300 mb-1">Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 bg-gray-800 border border-yellow-500 rounded-md focus:ring-2 focus:ring-yellow-400 text-white"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-yellow-300 mb-1">Email *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2 bg-gray-800 border border-yellow-500 rounded-md focus:ring-2 focus:ring-yellow-400 text-white"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-yellow-300 mb-1">Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-2 bg-gray-800 border border-yellow-500 rounded-md focus:ring-2 focus:ring-yellow-400 text-white"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-yellow-300 mb-1">Event Date</label>
            <input
              type="date"
              value={formData.eventDate}
              onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
              className="w-full p-2 bg-gray-800 border border-yellow-500 rounded-md focus:ring-2 focus:ring-yellow-400 text-white"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-yellow-300 mb-1">Message</label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your photography needs..."
              className="w-full p-2 bg-gray-800 border border-yellow-500 rounded-md focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-400"
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-yellow-500 text-yellow-300 rounded-md hover:bg-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg hover:from-yellow-400 hover:to-yellow-500 font-semibold transition-all duration-300 shadow-md"
            >
              Send Inquiry ✨
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}