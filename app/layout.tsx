'use client';

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-black to-gray-900 min-h-screen">
        <header className="bg-black shadow-2xl border-b border-yellow-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <a href="/" className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg p-2 mr-3">
                  <span className="text-black font-bold text-lg">P</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Pixisphere</h1>
                  <p className="text-yellow-300 text-xs">Professional Photography Platform</p>
                </div>
              </a>
              
              <nav className="hidden md:flex space-x-8">
                <a href="/" className="text-yellow-300 hover:text-yellow-400 font-medium transition-colors cursor-pointer">Browse Photographers</a>
                <a href="/services" className="text-yellow-300 hover:text-yellow-400 font-medium transition-colors cursor-pointer">Services</a>
                <a href="/about" className="text-yellow-300 hover:text-yellow-400 font-medium transition-colors cursor-pointer">About</a>
                <a href="/contact" className="text-yellow-300 hover:text-yellow-400 font-medium transition-colors cursor-pointer">Contact</a>
              </nav>
              
              <div className="flex items-center space-x-4">
                <a 
                  href="/signin"
                  className="text-yellow-300 hover:text-yellow-400 font-medium transition-colors cursor-pointer"
                >
                  Sign In
                </a>
                <a 
                  href="/join"
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 py-2 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all font-bold cursor-pointer shadow-lg"
                >
                  Join as Photographer
                </a>
              </div>
            </div>
          </div>
        </header>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-black text-yellow-300 border-t border-yellow-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full p-2 mr-3">
                    <span className="text-black font-bold text-sm">P</span>
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-400">Pixisphere</h3>
                </div>
                <p className="text-yellow-200 mb-4 max-w-md">
                  India's premier platform connecting customers with professional photographers for life's most precious moments.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors">Facebook</a>
                  <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors">Instagram</a>
                  <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors">Twitter</a>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-yellow-400">Services</h4>
                <ul className="space-y-2 text-yellow-200">
                  <li><a href="#" className="hover:text-yellow-300 transition-colors">Maternity Photography</a></li>
                  <li><a href="#" className="hover:text-yellow-300 transition-colors">Newborn Photography</a></li>
                  <li><a href="#" className="hover:text-yellow-300 transition-colors">Wedding Photography</a></li>
                  <li><a href="#" className="hover:text-yellow-300 transition-colors">Birthday Photography</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-yellow-400">Company</h4>
                <ul className="space-y-2 text-yellow-200">
                  <li><a href="#" className="hover:text-yellow-300 transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-yellow-300 transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-yellow-300 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-yellow-300 transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-yellow-600 mt-8 pt-8 text-center text-yellow-400">
              <p>&copy; 2024 Pixisphere. All rights reserved. Made with 👑 for photographers and families.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}