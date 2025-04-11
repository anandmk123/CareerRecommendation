import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";

export default function UserInputForm() {
  const initialState = {
    // Academic Performance
    Physics: "",
    Chemistry: "",
    Mathematics: "",
    Biology: "",
    English: "",
    SocialScience: "",
    // Personality Traits
    LogicalThinking: "",
    CreativeThinking: "",
    Leadership: "",
    Volunteering: "",
    // Extracurricular Activities
    Sports: "",
    Arts: "",
    ScienceClub: "",
    NCC_NSS: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errs = {};

    // Academic Performance: range 1-100
    ["Physics", "Chemistry", "Mathematics", "Biology", "English", "SocialScience"].forEach((field) => {
      const value = Number(formData[field]);
      if (!formData[field]) {
        errs[field] = "This field is required";
      } else if (value < 1 || value > 100) {
        errs[field] = "Value must be between 1 and 100";
      }
    });

    // Personality Traits: range 1-10
    ["LogicalThinking", "CreativeThinking", "Leadership", "Volunteering"].forEach((field) => {
      const value = Number(formData[field]);
      if (!formData[field]) {
        errs[field] = "This field is required";
      } else if (value < 1 || value > 10) {
        errs[field] = "Value must be between 1 and 10";
      }
    });

    // Extracurricular Activities: range 1-10
    ["Sports", "Arts", "ScienceClub", "NCC_NSS"].forEach((field) => {
      const value = Number(formData[field]);
      if (!formData[field]) {
        errs[field] = "This field is required";
      } else if (value < 1 || value > 10) {
        errs[field] = "Value must be between 1 and 10";
      }
    });

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const queryParams = new URLSearchParams(formData).toString();
      const apiURL = `https://anandmkunni1999.loca.lt/recommend?${queryParams}`;
  
      try {
        const response = await fetch(apiURL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'bypass-tunnel-reminder': 'true', // Add this header
            'ngrok-skip-browser-warning': 'true', // Ensure this bypasses the warning
          },
        });
  
        if (!response.ok) {
          const text = await response.text(); // Get raw response for debugging
          console.log("Raw Response:", text); // Log the HTML or error
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log("API Response:", data);
        navigate("/results", { state: { apiResponse: data } });
      } catch (error) {
        console.error("Error fetching API:", error.message, error.stack);
        alert("There was an error processing your request. Check the console for details.");
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8"
      >
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Career Input Questionnaire
        </h1>
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Academic Performance Section */}
          <motion.section variants={sectionVariants} initial="hidden" animate="visible">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Academic Performance
            </h2>
            <p className="text-gray-600 mb-4">
              Please provide your marks from the most recent exam (results out of 100).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Physics", "Chemistry", "Mathematics", "Biology", "English", "SocialScience"].map((field) => (
                <div key={field}>
                  <label className="block text-gray-700 font-medium">{field}</label>
                  <input
                    type="number"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder="1-100"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  />
                  {errors[field] && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <FiAlertCircle className="mr-1" /> {errors[field]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Personality Traits Section */}
          <motion.section variants={sectionVariants} initial="hidden" animate="visible">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Personality Traits
            </h2>
            <p className="text-gray-600 mb-4">
              Answer the following questions on a scale from 1 (Not at all) to 10 (Very much):
            </p>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium">
                  Do you enjoy solving puzzles, math problems, or figuring out how things work?
                </label>
                <input
                  type="number"
                  name="LogicalThinking"
                  value={formData.LogicalThinking}
                  onChange={handleChange}
                  placeholder="1-10"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
                {errors.LogicalThinking && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <FiAlertCircle className="mr-1" /> {errors.LogicalThinking}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Do you like coming up with new ideas, drawing, writing stories, or creating something unique?
                </label>
                <input
                  type="number"
                  name="CreativeThinking"
                  value={formData.CreativeThinking}
                  onChange={handleChange}
                  placeholder="1-10"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
                {errors.CreativeThinking && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <FiAlertCircle className="mr-1" /> {errors.CreativeThinking}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Do you like being a leader, organizing group activities, or guiding others to finish tasks?
                </label>
                <input
                  type="number"
                  name="Leadership"
                  value={formData.Leadership}
                  onChange={handleChange}
                  placeholder="1-10"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
                {errors.Leadership && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <FiAlertCircle className="mr-1" /> {errors.Leadership}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Do you enjoy helping others, like supporting friends, volunteering, or being kind to people?
                </label>
                <input
                  type="number"
                  name="Volunteering"
                  value={formData.Volunteering}
                  onChange={handleChange}
                  placeholder="1-10"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
                {errors.Volunteering && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <FiAlertCircle className="mr-1" /> {errors.Volunteering}
                  </p>
                )}
              </div>
            </div>
          </motion.section>

          {/* Extracurricular Activities Section */}
          <motion.section variants={sectionVariants} initial="hidden" animate="visible">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Extracurricular Activities
            </h2>
            <p className="text-gray-600 mb-4">
              Please share your involvement in activities (scale: 1 - Not at all to 10 - Very much):
            </p>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium">
                  Do you participate in any sports activities? (e.g., Football, Cricket, Athletics, etc.)
                </label>
                <input
                  type="number"
                  name="Sports"
                  value={formData.Sports}
                  onChange={handleChange}
                  placeholder="1-10"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
                {errors.Sports && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <FiAlertCircle className="mr-1" /> {errors.Sports}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Do you engage in creative activities like drawing, painting, singing, dancing, or acting?
                </label>
                <input
                  type="number"
                  name="Arts"
                  value={formData.Arts}
                  onChange={handleChange}
                  placeholder="1-10"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
                {errors.Arts && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <FiAlertCircle className="mr-1" /> {errors.Arts}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Have you participated in any science or math-related activities, such as quizzes, science fairs, or exhibitions?
                </label>
                <input
                  type="number"
                  name="ScienceClub"
                  value={formData.ScienceClub}
                  onChange={handleChange}
                  placeholder="1-10"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
                {errors.ScienceClub && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <FiAlertCircle className="mr-1" /> {errors.ScienceClub}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Are you involved in activities like volunteering, mentoring, or groups such as NCC, NSS, Scouts, or Guides?
                </label>
                <input
                  type="number"
                  name="NCC_NSS"
                  value={formData.NCC_NSS}
                  onChange={handleChange}
                  placeholder="1-10"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
                {errors.NCC_NSS && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <FiAlertCircle className="mr-1" /> {errors.NCC_NSS}
                  </p>
                )}
              </div>
            </div>
          </motion.section>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
}
