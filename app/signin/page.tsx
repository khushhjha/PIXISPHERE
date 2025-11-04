'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Sign in functionality will be implemented soon!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl shadow-2xl p-8 border border-yellow-300">
          <div className="text-center mb-8">
            <div className="bg-black rounded-full p-3 w-fit mx-auto mb-4">
              <span className="text-yellow-400 font-bold text-lg">P</span>
            </div>
            <h2 className="text-3xl font-bold text-black">Welcome Back</h2>
            <p className="text-gray-800 mt-2">Sign in to your Pixisphere account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-black mb-2">Email Address</label>
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

            <div>
              <label className="block text-sm font-medium text-black mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-12 py-3 bg-white border border-yellow-600 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Enter your password"
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

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 rounded border-yellow-600 text-black focus:ring-black" />
                <span className="text-sm text-gray-800">Remember me</span>
              </label>
              <a href="#" className="text-sm text-black hover:text-gray-800 font-medium">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-yellow-400 py-3 px-4 rounded-lg hover:bg-gray-900 transition-all font-bold"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-800">
              Don't have an account?{' '}
              <Link href="/join" className="text-black hover:text-gray-800 font-bold">
                Join as Photographer
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