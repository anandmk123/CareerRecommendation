import React from 'react';
import { Info, Phone, Mail, MapPin } from "lucide-react";

function FooterBar() {
  return (
// In FooterBar.jsx
      <footer id="footer-section" className="bg-gray-900 text-white py-16 pt-20 w-full overflow-hidden">
        <div className="container mx-auto px-6 text-center">
        
        {/* About Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-yellow-300 flex justify-center items-center">
            <Info size={24} className="mr-2" /> About Us
          </h2>
          <p className="mt-2 text-gray-300">
          Career Recommendation System – Designed for 10th-grade students, our system leverages Fuzzy Logic and has been validated by career counselors. It analyzes academic performance, personal traits, and extracurricular activities to suggest career groups with confidence scores, helping students explore suitable paths for their future.          </p>
        </div>

        {/* Contact Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-yellow-300 flex justify-center items-center">
            <Phone size={24} className="mr-2" /> Contact Us
          </h2>
          <p className="mt-2 text-gray-300 flex justify-center items-center">
            <Mail size={20} className="mr-2" /> anandmk.242cs008@nitk.edu.in
          </p>
          <p className="mt-2 text-gray-300 flex justify-center items-center">
            <MapPin size={20} className="mr-2" /> NITK, Surathkal, India
          </p>
        </div>

      </div>
    </footer>
  );
}

export default FooterBar;
