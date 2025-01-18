'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#2a72b8] text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className={`text-3xl font-bold text-white hover:text-gray-200 transition-colors`}>
          NorCal VGC
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex h-16 items-center">
          <div className="flex space-x-8">
            <Link 
              href="/" 
              className="text-white px-3 py-2 text-sm font-medium hover:text-gray-200"
            >
              Home
            </Link>
            <Link 
              href="/players" 
              className="text-white px-3 py-2 text-sm font-medium hover:text-gray-200"
            >
              Players
            </Link>
            <Link 
              href="/past-seasons" 
              className="text-white px-3 py-2 text-sm font-medium hover:text-gray-200"
            >
              Past Seasons
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-16 left-0 right-0 bg-[#2a72b8] shadow-lg`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className="block text-white px-3 py-2 text-base font-medium hover:bg-[#1a62a8]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/players" 
              className="block text-white px-3 py-2 text-base font-medium hover:bg-[#1a62a8]"
              onClick={() => setIsMenuOpen(false)}
            >
              Players
            </Link>
            <Link 
              href="/past-seasons" 
              className="block text-white px-3 py-2 text-base font-medium hover:bg-[#1a62a8]"
              onClick={() => setIsMenuOpen(false)}
            >
              Past Seasons
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
