"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // hamburger & close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-100 bg-white fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 lg:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold">
          <img src="/Dhaamai/Vector.svg" alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-gray-900">
            Platform
          </a>
          <a href="#" className="hover:text-gray-900">
            Features
          </a>
          <a href="#" className="hover:text-gray-900">
            Use Cases
          </a>
          <a href="#" className="hover:text-gray-900">
            Pricing
          </a>
          <a href="#" className="hover:text-gray-900">
            Resources
          </a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="px-4 py-2 border rounded-full text-gray-700 hover:bg-gray-100">
            Log In
          </button>
          <button className="px-4 py-2 rounded-full bg-[#7E3AF2] text-white hover:bg-[#692ddc]">
            Book a Demo
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md border-t border-gray-100">
          <nav className="flex flex-col gap-6 px-6 py-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-[#7E3AF2]">
              Platform
            </a>
            <a href="#" className="hover:text-[#7E3AF2]">
              Features
            </a>
            <a href="#" className="hover:text-[#7E3AF2]">
              Use Cases
            </a>
            <a href="#" className="hover:text-[#7E3AF2]">
              Pricing
            </a>
            <a href="#" className="hover:text-[#7E3AF2]">
              Resources
            </a>
            <div className="flex flex-col gap-4 mt-4">
              <button className="px-4 py-2 border rounded-full text-gray-700 hover:bg-gray-100 w-full">
                Log In
              </button>
              <button className="px-4 py-2 rounded-full bg-[#7E3AF2] text-white hover:bg-[#692ddc] w-full">
                Book a Demo
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
