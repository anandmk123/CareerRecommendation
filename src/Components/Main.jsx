import React from 'react'
import { BrainCircuit, Users, Activity, PlayCircle, Star,CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";


function Main() {

  return (
  
    <div className="container mx-auto px-6 py-16 text-center">
    {/* Title with Style */}

        {/* Title Section */}
        <div className="text-center mb-8 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-lg">
            🌟 Discover Your Future Path! 🌟
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Career Recommendation System for 10th Grade Students
        </h2>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-4xl mx-auto mt-4 sm:mt-6 mb-8 sm:mb-10 leading-relaxed bg-white p-4 sm:p-6 rounded-xl shadow-lg">
        Designed exclusively for <strong className="text-blue-600">10th-grade students</strong>, our system leverages advanced 
        <span className="text-blue-500 font-semibold"> Fuzzy Logic</span> and has been <strong className="text-green-600">validated by career counselors</strong>.  
        </p>

        {/* Key Features */}
        <ul className="text-gray-800 text-sm sm:text-base md:text-lg max-w-3xl mx-auto space-y-4 px-4">
        <li className="flex items-start sm:items-center">
            <CheckCircle size={18} sm:size={20} md:size={24} className="text-green-500 mt-1 sm:mt-0 mr-3" /> 
            <strong>Personalized career group recommendations</strong>
        </li>
        <li className="flex items-start sm:items-center">
            <CheckCircle size={18} sm:size={20} md:size={24} className="text-green-500 mt-1 sm:mt-0 mr-3" /> 
            <strong>Confidence scores for each career path</strong>
        </li>
        <li className="flex items-start sm:items-center">
            <CheckCircle size={18} sm:size={20} md:size={24} className="text-green-500 mt-1 sm:mt-0 mr-3" /> 
            <strong>Consideration of academic performance, personality, and extracurriculars</strong>
        </li>
        </ul>


        {/* Career Groups */}
        <div className="bg-gradient-to-br from-blue-50 to-gray-100 p-8 rounded-2xl shadow-xl max-w-4xl mx-auto mb-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-5 flex items-center justify-center">
            <Star size={28} className="text-yellow-500 mr-3" /> Career Groups Identified
        </h3>
        <ul className="text-gray-800 text-lg text-left space-y-3 pl-6">
            <li className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            <strong>Engineering and Technology</strong>
            </li>
            <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            <strong>Healthcare and Medicine</strong>
            </li>
            <li className="flex items-center">
            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
            <strong>Business and Commerce</strong>
            </li>
            <li className="flex items-center">
            <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
            <strong>Creative Arts and Design</strong>
            </li>
            <li className="flex items-center">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
            <strong>Sports and Physical Education</strong>
            </li>
            <li className="flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
            <strong>Teaching and Social Services</strong>
            </li>
        </ul>
        <p className="text-gray-700 mt-4 text-center text-lg">
            Each group is suggested with a <strong className="text-blue-600">confidence score</strong>, 
            helping you discover the best-suited paths for your future!
        </p>
        </div>


    {/* Input Categories */}
    <div className="grid md:grid-cols-3 gap-10 text-left">
    {/* Academic Performance */}
    <div className="bg-white p-8 shadow-xl rounded-xl text-center transform transition duration-300 hover:scale-105">
        <BrainCircuit size={50} className="text-blue-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-blue-700">Academic Performance</h2>
        <p className="text-gray-600 mt-3">
        Analyzes scores in <strong className="text-blue-600">Physics, Chemistry, Mathematics, Biology, English, and Social Science</strong>.
        </p>
    </div>

    {/* Personal Traits */}
    <div className="bg-white p-8 shadow-xl rounded-xl text-center transform transition duration-300 hover:scale-105">
        <Users size={50} className="text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-green-700">Personal Traits</h2>
        <p className="text-gray-600 mt-3">
        Assesses <strong className="text-green-600">Logical Thinking, Creative Thinking, Volunteering, and Leadership</strong>.
        </p>
    </div>

    {/* Extracurricular Activities */}
    <div className="bg-white p-8 shadow-xl rounded-xl text-center transform transition duration-300 hover:scale-105">
        <Activity size={50} className="text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-red-700">Extracurricular Activities</h2>
        <p className="text-gray-600 mt-3">
        Recognizes involvement in <strong className="text-red-600">Sports, Arts, Science Club, NSS, NCC</strong>, and more.
        </p>
    </div>
    </div>

    {/* Start Button */}
    <div className="mt-12 text-center">
    <Link to="/careers" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center mx-auto w-72 shadow-lg transform transition duration-300 hover:scale-105">
        <PlayCircle size={26} className="mr-2" />
        Start Predicting Career
    </Link>
    </div>

  </div>

  )
}

export default Main
