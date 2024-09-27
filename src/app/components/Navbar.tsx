'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white text-2xl font-semibold">
            Weather Dashboard
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg">
              Home
            </Link>
            <Link href="/weather" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg">
              Weather
            </Link>
            <Link href="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg">
              About
            </Link>
            <Link href="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? '✖️' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <Link href="/" className="block px-4 py-2 text-white hover:bg-gray-700">
            Home
          </Link>
          <Link href="/weather" className="block px-4 py-2 text-white hover:bg-gray-700">
            Weather
          </Link>
          <Link href="/about" className="block px-4 py-2 text-white hover:bg-gray-700">
            About
          </Link>
          <Link href="/contact" className="block px-4 py-2 text-white hover:bg-gray-700">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}