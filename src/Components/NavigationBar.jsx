import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Briefcase, Info, Phone } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileScroll = (target) => {
    setIsOpen(false); // Close the menu
    setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    }, 300); // Small delay to allow menu to close first
  };

  return (
// In the nav element, add max-w-screen to prevent overflow
    <nav className="bg-gradient-to-r from-[#1A1A40] to-[#25255A] shadow-lg fixed top-0 left-0 w-full z-50 max-w-screen">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-white flex items-center space-x-2">
          <Briefcase size={30} className="text-yellow-400" />
          <span>Career Recommendation System</span>
        </Link>

        {/* Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="flex items-center text-white text-lg font-medium hover:text-yellow-300 transition duration-300">
            <Home size={20} className="mr-2" /> Home
          </Link>
          <ScrollLink 
            to="footer-section" 
            smooth={true} 
            duration={500} 
            className="flex items-center text-white text-lg font-medium hover:text-yellow-300 transition duration-300 cursor-pointer"
          >
            <Info size={20} className="mr-2" /> About
          </ScrollLink>
          <Link to="/careers" className="flex items-center text-white text-lg font-medium hover:text-yellow-300 transition duration-300">
            <Briefcase size={20} className="mr-2" /> Careers
          </Link>
          <ScrollLink 
            to="footer-section" 
            smooth={true} 
            duration={500} 
            className="flex items-center text-white text-lg font-medium hover:text-yellow-300 transition duration-300 cursor-pointer"
          >
            <Phone size={20} className="mr-2" /> Contact
          </ScrollLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 rounded-md text-white hover:bg-white/20 transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md w-full">
            <div className="flex flex-col space-y-4 py-4 text-center">
            <Link to="/" className="flex items-center justify-center text-gray-800 text-lg font-medium hover:text-blue-500">
              <Home size={20} className="mr-2" /> Home
            </Link>
            <button 
              onClick={() => handleMobileScroll("footer-section")} 
              className="flex items-center justify-center text-gray-800 text-lg font-medium hover:text-blue-500 cursor-pointer"
            >
              <Info size={20} className="mr-2" /> About
            </button>
            <Link to="/careers" className="flex items-center justify-center text-gray-800 text-lg font-medium hover:text-blue-500">
              <Briefcase size={20} className="mr-2" /> Careers
            </Link>
            <button 
              onClick={() => handleMobileScroll("footer-section")} 
              className="flex items-center justify-center text-gray-800 text-lg font-medium hover:text-blue-500 cursor-pointer"
            >
              <Phone size={20} className="mr-2" /> Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavigationBar;
